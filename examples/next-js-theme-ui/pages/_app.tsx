import '@assets/main.css'
import { builder } from '@builder.io/react'
import Layout from '@components/common/Layout'
import builderConfig from '@config/builder'
import type { AppProps } from 'next/app'

builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
