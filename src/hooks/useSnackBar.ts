import { useSnackBarContext } from '../contexts/SnackBar/useSnackBarContext'

export const useSnackBar = (): ((message: string) => void) => {
  const { push } = useSnackBarContext()

  return push
}
