import { Layout } from '@/components/Layout';
import store from '@/redux/store';
import { GlobalStyle } from '@/styles/global';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <GlobalStyle />
          <Component {...pageProps} />
      </Layout>
    </Provider>
  );
};