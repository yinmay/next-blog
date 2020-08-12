import '../styles/globals.css';
import { Fragment } from 'react';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Blog</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86'
        />
      </Head>

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
