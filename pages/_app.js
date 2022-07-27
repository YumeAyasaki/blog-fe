import Layout from '../components/layout/Layout'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>) // Basic theme and other theme (or null theme)

  return getLayout(<Component {...pageProps} />)
}

export default MyApp
