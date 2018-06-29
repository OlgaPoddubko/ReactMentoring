export const LOAD_GALLERY = 'gallery/LOAD_GALLERY';
export const UPDATE_MOVIE_BY_ID = 'gallery/UPDATE_MOVIE_BY_ID';
export const UPDATE_GALLERY = 'gallery/UPDATE_GALLERY';
export const UPDATE_RELATED_MOVIES = 'gallery/UPDATE_RELATED_MOVIES';
export const CHANGE_SEARCH_INPUT = 'gallery/CHANGE_SEARCH_INPUT';
export const CHANGE_SEARCH_BY = 'gallery/CHANGE_SEARCH_BY';
export const CHANGE_SORT_BY = 'gallery/CHANGE_SORT_BY';
export const SET_CURRENT_MOVIE = 'gallery/SET_CURRENT_MOVIE';

export const loadGallery = () => ({
  type: LOAD_GALLERY,
});

export const updateMovieById = id => ({
  type: UPDATE_MOVIE_BY_ID,
  id,
});

export const updateGallery = gallery => ({
  type: UPDATE_GALLERY,
  gallery,
});

export const updateRelatedMovies = relatedMovies => ({
  type: UPDATE_RELATED_MOVIES,
  relatedMovies,
});

export const changeSearchInput = newSearchInput => ({
  type: CHANGE_SEARCH_INPUT,
  newSearchInput,
});

export const changeSearchBy = newSearchBy => ({
  type: CHANGE_SEARCH_BY,
  newSearchBy,
});

export const changeSortBy = newSortBy => ({
  type: CHANGE_SORT_BY,
  newSortBy,
});

export const setCurrentMovie = newCurrentMovie => ({
  type: SET_CURRENT_MOVIE,
  newCurrentMovie
})

export const fetchGallery = ( state = INITIAL_STATE ) => (dispatch) => {
  dispatch(loadGallery());
  let url = `http://react-cdp-api.herokuapp.com/movies?sortBy=${state.sortBy}&sortOrder=desc&search=${state.search}&searchBy=${state.searchBy}&limit=12`;
  return fetch(url)
    .then(res => res.json())
    .then(gallery => dispatch(updateGallery(gallery)));
};

export const fetchMovie = ( id ) => (dispatch) => {
  let url = `http://react-cdp-api.herokuapp.com/movies/${id}`;
  return fetch(url)
    .then(res => res.json())
    .then(movie => dispatch(setCurrentMovie(movie)));
};

export const fetchRelatedMovies = ( genre ) => (dispatch) => {
  dispatch(loadGallery());
  let url = `http://react-cdp-api.herokuapp.com/movies?search=${genre}&searchBy=genres&limit=12`;
  return fetch(url)
    .then(res => res.json())
    .then(relatedMovies => dispatch(updateRelatedMovies(relatedMovies)));
};
