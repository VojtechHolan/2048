import classes from './Button.module.scss'

type ButtonProps = {
  title: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export default function Button({ title, onClick }: ButtonProps): JSX.Element {
  return (
    <button className={classes.button} onClick={onClick}>
      {title}
    </button>
  )
}
