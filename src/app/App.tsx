import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from 'app/shared/core/apollo';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
