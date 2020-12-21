import React, { useState, useEffect } from 'react';
import './row.css';
import Youtube from '../../constants/API/YoutubeApi';

const Image_url = 'https://image.tmdb.org/t/p/original/';
function Rows({ title, data, isLargeRow }) {
  const [video, setVideo] = useState('');
  const [loading, setloading] = useState(true);

  const videoUrl = [
    'X4bF_quwNtw',
    '1roy4o4tqQM',
    '-0wz7n-h71M',
    'CDrieqwSdgI',
    '0DAmWHxeoKw',
    'fvCdLmxnkj0',
    'tA3yE4_t6SY',
  ];

  const handleClick = movie => {
    // Youtube.get('search', {
    //   param: {
    //     q: movie.name,
    //   },
    // }).then(res => {
    //   console.log(res);
    // });
    if (video) {
      setVideo('');
    } else {
      const url = videoUrl[Math.floor(Math.random() * videoUrl.length)];
      console.log(url);
      setVideo(url);
    }
  };

  return (
    <div className="row">
      <h2> {title} </h2>
      <div className="rows__posters">
        {data.map(movie => {
          return (
            <img
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              onClick={() => handleClick(movie)}
              key={movie.id}
              src={`${Image_url}${
                isLargeRow
                  ? movie.poster_path
                  : movie.backdrop_path || 'pci1ArYW7oJ2eyTo2NMYEKHHiCP.jpg'
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {video.length > 0 ? (
        <iframe
          title="ytvideo"
          id="player"
          type="text/html"
          width="100%"
          height="355"
          src={`https://www.youtube.com/embed/${video}?autoplay=1`}
          allow="autoplay"
          frameBorder="0"
        />
      ) : null}
    </div>
  );
}

export default Rows;
