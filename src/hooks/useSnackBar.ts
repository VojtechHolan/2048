import { useSnackBarContext } from '../contexts/SnackBarContext/useSnackBarContext'

export const useSnackBar = (): ((message: string) => void) => {
  const { push } = useSnackBarContext()

  return push
}
