import { useSnackBarContext } from '../../../contexts/SnackBar/useSnackBarContext'
import classes from './SnackBar.module.scss'

type SnackBarProps = {}

// We should solve different status od snack bar like Success, Info, Warning, Error, etc.
export default function SnackBar({}: SnackBarProps): JSX.Element {
  const { snackBars } = useSnackBarContext()

  return (
    <aside className={classes.notifications}>
      {snackBars.map((snackbar) => (
        <span className={classes.message}>{snackbar.message}</span>
      ))}
    </aside>
  )
}
