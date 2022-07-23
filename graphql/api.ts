import { GraphQLClient } from 'graphql-request'
import { QueryClient } from 'react-query'

import { getSdk } from '@/.output/graphql'

const client = new GraphQLClient('http://localhost:3000/api/graphql')
export const { getSeeds, getSeedBySlug } = getSdk(client)

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
})
