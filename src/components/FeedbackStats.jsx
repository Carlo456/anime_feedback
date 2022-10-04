import React from 'react'

const FeedbackStats = ({feedback}) => {
    
    const handleAnimeScore = (animeData) => {
        const sumScore = animeData.reduce((scoreAccumulator, currentAnimeScore) => {
          return scoreAccumulator + currentAnimeScore.score
        }, 0)
        const averageScore = sumScore / animeData.length
        return averageScore 
    }  
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} animes reviewed</h4>
        <h4>Average score: {isNaN(handleAnimeScore(feedback)) ? 0 : handleAnimeScore(feedback)}</h4>
    </div>
  )
}

export default FeedbackStats