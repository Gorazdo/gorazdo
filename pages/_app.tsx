import {
  AppBar,
  Button,
  CssBaseline,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Head from 'next/head';
import { useEffect } from 'react';
import { Layout } from 'src/components/organisms/Layout';

import dynamic from 'next/dynamic';

const FirebaseAuthUIProvider = dynamic(
  () =>
    import('src/contexts/FirebaseAuth').then(
      (mod) => mod.FirebaseAuthUIProvider
    ),
  { ssr: false }
);

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);
  return (
    <>
      <Head>
        <title>Gorazdo {pageProps.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <CssBaseline />
      <Layout>
        <FirebaseAuthUIProvider>
          <Component {...pageProps} />
        </FirebaseAuthUIProvider>
      </Layout>
    </>
  );
}

export default MyApp;
