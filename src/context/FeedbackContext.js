//services
import { getAnimeTop } from "../services/getAnimeTop";
import createCollectionsInIndexedDB from "../services/animeDB";
//hooks
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
    const [animeData, setAnimeData] = useState([])

    useEffect(() => {
      createCollectionsInIndexedDB();
      getAnimeTop().then((animes) => {
        setAnimeData(animes);
      });
    }, []);

    const handleDeleteFeedback = (id, imageURL) => {
        if (
          window.confirm(
            "Are you sure you want to delete this anime from the list?"
          )
        ) {
          if (imageURL) {
            URL.revokeObjectURL(imageURL);
          }
          setAnimeData(
            animeData.filter((anime) => {
              return anime.mal_id !== id;
            })
          );
        }
      };
    
    const handleAddFeedback = (newAnimeData) => {
        setAnimeData([newAnimeData, ...animeData]);
    };  

    return (<FeedbackContext.Provider value={{
        animeData,
        handleDeleteFeedback,
        handleAddFeedback
    }}>
        { children }
    </FeedbackContext.Provider>)
}

export default FeedbackContext