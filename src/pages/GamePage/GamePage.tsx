import Board from 'domains/Game/Board/Board'
import Header from 'domains/Game/Header/Header'

import classes from './GamePage.module.scss'

type GameProps = {}

export default function GamePage({}: GameProps): JSX.Element {
  return (
    <section className={classes.gamePage}>
      <Header />
      <Board />
    </section>
  )
}
