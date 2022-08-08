import classes from './Button.module.scss'

type ButtonProps = {
  title: string
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  type?: 'primary' | 'secondary'
  className?: string
  loading?: boolean
}

export default function Button({
  title,
  onClick,
  type = 'primary',
  className,
  loading = false,
}: ButtonProps): JSX.Element {
  const typeClass = type === 'primary' ? classes.primary : classes.secondary

  return (
    <button
      type="button"
      className={`${classes.button} ${typeClass} ${className}`}
      onClick={onClick}
    >
      {loading ? 'Loading...' : title}
    </button>
  )
}
