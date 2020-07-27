import App, { AppInitialProps, AppContext } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import Layout from '@/components/Layout'
// import '../css/tailwind.css'
import 'tailwindcss/dist/base.min.css'

export default class MyApp extends App<AppInitialProps> {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <RecoilRoot>
          <Head>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RecoilRoot>
      </>
    )
  }
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx)

  return { ...appProps }
}
