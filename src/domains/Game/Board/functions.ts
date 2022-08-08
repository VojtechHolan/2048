import { ArrowKeysDirection } from '../../../enums/arrowKeysDirection'
import { Direction } from '../../../generated/types'

export function translateArrowKeysDirectionToDirection(
  key: ArrowKeysDirection
): Direction | null {
  if (key === ArrowKeysDirection.UP) {
    return Direction.Up
  }

  if (key === ArrowKeysDirection.RIGHT) {
    return Direction.Right
  }

  if (key === ArrowKeysDirection.DOWN) {
    return Direction.Down
  }

  if (key === ArrowKeysDirection.LEFT) {
    return Direction.Left
  }

  return null
}
