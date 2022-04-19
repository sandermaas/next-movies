import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import PageLayout from './layouts/PageLayout'

import { AppPropsWithLayout } from 'types/app.types'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<QueryClientProvider client={queryClient}>
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </QueryClientProvider>)
}

export default MyApp
