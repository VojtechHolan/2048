import { useEffect } from 'react'

import { useArrowsControl } from '../../../hooks/useArrawsControl'
import Box from '../Box/Box'
import { useGameContext } from '../GameContext/useGameContext'
import classes from './Board.module.scss'
import BoardTitle from './BoardTitle/BoardTitle'

export default function Board(): JSX.Element {
  const { board, handleChange } = useGameContext()
  useArrowsControl(handleChange, !!board)

  return (
    <section className={classes.board}>
      {board == null && <BoardTitle />}
      {board != null && (
        <div className={classes.boxes}>
          {board.map((line) =>
            // TODO: FIX KEY
            line.map((box, index) => <Box key={index}>{box}</Box>)
          )}
        </div>
      )}
    </section>
  )
}
