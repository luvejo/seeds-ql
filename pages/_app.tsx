import { Hydrate, QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'
import { queryClient } from '@/src/api'
import MainLayout from '@/layouts/main'

import '@/assets/main.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
