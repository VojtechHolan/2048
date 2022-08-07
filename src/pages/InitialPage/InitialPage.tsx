import Button from 'components/atoms/Button/Button'
import { useState } from 'react'

import Alert from '../../components/atoms/Alert/Alert'
import Loading from '../../components/atoms/Loading/Loading'
import ActionButtons from '../../domains/InitialPage/ActionButtons/ActionButtons'
import ListRanking from '../../domains/InitialPage/ListRanking/ListRanking'
import LoginModal from '../../domains/InitialPage/LoginModal/LoginModal'
import RegistrationModal from '../../domains/InitialPage/RegistrationModal/RegistrationModal'
import { SortScoresBy, useAllScoresQuery } from '../../generated/types'
import classes from './InitialPage.module.scss'

type InitialPageProps = {
  onGameStart: () => void
}

export default function InitialPage({
  onGameStart,
}: InitialPageProps): JSX.Element {
  const [isRegisterModal, setIsRegisterModal] = useState(false)
  const [isLoginModal, setIsLoginModal] = useState(false)
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
          <ActionButtons
            onLoginClick={() => setIsLoginModal(true)}
            onRegistrationClick={() => setIsRegisterModal(true)}
            onNewGameClick={() => onGameStart()}
          />
          <p>Login or register to start game!</p>
        </>
      )}
      <RegistrationModal
        isVisible={isRegisterModal}
        onClose={() => setIsRegisterModal(false)}
      />
      <LoginModal
        isVisible={isLoginModal}
        onClose={() => setIsLoginModal(false)}
      />
    </section>
  )
}
