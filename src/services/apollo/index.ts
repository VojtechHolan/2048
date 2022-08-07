import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

import { getTokenForApollo } from './token'

const httpLink = createHttpLink({
  uri: import.meta.env.VITE_GRAPHQL_API,
})

const authLink = setContext((_, { headers }) => {
  const token = getTokenForApollo()
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
