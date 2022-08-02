import Button from 'components/atoms/Button/Button'

import Loading from '../../components/atoms/Loading/Loading'
import ListRanking from '../../domains/InitialPage/ListRanking/ListRanking'
import { SortScoresBy, useAllScoresQuery } from '../../generated/types'
import classes from './InitialPage.module.scss'

type InitialPageProps = {}

export default function InitialPage({}: InitialPageProps): JSX.Element {
  const { loading, data, error } = useAllScoresQuery({
    variables: {
      first: 10,
      sortBy: SortScoresBy.ScoreDesc,
    },
  })
  return (
    <section className={classes.initialPage}>
      {loading && <Loading />}
      {data?.allScores && (
        <>
          <h1>2048</h1>
          <h2>Leaderboard</h2>
          <ListRanking scores={data.allScores} />
          <div className={classes.initialPageActions}>
            <Button
              onClick={console.log}
              className={classes.initialPageButton}
              title="Log in"
              type="secondary"
            />
            <Button
              onClick={console.log}
              className={classes.initialPageButton}
              title="Register"
            />
          </div>
          <p>Login or register to start game!</p>
        </>
      )}
    </section>
  )
}
