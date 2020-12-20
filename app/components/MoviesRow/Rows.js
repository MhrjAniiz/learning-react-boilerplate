import React from 'react';
import './row.css';

const Image_url = 'https://image.tmdb.org/t/p/original/';
function Rows({ title, data, isLargeRow }) {
  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="rows__posters">
        {data.map(movie => {
          return (
            <img
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              key={movie.id}
              src={`${Image_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Rows;
