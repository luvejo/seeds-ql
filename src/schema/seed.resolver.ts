import { Resolver, Query, Arg } from 'type-graphql'

import { Seed } from './seed'
import seeds from './seeds.json'

@Resolver(Seed)
export class SeedsResolver {
  @Query(() => Seed)
  seed(@Arg('slug', () => String) slug: string): Seed | undefined {
    const seed = seeds.find((seed) => seed.slug === slug)

    if (seed === undefined) {
      throw new Error('Seed not found')
    }

    return seed
  }

  @Query(() => [Seed])
  seeds(): Seed[] {
    return seeds
  }
}
