import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ArrowKeysDirection } from '../../../enums/Directive'
import {
  NewGameQuery,
  useAddScoreMutation,
  useProcessGameMutation,
} from '../../../generated/types'
import { useArrowsControl } from '../../../hooks/useArrawsControl'
import { useSnackBar } from '../../../hooks/useSnackBar'
import { client } from '../../../services/apollo'
import { newGame } from '../../../services/graphql/game'
import Box from '../Box/Box'
import classes from './Board.module.scss'
import { translateArrowKeysDirectionToDirection } from './functions'

type BoardProps = {
  board: NewGameQuery['newGame']
}

export default function Board({ board }: BoardProps): JSX.Element {
  const [addScore] = useAddScoreMutation()
  const snackbar = useSnackBar()
  const [processGame] = useProcessGameMutation()
  const { state, score } = board || {}

  const handleEndOfTheGame = async (score: number): Promise<void> => {
    try {
      await addScore({
        variables: {
          data: {
            score,
          },
        },
      })

      snackbar('Score was saves!')
    } catch (e) {
      snackbar('Score was not save!')
      console.error(e)
    }
  }

  const handleChange = async (key: ArrowKeysDirection): Promise<void> => {
    const direction = translateArrowKeysDirectionToDirection(key)

    try {
      if (state != null && score != null && direction) {
        // Send request
        const result = await processGame({
          variables: {
            game: {
              state,
              score,
              direction,
            },
          },
        })

        const {
          score: newScore,
          finished: newFinished,
          state: newState,
        } = result.data?.processGame || {}

        // Update cache
        client.writeQuery({
          query: newGame,
          data: {
            newGame: {
              __typename: 'Game',
              score: newScore,
              finished: newFinished,
              state: newState,
            },
          },
        })

        if (newFinished) {
          await handleEndOfTheGame(newScore || 0)
        }
      }
    } catch (e) {
      snackbar('Oops something went wrong!')
      console.error(e)
    }
  }
  useArrowsControl(handleChange, !board?.finished)

  return (
    <section className={classes.board}>
      {board?.finished && <h2>You lose :( Click start game!</h2>}
      {!board?.finished && (
        <div className={classes.boxes}>
          {state?.map((line) =>
            line.map((box) => <Box key={uuidv4()}>{box}</Box>)
          )}
        </div>
      )}
    </section>
  )
}
