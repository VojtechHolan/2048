import Button from 'components/atoms/Button/Button'
import { useState } from 'react'

import Alert from '../../components/atoms/Alert/Alert'
import Loading from '../../components/atoms/Loading/Loading'
import ListRanking from '../../domains/InitialPage/ListRanking/ListRanking'
import RegistrationModal from '../../domains/InitialPage/RegistrationModal/RegistrationModal'
import { SortScoresBy, useAllScoresQuery } from '../../generated/types'
import classes from './InitialPage.module.scss'

type InitialPageProps = {}

export default function InitialPage({}: InitialPageProps): JSX.Element {
  const [isRegisterModal, setIsRegisterModal] = useState(false)
  const { loading, data, error } = useAllScoresQuery({
    variables: {
      first: 10,
      sortBy: SortScoresBy.ScoreDesc,
    },
  })

  return (
    <section className={classes.initialPage}>
      {loading && <Loading />}
      {error && <Alert message="Something went wrong :(" />}
      {data?.allScores && (
        <>
          <h1 className={classes.h1}>2048</h1>
          <h2 className={classes.h2}>Leaderboard</h2>
          <ListRanking scores={data.allScores} />
          <div className={classes.initialPageActions}>
            <Button
              onClick={console.log}
              className={classes.initialPageButton}
              title="Log in"
              type="secondary"
            />
            <Button
              onClick={() => setIsRegisterModal(true)}
              className={classes.initialPageButton}
              title="Register"
            />
          </div>
          <p>Login or register to start game!</p>
        </>
      )}
      <RegistrationModal
        isRegisterModal={isRegisterModal}
        onClose={() => setIsRegisterModal(false)}
      />
    </section>
  )
}
