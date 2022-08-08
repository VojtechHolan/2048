import { useGameContext } from '../../GameContext/useGameContext'
import classes from './BoardTitle.module.scss'

export default function BoardTitle(): JSX.Element {
  const { isInitialStart } = useGameContext()
  return isInitialStart ? (
    <h2 className={classes.title}>You lose :( Click start game!</h2>
  ) : (
    <h2 className={classes.title}>Click new game button to start game!</h2>
  )
}
