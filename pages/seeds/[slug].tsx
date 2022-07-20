import { dehydrate, useQuery } from 'react-query'
import { queryClient, getSeedBySlug } from '@/src/api'

export async function getServerSideProps({ params }) {
  await queryClient.prefetchQuery('seed', () =>
    getSeedBySlug({ slug: params.slug }),
  )
  return {
    props: {
      slug: params.slug,
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Seeds({ slug }) {
  const { data } = useQuery('seed', () => getSeedBySlug({ slug }))

  if (!data?.seed) {
    return <div>404 - No seed found.</div>
  }

  const { seed } = data

  return (
    <article className="p-5 border bg-gray-100 rounded">
      <h2 className="text-xl font-bold ">{seed.name}</h2>

      {/* Don't do this without proper sanitization: */}
      <div
        className="mt-2"
        dangerouslySetInnerHTML={{ __html: seed.description }}
      />

      <h3 className="mt-4 text-lg font-semibold">Contact</h3>

      <p>{seed.contact.fullName}</p>
    </article>
  )
}
