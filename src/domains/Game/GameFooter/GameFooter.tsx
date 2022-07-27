import { useGameContext } from '../GameContext/useGameContext'
import classes from './GameFooter.module.scss'

export default function GameFooter(): JSX.Element {
  const { currentScore } = useGameContext()
  return <h3 className={classes.footer}>Score: {currentScore}</h3>
}
