import { createContext, ReactElement, useMemo, useState } from 'react'

import { token } from '../../services/apollo'
import {
  resetTokenForApollo,
  setTokenForApollo,
} from '../../services/apollo/token'
import { defaultUser, User } from './types'

type AuthContextProps = {
  children: ReactElement | ReactElement[]
}

export interface AuthProviderType {
  login: (user: User) => void
  getUser: () => string
  isSignedIn: boolean
  signOut: () => void
}

export const AuthContext = createContext<AuthProviderType | null>(null)

export function AuthProvider({ children }: AuthContextProps): ReactElement {
  const [user, setUser] = useState<User>(defaultUser)

  const login = (user: User): void => {
    setUser(user)
    setTokenForApollo(user.token)
  }

  const getUser = (): string => user.name

  const isSignedIn = !!user.token

  const signOut = (): void => {
    setUser(defaultUser)
    resetTokenForApollo()
  }

  const value = useMemo(
    () => ({
      login,
      getUser,
      isSignedIn,
      signOut,
    }),
    [login, getUser, isSignedIn, signOut]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
