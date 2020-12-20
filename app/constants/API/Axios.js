import axios from 'axios';

const movies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default movies;
