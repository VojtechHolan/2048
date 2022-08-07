import { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { useAddScoreMutation } from '../../../generated/types'
import { useArrowsControl } from '../../../hooks/useArrawsControl'
import { useSnackBar } from '../../../hooks/useSnackBar'
import Box from '../Box/Box'
import { useGameContext } from '../GameContext/useGameContext'
import classes from './Board.module.scss'
import BoardTitle from './BoardTitle/BoardTitle'

export default function Board(): JSX.Element {
  const [addScore] = useAddScoreMutation()
  const snackbar = useSnackBar()
  const { board, handleChange, registerNotifyEndOfGame, handleStartNewGame } =
    useGameContext()
  useArrowsControl(handleChange, !!board)

  const endOfTheGame = async (score: number): Promise<void> => {
    try {
      await addScore({
        variables: {
          data: {
            score,
          },
        },
      })

      snackbar('Score was saves!')
    } catch (e) {
      snackbar('Score was not save!')
      console.error(e)
    }
  }

  useEffect(() => {
    handleStartNewGame()
    registerNotifyEndOfGame(endOfTheGame)
  }, [])

  return (
    <section className={classes.board}>
      {board == null && <BoardTitle />}
      {board != null && (
        <div className={classes.boxes}>
          {board.map((line) =>
            line.map((box) => <Box key={uuidv4()}>{box}</Box>)
          )}
        </div>
      )}
    </section>
  )
}
