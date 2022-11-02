import React from 'react'

//hooks
import { useContext } from 'react'

//context
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
  const { animeData } = useContext(FeedbackContext)

    const handleAnimeScore = (animeData) => {
        const sumScore = animeData.reduce((scoreAccumulator, currentAnimeScore) => {
          return scoreAccumulator + currentAnimeScore.score
        }, 0)
        const averageScore = sumScore / animeData.length
        return averageScore 
    }  
  return (
    <div className='feedback-stats'>
        <h4>{animeData.length} animes reviewed</h4>
        <h4>Average score: {isNaN(handleAnimeScore(animeData)) ? 0 : handleAnimeScore(animeData)}</h4>
    </div>
  )
}

export default FeedbackStats