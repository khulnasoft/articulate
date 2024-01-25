import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react'
import builderConfig from '@config/builder'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
// loading widgets dynamically to reduce bundle size, will only be included in bundle when is used in the content
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import '../components/Heading'

builder.init(builderConfig.apiKey)

export async function getStaticProps({
  params,
  locale, // Get active locale from context
}: GetStaticPropsContext<{ page: string[] }>) {
  const page =
    (await builder
      .get('page', {
        userAttributes: {
          urlPath: '/' + (params?.page?.join('/') || ''),
        },
        options: {
          locale, // Automatically resolve the locale on localized inputs at build time
        },
      })
      .toPromise()) || null

  return {
    props: {
      page,
      locale,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 5 seconds
    revalidate: 5,
  }
}

export async function getStaticPaths() {
  const pages = await builder.getAll('page', {
    options: { noTargeting: true },
    omit: 'data.blocks',
  })

  return {
    paths: pages.map((page) => `${page.data?.url}`),
    fallback: true,
  }
}

export default function Page({
  page,
  locale,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isPreviewingInBuilder = useIsPreviewing()
  const show404 = !page && !isPreviewingInBuilder

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {!page && <meta name="robots" content="noindex" />}
      </Head>
      {show404 ? (
        <DefaultErrorPage statusCode={404} />
      ) : (
        // Pass active locale to preview resolved locale content client-side in Visual Editor
        <BuilderComponent model="page" content={page} locale={locale} />
      )}
    </>
  )
}
