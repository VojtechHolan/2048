import { gql } from '@apollo/client'

export const newGame = gql`
  query NEW_GAME {
    newGame {
      state
      score
      finished
    }
  }
`

export const processGame = gql`
  mutation PROCESS_GAME($game: GameInput!) {
    processGame(game: $game) {
      state
      score
      finished
    }
  }
`
