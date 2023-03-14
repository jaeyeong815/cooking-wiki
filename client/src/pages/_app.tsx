import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import CommonHeader from '@/components/UI/CommonHeader';
import { store } from '@/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <CommonHeader />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
