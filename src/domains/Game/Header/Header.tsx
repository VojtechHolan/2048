import Button from 'components/atoms/Button/Button'

import { useGameContext } from '../GameContext/useGameContext'
import classes from './Header.module.scss'

export default function Header(): JSX.Element {
  const { handleStartNewGame } = useGameContext()
  return (
    <section className={classes.header}>
      <h1>2048</h1>
      <Button title="New Game" onClick={() => handleStartNewGame()} />
    </section>
  )
}
