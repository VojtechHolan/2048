import Board from 'domains/Game/Board/Board'
import GameFooter from 'domains/Game/GameFooter/GameFooter'
import GameHeader from 'domains/Game/GameHeader/GameHeader'

import { GameProvider } from '../../domains/Game/GameContext/GameContext'
import classes from './GamePage.module.scss'

export default function GamePage(): JSX.Element {
  return (
    <GameProvider>
      <section className={classes.gamePage}>
        <GameHeader />
        <Board />
        <GameFooter />
      </section>
    </GameProvider>
  )
}
