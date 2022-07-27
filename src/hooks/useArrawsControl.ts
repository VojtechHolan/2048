import { useEffect } from 'react'

import { Direction } from '../enums/Directive'

export const useArrowsControl = (
  onKeyDown: (key: Direction) => void,
  active = false
): void => {
  const handleKeyDown = (event: KeyboardEvent): void => {
    const { key } = event
    if (
      key === Direction.LEFT ||
      key === Direction.RIGHT ||
      key === Direction.UP ||
      key === Direction.DOWN
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
