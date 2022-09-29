const apiKey = process.env.API_KEY;
const requests = {
  fetchTrending: {
    title: 'Trending',
  },
  fetchTopRated: {
    title: 'Top Rated',
  },
  fetchActionMovies: {
    title: 'Action',
  },
  fetchComedyMovies: {
    title: 'Comedy',
  },
  fetchHorrorMovies: {
    title: 'Horror',
  },
  fetchRomanceMovies: {
    title: 'Romance',
  },
  fetchMysteryMovies: {
    title: 'Mystery',
  },
  fetchSciFiMovies: {
    title: 'Sci-Fi',
  },
  fetchWesternMovies: {
    title: 'Western',
  },
  fetchAnimationMovies: {
    title: 'Animation',
  },
  fetchTVMovies: {
    title: 'TV Movies',
  },
};
export default requests;
