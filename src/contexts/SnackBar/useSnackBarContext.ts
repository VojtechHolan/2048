import { useContext } from 'react'

import { SnackBarContext, SnackBarProviderType } from './SnackBarContext'

export const useSnackBarContext = (): SnackBarProviderType => {
  const context = useContext(SnackBarContext)

  if (!context) {
    throw Error('Wrap parent by <SnackBarProvider />!')
  }

  return context
}
