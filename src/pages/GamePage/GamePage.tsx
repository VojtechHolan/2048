import Board from 'domains/Game/Board/Board'
import GameFooter from 'domains/Game/GameFooter/GameFooter'
import GameHeader from 'domains/Game/GameHeader/GameHeader'

import Alert from '../../components/atoms/Alert/Alert'
import Loading from '../../components/atoms/Loading/Loading'
import { useNewGameQuery } from '../../generated/types'
import classes from './GamePage.module.scss'

export default function GamePage(): JSX.Element {
  const { loading, data, error, refetch } = useNewGameQuery()

  return (
    <>
      {error && <Alert message="Could not load game!" />}
      {loading && <Loading />}
      {data && (
        <section className={classes.gamePage}>
          <GameHeader onNewGameClick={() => refetch()} />
          <Board board={data.newGame} />
          <GameFooter score={data.newGame?.score || 0} />
        </section>
      )}
    </>
  )
}
