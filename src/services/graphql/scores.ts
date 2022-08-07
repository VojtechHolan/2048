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

export const addScore = gql`
  mutation ADD_SCORE($data: ScoreCreateInput!) {
    createScore(data: $data) {
      id
      player {
        id
        name
      }
      score
    }
  }
`
