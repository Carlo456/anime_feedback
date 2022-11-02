import React from 'react'

//hooks
import { useContext } from 'react'

//context
import FeedbackContext from '../context/FeedbackContext'

import FeedbackItem from './FeedbackItem'

const FeedbackList = () => {
  const { animeData } = useContext(FeedbackContext)
  
  if(!animeData || animeData.length === 0){
    return <p>There isn't any animes yet to show...</p>
  }
    
  return (
    <div className='feedback-list'>
        {
          animeData.map((anime) => (
          <FeedbackItem key={anime.mal_id} anime={anime}/>
          ))
        }
    </div>
  )
}

export default FeedbackList