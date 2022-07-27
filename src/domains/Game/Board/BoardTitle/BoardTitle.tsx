import { useGameContext } from '../../GameContext/useGameContext'

export default function BoardTitle(): JSX.Element {
  const { isInitialStart } = useGameContext()
  return isInitialStart ? (
    <h2>You lose :( Click start game!</h2>
  ) : (
    <h2>Click new game button to start game!</h2>
  )
}
