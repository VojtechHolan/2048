import { gql } from '@apollo/client'

export const allScores = gql`
  query ALL_SCORES($first: Int, $sortBy: [SortScoresBy!]) {
    allScores(first: $first, sortBy: $sortBy) {
      id
      player {
        id
        name
      }
      score
    }
  }
`
