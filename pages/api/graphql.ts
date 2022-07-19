import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import { buildSchema } from 'type-graphql'
import { SeedsResolver } from '@/src/schema/seed.resolver'

const schema = await buildSchema({
  resolvers: [SeedsResolver],
})

const server = new ApolloServer({ schema })

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = server.start()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader(
    'Access-Control-Allow-Origin',
    'https://studio.apollographql.com',
  )
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers',
  )
  res.setHeader(
    'Access-Control-Allow-Methods',
    'POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD',
  )
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await server.createHandler({ path: '/api/graphql' })(req, res)
}
