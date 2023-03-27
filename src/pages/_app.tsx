import { Layout } from '@/components/Layout/Layout';
import CustomSkeleton from '@/components/Skeleton/CustomSkeleton';
import store from '@/redux/store';
import { GlobalStyle } from '@/styles/global';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3500);
  }, []);

  return (
    <Provider store={store}>
      {
        isLoading ? (
          <CustomSkeleton />
        ) : (
          <Layout>
            <GlobalStyle />
            <Component {...pageProps} />
          </Layout>
        )
      }
    </Provider>
  );
};