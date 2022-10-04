import React from "react";
import { useState } from "react";

//normal components
//import RatingSelect from './RatingSelect'

//styled components
import Card from "./shared/Card";
import Button from "./shared/Button";

const FeedbackForm = ({ addFeedback }) => {
  //form information state hooks
  const [animeName, setAnimeName] = useState("");
  const [animeScore, setAnimeScore] = useState(7.5);
  const [animeSynopsis, setAnimeSynopsis] = useState("");
  const [animeGenres, setAnimeGenres] = useState([]);
  const [animeChapters, setAnimeChapters] = useState(12);
  const [animeImage, setAnimeImage] = useState("");
  const [animeInformation, setAnimeInformation] = useState({});

  //buttons and validations forms states
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("")

  const handleChangeName = (e) => {
    if (animeName === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (animeName !== "" && animeName.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("The name isn't long enough...");
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setAnimeName(e.target.value);
  };
  const handleChangeScore = (e) => {
    setAnimeScore(e.target.value);
  };
  const handleChangeSynopsis = (e) => {
    setAnimeSynopsis(e.target.value);
  };
  const handleChangeGenres = (e) => {
    setAnimeGenres(e.target.value);
  };
  const handleChangeChapters = (e) => {
    setAnimeChapters(e.target.value);
  };
  const handleChangeImage = (e) => {
    console.log(e.target.files[0])
    setAnimeImage(e.target.files[0]);
  };

  const handleSubmitInformation = (e) => {
    e.preventDefault();
    if (animeName.trim().length > 10) {
      const animeInfo = {
        title: animeName,
        score: animeScore,
        synopsis: animeSynopsis,
        episodes: animeChapters,
        genres: animeGenres,
        images: animeImage
      };
      
      addFeedback(animeInfo);
      setAnimeInformation({});
    }
  };

  return (
    <Card>
      <h2>Please, write a feedback from your favorite anime...</h2>
      <form onSubmit={handleSubmitInformation}>
        <div className="input-group">
          <input
            type="text"
            name="animeName"
            id="animeName"
            onChange={handleChangeName}
            placeholder="Anime name"
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            name="animeScore"
            id="animeScore"
            onChange={handleChangeScore}
            placeholder="Score"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="animeSynopsis"
            id="animeSynopsis"
            onChange={handleChangeSynopsis}
            placeholder="Write your synopsis..."
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            name="animeGenres"
            id="animeGenres"
            onChange={handleChangeGenres}
            placeholder="Anime genres"
          />
        </div>
        <div className="input-group">
          <input
            type="number"
            name="animeChapters"
            id="animeChapters"
            onChange={handleChangeChapters}
            placeholder="Num. of chapters"
          />
        </div>
        <div className="input-group">
          <input
            type="file"
            name="animeImage"
            id="animeImage"
            onChange={handleChangeImage}
            placeholder="Chose an image..."
          />
        </div>
          <Button
            type='submit'
            version="secondary"
            isDisabled={btnDisabled}
          >
            Send
          </Button>
        {message && <div className="message">{message}</div>}
      </form>
      {animeInformation.name}
    </Card>
  );
};

export default FeedbackForm;
