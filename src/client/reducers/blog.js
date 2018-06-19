// Actions
const LOAD_BLOG = 'blog/LOAD_BLOG';
const UPDATE_BLOG = 'blog/UPDATE_BLOG';
const UPDATE_RELATED_MOVIES = 'blog/UPDATE_RELATED_MOVIES';
const CHANGE_SEARCH_INPUT = 'blog/CHANGE_SEARCH_INPUT';
const CHANGE_SEARCH_BY = 'blog/CHANGE_SEARCH_BY';
const CHANGE_SORT_BY = 'blog/CHANGE_SORT_BY';
const SET_CURRENT_MOVIE = 'blog/SET_CURRENT_MOVIE';

// Action Creators
export const loadBlog = () => ({
  type: LOAD_BLOG,
});

export const updateBlog = blog => ({
  type: UPDATE_BLOG,
  blog,
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

export const fetchBlog = ( state = INITIAL_STATE ) => (dispatch) => {
  dispatch(loadBlog());
  let url = `http://react-cdp-api.herokuapp.com/movies?sortBy=${state.sortBy}&sortOrder=desc&search=${state.search}&searchBy=${state.searchBy}&limit=12`;
  return fetch(url)
    .then(res => res.json())
    .then(blog => dispatch(updateBlog(blog)));
};

export const fetchRelatedMovies = ( genre ) => (dispatch) => {
  dispatch(loadBlog());
  let url = `http://react-cdp-api.herokuapp.com/movies?search=${genre}&searchBy=genres&limit=12`;
  return fetch(url)
    .then(res => res.json())
    .then(relatedMovies => dispatch(updateRelatedMovies(relatedMovies)));
};
// Initial state
const INITIAL_STATE = {
  search: '',
  searchBy: 'title',
  sortBy: 'release_date',
  movies: [],
  total: 0,
  currentMovie: {},
  relatedMovies: [],
  loading: false,
};

// Reducer
export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOAD_BLOG:
      return {
        ...state,
        loading: true
      };
    case UPDATE_BLOG:
      return {
        ...state,
        movies: action.blog.data,
        total: action.blog.total,
        loading: false
      };
    case UPDATE_RELATED_MOVIES:
      return {
        ...state,
        relatedMovies: action.relatedMovies.data,
        loading: false
      };
    case CHANGE_SEARCH_INPUT:
      return {
        ...state,
        search: action.newSearchInput,
      };
    case CHANGE_SEARCH_BY:
      return {
        ...state,
        searchBy: action.newSearchBy,
      };
    case CHANGE_SORT_BY:
      return {
        ...state,
        sortBy: action.newSortBy,
      };
    case SET_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: action.newCurrentMovie,
      };

    default:
      return state;
  }
};
