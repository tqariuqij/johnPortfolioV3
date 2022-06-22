import React from 'react';
import '../styles/globals.css';
import { Layout } from '../container';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}

export default MyApp;
