import { ApolloClient, HttpLink, InMemoryCache, } from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';
import { createApolloProvider } from '@vue/apollo-option';
import { API_BASE_URL } from './config';
import { useAuthStore } from './stores/auth';

const cache = new InMemoryCache()
const httpLink = new HttpLink({
  uri: `${API_BASE_URL}graphql`,
})
const authLink = setContext((_, { headers }) => {
  const auth = useAuthStore();
  const token = auth.accessToken
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

const errorLink = onError(error => {
  // TODO: handle token expiration
  console.error("Interceptor said: ", error)
})

export const apolloClient = new ApolloClient({
  cache,
  link: errorLink.concat(authLink).concat(httpLink),
})

export const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
  errorHandler: (error) => {
    console.error("proveder said: " + error.message)
  }
})