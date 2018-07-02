import {
  LOAD_GALLERY,
  UPDATE_GALLERY,
  UPDATE_RELATED_MOVIES,
  CHANGE_SEARCH_INPUT,
  CHANGE_SEARCH_BY,
  CHANGE_SORT_BY,
  SET_CURRENT_MOVIE
} from '../actions';

export const INITIAL_STATE = {
  search: '',
  searchBy: 'title',
  sortBy: 'release_date',
  movies: [],
  total: 0,
  currentMovie: {},
  relatedMovies: [],
  loading: false,
};

export default (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case LOAD_GALLERY:
      return {
        ...state,
        loading: true
      };
    case UPDATE_GALLERY:
      return {
        ...state,
        movies: action.gallery.data,
        total: action.gallery.total,
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
