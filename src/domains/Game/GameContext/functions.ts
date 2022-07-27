import { Direction } from 'enums/Directive'
import { getRandomNumberFromRange } from 'services/random'

import { Board } from '../../../types/Board'

/**
 * Transform array as following:
 * [2, 2, 4, 4] => [4, 8, null, null]
 [2, null, 4, 4] => [2, 8, null, null]
 [4, 2, 4, 8] => [4, 2, 4, 8]
 * @param row - original row
 * @param direction - direction {LEFT, RIGHT}
 */
export const calculateRow = (row: number[], direction: Direction): number[] => {
  const originalRow = direction === Direction.LEFT ? row : row.reverse()

  const newRow = []
  let iterator = 0

  // We must iterate through row
  while (iterator < originalRow.length) {
    // If current box is null skip computation
    if (originalRow[iterator] === null) {
      iterator++
      continue
    }

    // If box is last item and has value push it to new row
    if (iterator === originalRow.length - 1 && originalRow[iterator]) {
      newRow.push(originalRow[iterator])
      break
    }

    let offset = 1
    // Until offset has existing index compare values
    while (iterator + offset <= originalRow.length) {
      // If two boxes have same values merge them
      // And push new value to new row
      if (originalRow[iterator] === originalRow[iterator + offset]) {
        newRow.push(originalRow[iterator] * 2)
        iterator += offset
        break
      }

      // If two boxes have different values push current value to new array
      if (
        originalRow[iterator] !== originalRow[iterator + offset] &&
        originalRow[iterator + offset] !== null
      ) {
        newRow.push(originalRow[iterator])
        break
      }
      offset++
    }
    iterator++
  }

  // [2, 2, 4, 4] => [4, 8]
  // [2, null, 4, 4] => [2, 8]
  // [4, 2, 4, 8] => [4, 2, 4, 8]
  // We need to add empty boxes due to our transformation of new array
  // We compare old and new array and add null at the end of new array
  newRow.push(...Array(originalRow.length - newRow.length).fill(null))

  return direction === Direction.LEFT ? newRow : newRow.reverse()
}

/**
 * Swap columns and rows at 2D array
 * @param twoDimensionArray - 2D array
 */
export const transpose = (twoDimensionArray: Board): Board => {
  return Object.keys(twoDimensionArray[0]).map((value: string) => {
    return twoDimensionArray.map((r: number[]) => r[Number(value)])
  })
}

/**
 * Calculate new row for board
 * @param board - current board
 * @param direction - direction {LEFT, RIGHT}
 */
export const mergeRow = (board: Board, direction: Direction): Board => {
  const newBoard = []

  // Go through all the rows
  for (const originalRow of board) {
    newBoard.push(calculateRow(originalRow, direction))
  }

  return newBoard
}

/**
 * Calculate new column for board
 * @param board - current board
 * @param direction - direction {UO, DOWN}
 */
export const mergeColumn = (board: Board, direction: Direction): Board => {
  const newBoard = mergeRow(
    transpose(board),
    direction === Direction.UP ? Direction.LEFT : Direction.RIGHT
  )

  return transpose(newBoard)
}

/**
 * Generate new board
 * @param board - current board
 * @param direction - direction {LEFT, RIGHT, UP, DOWN}
 */
export const generateNewBoard = (board: Board, direction: Direction): Board => {
  if (direction === Direction.LEFT || direction === Direction.RIGHT) {
    return mergeRow(board, direction)
  }
  return mergeColumn(board, direction)
}

/**
 * Add new box into current board
 * @param board - current board
 */
export const generateNewBox = (board: Board): Board => {
  const copy = [...board]

  while (true) {
    const x = getRandomNumberFromRange(0, 3)
    const y = getRandomNumberFromRange(0, 3)

    if (!copy[x][y]) {
      copy[x][y] = getRandomNumberFromRange(0, 1) ? 2 : 4
      return copy
    }
  }
}

/**
 * Detect end of the game
 * @param board - current board
 */
export const isEndOfGame = (board: Board): boolean => {
  const oneDimensionArr = board.reduce((prev: number[], next: number[]) => {
    return [...prev, ...next]
  })

  return oneDimensionArr.every((board) => board !== null)
}
