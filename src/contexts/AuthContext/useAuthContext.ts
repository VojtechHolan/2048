import { useContext } from 'react'

import { AuthContext, AuthProviderType } from './AuthContext'

export const useAuthContext = (): AuthProviderType => {
  const context = useContext(AuthContext)

  if (!context) {
    throw Error('Wrap parent by <AuthProvider />!')
  }

  return context
}
