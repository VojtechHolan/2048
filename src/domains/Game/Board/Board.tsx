import classes from './Board.module.scss'

type BoardProps = {}

export default function Board({}: BoardProps): JSX.Element {
  return <section className={classes.board} />
}
