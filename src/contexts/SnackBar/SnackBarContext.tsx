import {
  createContext,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from 'react'

type SnackBarContextProps = {
  children: ReactElement | ReactElement[]
}

export type SnackBar = { message: string }

export interface SnackBarProviderType {
  push: (message: string) => void
  snackBars: SnackBar[]
}

export const SnackBarContext = createContext<SnackBarProviderType | null>(null)

export function SnackBarProvider({
  children,
}: SnackBarContextProps): ReactElement {
  const [snackBars, setSnackBars] = useState<SnackBar[]>([])

  const push = (message: string): void => {
    setSnackBars((prev) => [...prev, { message }])
  }

  // Destroy snack bar after 5000 seconds
  useEffect(() => {
    if (snackBars.length) {
      setTimeout(() => {
        setSnackBars((prev) => {
          const copy = [...prev]
          copy.shift()
          return copy
        })
      }, 5000)
    }
  }, [snackBars])

  const value = useMemo(
    () => ({
      snackBars,
      push,
    }),
    [push, snackBars]
  )

  return (
    <SnackBarContext.Provider value={value}>
      {children}
    </SnackBarContext.Provider>
  )
}
