import Button from 'components/atoms/Button/Button'

import classes from './GameHeader.module.scss'

type GameHeaderProps = {
  onNewGameClick: () => void
}

export default function GameHeader({
  onNewGameClick,
}: GameHeaderProps): JSX.Element {
  return (
    <section className={classes.header}>
      <h1>2048</h1>
      <Button title="New Game" onClick={() => onNewGameClick()} />
    </section>
  )
}
