import Head from 'next/head'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <>      
        <Head>
          <title>Coffee Roasters</title>
          <meta name="description" content="Coffee roasters webpage" />
          <link rel="icon" href="/assets/shared/desktop/logo_fav.svg" type="image/svg+xml"/>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
  )
}

export default MyApp
