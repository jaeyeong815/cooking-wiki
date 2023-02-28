import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/store';
import CommonHeader from '@/components/UI/CommonHeader';
import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <CommonHeader />
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
