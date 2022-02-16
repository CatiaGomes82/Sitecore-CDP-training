import Head from 'next/head';
import { useEffect } from "react";
import AppContext from '../store/AppContext';
import CdpSnippet from '@components/CdpSnippet';
import Navigation from '@components/Navigation';
import Alert from '@components/Alert';
import initialState from 'store/index';
import * as serviceWorkerRegistration from '../serviceWorkerRegistration';

import '@styles/globals.css';

function Application({ Component, pageProps }) {

  useEffect(() => {
      serviceWorkerRegistration.register();
  }, [])

  return (
    <AppContext.Provider value={initialState}>
      <Head>
        <title>Healthy Living Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Alert />
        <Navigation />
        <Component {...pageProps} />
      </main>
      <CdpSnippet />
      </AppContext.Provider>
  )
}

export default Application;
