import { useEffect } from 'react'

import { useArrowsControl } from '../../../hooks/useArrawsControl'
import Box from '../Box/Box'
import { useGameContext } from '../GameContext/useGameContext'
import classes from './Board.module.scss'

export default function Board(): JSX.Element {
  const { board, handleChange } = useGameContext()
  useArrowsControl(handleChange, !!board)

  return (
    <section className={classes.board}>
      {board == null && <h2>Click new game button to start game!</h2>}
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
