import React from 'react'
import Card from './shared/Card'

//imports outside react
import { FaTimes } from 'react-icons/fa'

const FeedbackItem = ({anime, handleDeleteFeedback}) => {
    
    return (
        <Card>
            <div className="num-display">{anime.score}</div>
            <button className="close" onClick={() => {handleDeleteFeedback(anime.mal_id)}}>
                <FaTimes color='purple'/>
            </button>
            <div className='grid-container'>
                <div>
                    <img src={anime.images.jpg.image_url} className='grid-image'/>
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