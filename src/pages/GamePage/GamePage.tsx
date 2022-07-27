import Board from 'domains/Game/Board/Board'
import Header from 'domains/Game/Header/Header'

import { GameProvider } from '../../domains/Game/GameContext/GameContext'
import classes from './GamePage.module.scss'

export default function GamePage(): JSX.Element {
  return (
    <GameProvider>
      <section className={classes.gamePage}>
        <Header />
        <Board />
      </section>
    </GameProvider>
  )
}
