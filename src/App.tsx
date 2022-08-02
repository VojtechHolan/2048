import GamePage from 'pages/GamePage/GamePage'
import { useState } from 'react'

import classes from './App.module.scss'
import Loading from './components/atoms/Loading/Loading'
import { SortScoresBy, useAllScoresQuery } from './generated/types'
import InitialPage from './pages/InitialPage/InitialPage'

function App(): JSX.Element {
  const [isGameRunning, setIsGameRunning] = useState(false)

  return (
    <div className={classes.app}>
      {isGameRunning ? <GamePage /> : <InitialPage />}
    </div>
  )
}

export default App
