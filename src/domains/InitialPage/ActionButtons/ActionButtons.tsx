import Button from '../../../components/atoms/Button/Button'
import { useAuthContext } from '../../../contexts/AuthContext/useAuthContext'
import classes from './ActionButtons.module.scss'

type ActionButtonsProps = {
  onLoginClick: () => void
  onRegistrationClick: () => void
  onNewGameClick: () => void
}

export default function ActionButtons({
  onLoginClick,
  onRegistrationClick,
  onNewGameClick,
}: ActionButtonsProps): JSX.Element {
  const { isSignedIn } = useAuthContext()
  return (
    <div className={classes.initialPageActions}>
      {isSignedIn ? (
        <Button
          onClick={onNewGameClick}
          className={classes.initialPageButton}
          title="New Game"
        />
      ) : (
        <>
          <Button
            onClick={onLoginClick}
            className={classes.initialPageButton}
            title="Log in"
            type="secondary"
          />
          <Button
            onClick={onRegistrationClick}
            className={classes.initialPageButton}
            title="Register"
          />
        </>
      )}
    </div>
  )
}
