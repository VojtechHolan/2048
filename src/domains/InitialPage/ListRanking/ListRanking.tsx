import { AllScoresQuery } from '../../../generated/types'
import classes from './listRanking.module.scss'

type ListRankingProps = {
  scores: AllScoresQuery['allScores']
}

// WE COULD CREATE NEW GENERIC COMPONENT CALLED TABLE
export default function ListRanking({ scores }: ListRankingProps): JSX.Element {
  return (
    <ul>
      {scores?.map((score, index) => (
        <li key={score?.id} className={classes.listRankingItem}>
          <span>{index + 1}.</span>
          <span className={classes.listItemName}>
            {score?.player?.name || ''}
          </span>
          <span className={classes.listItemScore}>{score?.score || ''}</span>
        </li>
      ))}
    </ul>
  )
}
