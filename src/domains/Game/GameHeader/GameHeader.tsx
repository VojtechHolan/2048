import Button from 'components/atoms/Button/Button'

import { useGameContext } from '../GameContext/useGameContext'
import classes from './GameHeader.module.scss'

export default function GameHeader(): JSX.Element {
  const { handleStartNewGame } = useGameContext()
  return (
    <section className={classes.header}>
      <h1>2048</h1>
      <Button title="New Game" onClick={() => handleStartNewGame()} />
    </section>
  )
}
