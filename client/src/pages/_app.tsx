import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import CommonHeader from '@/components/UI/CommonHeader';
import { store } from '@/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
      </Head>
      <Provider store={store}>
        <CommonHeader />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp;
