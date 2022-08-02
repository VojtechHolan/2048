import { gql } from '@apollo/client'

export const ALL_SCORES = gql`
  query ALL_SCORES {
    allScores(first: 10, sortBy: score_DESC) {
      id
      player {
        id
        name
      }
      score
    }
  }
`
