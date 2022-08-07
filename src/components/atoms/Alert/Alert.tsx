import classes from './Alert.module.scss'

type AlertProps = {
  message: string
}

// We should solve different status od alert like Success, Info, Warning, Error, etc.
export default function Alert({ message }: AlertProps): JSX.Element {
  return <aside className={classes.alert}>{message}</aside>
}
