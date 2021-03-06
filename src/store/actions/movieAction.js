export const GENRE_FETCH_REQUESTED = 'GENRE_FETCH_REQUESTED';
export const MOVIE_FETCH_REQUESTED = 'MOVIE_FETCH_REQUESTED';
export const SELECT_GENRE_REQUESTED = 'SELECT_GENRE_REQUESTED'
export const SELECT_MOVIE_REQUESTED = 'SELECT_MOVIE_REQUESTED'
export const MOVIE_REVIEW_REQUESTED = 'MOVIE_REVIEW_REQUESTED'
export const SEARCH_MOVIE_REQUESTED = 'SEARCH_MOVIE_REQUESTED'

export const ActionFetchGenre = () => {
  return {
    type: GENRE_FETCH_REQUESTED
  };
};

export const ActionSelectGenre = (genreId,genreName) => {
  return {
    type: SELECT_GENRE_REQUESTED,
    payload:{genreId,genreName},
  };
};

export const ActionSelectMovie = (movieId) => {
  return {
    type: SELECT_MOVIE_REQUESTED,
    payload:movieId,
  };
};

export const ActionGetMovieReview = (movieId,token) => {
  // console.log(movieId,"action ActionGetMovieReview")
  return {
    type: MOVIE_REVIEW_REQUESTED,
    payload:{movieId,token}
  };
};

export const ActionSearchMovie = (search) => {
  return {
    type: SEARCH_MOVIE_REQUESTED,
    payload:search,
  };
};

export const ActionAddReview = (movieId,rating,review,token) => {
  console.log(movieId,rating,review,token,"movieId,rating,review,token")
  return {
    type: 'ADD_REVIEW_REQUESTED',
    payload:{movieId,rating,review,token},
  };
};

// export const ActionGetMovieById = (movieId) => {
//   return {
//     type: SELECT_MOVIE_REQUESTED,
//     payload:{genreId,genreName},
//   };
// };