import type { NextApiRequest, NextApiResponse } from 'next'
import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'

import models from '@/graphql/models/seed.gql'
import resolvers from '@/graphql/resolvers'

const cors = Cors({
  origin: ['https://studio.apollographql.com'],
})
const server = new ApolloServer({ typeDefs: models, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

const startServer = server.start()

export default cors(async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await server.createHandler({ path: '/api/graphql' })(req, res)
})
