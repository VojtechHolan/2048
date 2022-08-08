import { useEffect } from 'react'

import { ArrowKeysDirection } from '../enums/arrowKeysDirection'

export const useArrowsControl = (
  onKeyDown: (key: ArrowKeysDirection) => void,
  active = true
): void => {
  const handleKeyDown = (event: KeyboardEvent): void => {
    const { key } = event
    if (
      key === ArrowKeysDirection.LEFT ||
      key === ArrowKeysDirection.RIGHT ||
      key === ArrowKeysDirection.UP ||
      key === ArrowKeysDirection.DOWN
    ) {
      onKeyDown(key)
    }
  }

  useEffect(() => {
    if (active) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [active, handleKeyDown])
}
