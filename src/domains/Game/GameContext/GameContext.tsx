import {
  createContext,
  ReactElement,
  useCallback,
  useMemo,
  useState,
} from 'react'
import { getRandomNumberFromRange } from 'services/random'

import { Direction } from '../../../enums/Directive'
import { Board } from '../../../types/Board'
import { generateNewBoard, generateNewBox, isEndOfGame } from './functions'

type GameContextProps = {
  children: ReactElement | ReactElement[]
}

export interface GameProviderType {
  handleStartNewGame: () => void
  board: Board | null
  handleChange: (direction: Direction) => void
  isInitialStart: boolean
  currentScore: number
}

export const GameContext = createContext<GameProviderType | null>(null)

export function GameProvider({ children }: GameContextProps): ReactElement {
  const [board, setBoard] = useState<Board | null>(null)
  const [isInitialStart, setIsInitialStart] = useState<boolean>(false)
  const [currentScore, setCurrentScore] = useState<number>(0)

  const handleStartNewGame = useCallback(() => {
    setIsInitialStart(true)
    setCurrentScore(0)

    const newBoard: Board = [...Array(4).fill(null)].map(() =>
      Array(4).fill(null)
    )

    let cubesCount = 0

    while (cubesCount < 3) {
      const x = getRandomNumberFromRange(0, 3)
      const y = getRandomNumberFromRange(0, 3)

      if (!newBoard[x][y]) {
        newBoard[x][y] = 2
        cubesCount++
      }
    }

    setBoard(newBoard)
  }, [])

  const handleChange = (direction: Direction): void => {
    if (board) {
      // Generate new board
      const { board: newBoard, score } = generateNewBoard(board, direction)

      // Find out if user lose
      if (isEndOfGame(newBoard)) {
        setBoard(null)
      } else {
        setBoard(newBoard)
        setCurrentScore((prev) => prev + score)
        // Generate new box
        // I can imagine better solution for comparison of two 2D arrays...
        if (JSON.stringify(board) !== JSON.stringify(newBoard)) {
          setTimeout(() => {
            setBoard(generateNewBox(newBoard))
          }, 100)
        }
      }
    }
  }

  const value = useMemo(
    () => ({
      handleStartNewGame,
      board,
      handleChange,
      isInitialStart,
      currentScore,
    }),
    [handleStartNewGame, board, handleChange, isInitialStart, currentScore]
  )

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}
