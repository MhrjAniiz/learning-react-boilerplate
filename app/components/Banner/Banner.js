import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../../constants/API/MovieApi';
import movies from '../../constants/API/Axios';
import './Banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await movies.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ],
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${
          movie ? movie.backdrop_path : null
        }")`,
        backgroundPosition: 'center ',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">{movie.overview}</h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
}

export default Banner;
