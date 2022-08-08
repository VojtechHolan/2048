import { v4 as uuid } from 'uuid'

import { useSnackBarContext } from '../../../contexts/SnackBarContext/useSnackBarContext'
import classes from './SnackBar.module.scss'

// We should solve different status od snack bar like Success, Info, Warning, Error, etc.
export default function SnackBar(): JSX.Element {
  const { snackBars } = useSnackBarContext()

  return (
    <aside className={classes.notifications}>
      {snackBars.map((snackbar) => (
        <span className={classes.message} key={uuid()}>
          {snackbar.message}
        </span>
      ))}
    </aside>
  )
}
