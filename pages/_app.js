import Head from 'next/head';
import CdpSnippet from '@components/CdpSnippet';

import '@styles/globals.css';

function Application({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Healthy Living Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>
      <CdpSnippet />
    </>
  )
}

export default Application;
