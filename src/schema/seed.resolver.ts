import { Resolver, Query } from 'type-graphql'

import { Seed } from './seed'
import seeds from './seeds.json'

@Resolver(Seed)
export class SeedsResolver {
  @Query(() => [Seed])
  seeds(): Seed[] {
    return seeds
  }
}
