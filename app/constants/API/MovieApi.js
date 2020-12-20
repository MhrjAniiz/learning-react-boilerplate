const API_KEY = '8209da1ad33c6448e523943a6d5689be';

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovie: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComdedyMovie: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovie: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanticMovie: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
