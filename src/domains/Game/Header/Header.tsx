import Button from 'components/atoms/Button/Button'

import classes from './Header.module.scss'

type HeaderProps = {}

export default function Header({}: HeaderProps): JSX.Element {
  return (
    <section className={classes.header}>
      <h1>2048</h1>
      <Button title="New Game" onClick={() => console.log('2048 staart')} />
    </section>
  )
}
