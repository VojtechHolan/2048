import './styles/index.scss'

import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App'
import { AuthProvider } from './contexts/AuthContext/AuthContext'
import { SnackBarProvider } from './contexts/SnackBarContext/SnackBarContext'
import { client } from './services/apollo'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <SnackBarProvider>
          <App />
        </SnackBarProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
)
