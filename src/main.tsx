import './styles/index.scss'

import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { SnackBarProvider } from './contexts/SnackBar/SnackBarContext'
import { client } from './services/apollo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <SnackBarProvider>
        <App />
      </SnackBarProvider>
    </ApolloProvider>
  </React.StrictMode>
)
