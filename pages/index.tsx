import { dehydrate, useQuery } from 'react-query'
import { queryClient, getSeeds } from '@/src/api'

export async function getServerSideProps() {
  await queryClient.prefetchQuery('seeds', () => getSeeds())
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default function Home() {
  const { data } = useQuery('seeds', () => getSeeds())

  return <div>{JSON.stringify(data)}</div>
}
