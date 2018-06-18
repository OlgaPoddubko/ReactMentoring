// Actions
const LOAD_BLOG = 'blog/LOAD_BLOG';
const UPDATE_BLOG = 'blog/UPDATE_BLOG';
const UPDATE_SEARCH_INPUT = 'blog/UPDATE_SEARCH_INPUT';
const CHANGE_SEARCH_BY = 'blog/CHANGE_SEARCH_BY';
const CHANGE_SORT_BY = 'blog/CHANGE_SORT_BY';

// Action Creators
export const loadBlog = () => ({
  type: LOAD_BLOG,
});

export const updateBlog = blog => ({
  type: UPDATE_BLOG,
  payload: blog,
});

export const updateSearchInput = newSearchInput => ({
  type: UPDATE_SEARCH_INPUT,
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

export const fetchBlog = ( state = INITIAL_STATE ) => (dispatch) => {
  dispatch(loadBlog());
  let url = `http://react-cdp-api.herokuapp.com/movies?sortBy=${state.sortBy}&search=${state.search}&searchBy=${state.searchBy}`;
  return fetch(url)
    .then(res => res.json())
    .then(blog => dispatch(updateBlog(blog)));
};

// Initial state
const INITIAL_STATE = {
  search: '',
  searchBy: 'title',
  sortBy: 'release_date',
  data: [],
  total: 0,
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
        data: action.payload.data,
        total: action.payload.total,
        loading: false
      };
    case UPDATE_SEARCH_INPUT:
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

    default:
      return state;
  }
};
