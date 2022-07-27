import classes from './Box.module.scss'
import { getBoxColor } from './functions'

type BoxProps = {
  children: number | null
}

export default function Box({ children }: BoxProps): JSX.Element {
  return (
    <span
      className={classes.box}
      style={{ backgroundColor: getBoxColor(children) }}
    >
      {children}
    </span>
  )
}
