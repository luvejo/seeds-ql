import { QuerySeedArgs, Seed } from '@/.output/graphql'
import _seeds from '@/graphql/data.json'

function seed(_ctx, { slug }: QuerySeedArgs): Seed | undefined {
  const seed = _seeds.find((seed) => seed.slug === slug)

  if (seed === undefined) {
    throw new Error('Seed not found')
  }

  return seed
}

function seeds(): Seed[] {
  return _seeds
}

export default {
  Query: {
    seed,
    seeds,
  },
}
