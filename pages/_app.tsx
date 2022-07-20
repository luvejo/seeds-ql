import { Hydrate, QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'
import { queryClient } from '@/src/api'

import '@/assets/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
