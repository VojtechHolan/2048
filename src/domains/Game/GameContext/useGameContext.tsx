import { useContext } from 'react'

import { GameContext, GameProviderType } from './GameContext.js'

export const useGameContext = (): GameProviderType => {
  const context = useContext(GameContext)

  if (!context) {
    throw Error('Wrap parent by <GameProvider />!')
  }

  return context
}
