import React from 'react'
import Card from './shared/Card'

//imports outside react
import { FaTimes } from 'react-icons/fa'

//hooks
import { useContext } from 'react'

//context
import FeedbackContext from '../context/FeedbackContext'

const FeedbackItem = ({anime}) => {
    const {handleDeleteFeedback} = useContext(FeedbackContext)
    return (
        <Card>
            <div className="num-display">{anime.score}</div>
            <button className="close" onClick={() => {handleDeleteFeedback(anime.mal_id, anime.images.jpg.image_url)}}>
                <FaTimes color='purple'/>
            </button>
            <div className='grid-container'>
                <div>
                    <img src={anime.images.jpg.image_url} className='grid-image' alt='lol'/>
                </div>
                <div>
                    <h2>{anime.title}</h2>
                    <h4>Num. of episodes: {anime.episodes}</h4>
                    <br />
                    <h4>Anime genres</h4>
                    <ul>
                        {
                            anime.genres.map((genre, index) => {
                                return (<li key={index}>{genre.name}</li>) 
                            })
                        }
                    </ul>
                </div>
                <div className="text-display grid-item"><p className='synopsis-text'>{anime.synopsis}</p></div>
            </div>
            
        </Card>
    )
}

export default FeedbackItem