// Actions
const LOAD_BLOG = 'blog/LOAD_BLOG';
const UPDATE_BLOG = 'blog/UPDATE_BLOG';

// Action Creators
export const loadBlog = () => ({
  type: LOAD_BLOG,
});

export const updateBlog = blog => ({
  type: UPDATE_BLOG,
  payload: blog,
});

export const fetchBlog = () => (dispatch) => {
  dispatch(loadBlog());
  return fetch(`http://react-cdp-api.herokuapp.com/movies?search=Pride&searchBy=title`) // hardcore
    .then(res => res.json())
    .then(blog => dispatch(updateBlog(blog)));
};

// Initial state
const INITIAL_STATE = {
  data: [],
  total: 0,
  loading: false
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

      console.log(action.payload.data);
      console.log(action.payload.total);
      return {
        ...state,
        data: action.payload.data,
        total: action.payload.total,
        loading: false
      };

    default:
      return state;
  }
};
