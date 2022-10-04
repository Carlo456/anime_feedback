import React from 'react'

import FeedbackItem from './FeedbackItem'

const FeedbackList = ({ feedback, handleDeleteFeedback }) => {
  if(!feedback || feedback.length === 0){
    return <p>There isn't any animes yet to show...</p>
  }
    
  return (
    <div className='feedback-list'>
        {
          feedback.map((anime) => (
          <FeedbackItem key={anime.mal_id} anime={anime} handleDeleteFeedback={handleDeleteFeedback}/>
          ))
        }
    </div>
  )
}

export default FeedbackList