import classes from './GameFooter.module.scss'

export type GameFooterProps = {
  score: number
}

export default function GameFooter({ score }: GameFooterProps): JSX.Element {
  return <h3 className={classes.footer}>Score: {score}</h3>
}
