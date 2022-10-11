import React from 'react'
import { v4 as uuidv4 } from 'uuid';

//components
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'

//services
import { getAnimeTop } from './services/getAnimeTop'
import createCollectionsInIndexedDB from './services/animeDB'

//hooks
import { useState, useEffect } from "react"

const App = () => {


  const [animeData, setAnimeData] = useState([])
  
  useEffect(()=> {
    createCollectionsInIndexedDB();
    getAnimeTop().then((animes) => {
      setAnimeData(animes)
    })
  },[]);

  const handleDeleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this anime from the list?')){
      setAnimeData(animeData.filter((anime) => {
        return anime.mal_id !== id 
      }))
    }
  }

  const handleAddFeedback = (newAnimeData) => {
    newAnimeData.mal_id = uuidv4()
    setAnimeData([newAnimeData,...animeData])
  }
  return (
    <>
      <Header/>
      <div className='container'>
        <FeedbackForm addFeedback={handleAddFeedback}/>
        <FeedbackStats feedback={animeData}/>
        <FeedbackList feedback={animeData} handleDeleteFeedback={handleDeleteFeedback}/>
      </div>
    </>
    
  )
}

export default App