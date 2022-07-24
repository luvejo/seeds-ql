import { PrismaClient } from '@prisma/client'
import { QuerySeedArgs, QuerySeedsArgs, Seed } from '@/.output/graphql'

const prisma = new PrismaClient()

const ITEMS_PER_PAGE = 4

async function seed(_ctx, { slug }: QuerySeedArgs): Promise<Seed> {
  const seed = await prisma.seed.findFirst({
    where: { slug },
    include: { contact: true },
  })

  if (seed === undefined) {
    throw new Error('Seed not found')
  }

  return seed
}

async function seeds(
  _ctx,
  { skip = 0, take = ITEMS_PER_PAGE }: QuerySeedsArgs,
): Promise<Seed[]> {
  const seeds = await prisma.seed.findMany({
    orderBy: { createdAt: 'desc' },
    skip,
    take,
  })

  return seeds
}

export default {
  Query: {
    seed,
    seeds,
  },
}
