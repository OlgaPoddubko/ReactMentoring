import reducer from '../reducers/gallery';
import * as types from '../actions';
import moviesArr from '../../../test/moviesArr';

describe('gallery reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      search: '',
      searchBy: 'title',
      sortBy: 'release_date',
      movies: [],
      total: 0,
      currentMovie: {},
      relatedMovies: [],
      loading: false
    })
  })

  it('should handle LOAD_GALLERY', () => {
    expect(reducer([
      {
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        movies: [],
        total: 0,
        currentMovie: {},
        relatedMovies: [],
        loading: false
      }
    ], {type: types.LOAD_GALLERY})).toEqual({
      "0": {
        "currentMovie": {},
        "loading": false,
        "movies": [],
        "relatedMovies": [],
        "search": "",
        "searchBy": "title",
        "sortBy": "release_date",
        "total": 0
      },
      loading: true
    })
  })

  it('should handle UPDATE_GALLERY', () => {
    expect(reducer([
      {
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        movies: [],
        total: 0,
        currentMovie: {},
        relatedMovies: [],
        loading: false
      }
    ], {
      type: types.UPDATE_GALLERY,
      gallery: moviesArr
    })).toEqual({
      "0": {
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        movies: [],
        total: 0,
        currentMovie: {},
        relatedMovies: [],
        loading: false
      },
      movies: moviesArr.data,
      total: moviesArr.total,
      loading: false
    })
  })

  it('should handle UPDATE_RELATED_MOVIES', () => {
    expect(reducer([
      {
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        movies: [],
        total: 0,
        currentMovie: {},
        relatedMovies: [],
        loading: false
      }
    ], {
      type: types.UPDATE_RELATED_MOVIES,
      relatedMovies: moviesArr
    })).toEqual({
      "0": {
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        movies: [],
        total: 0,
        currentMovie: {},
        relatedMovies: [],
        loading: false
      },
      relatedMovies: moviesArr.data,
      loading: false
    })
  })

  it('should handle CHANGE_SEARCH_INPUT', () => {
    expect(reducer([
      {
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        movies: [],
        total: 0,
        currentMovie: {},
        relatedMovies: [],
        loading: false
      }
    ], {
      type: types.CHANGE_SEARCH_INPUT,
      newSearchInput: 'cat'
    })).toEqual({
      "0": {
        "currentMovie": {},
        "loading": false,
        "movies": [],
        "relatedMovies": [],
        "search": "",
        "searchBy": "title",
        "sortBy": "release_date",
        "total": 0
      },
      "search": "cat"
    })
  })

  it('should handle CHANGE_SEARCH_BY', () => {
    expect(reducer([
      {
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        movies: [],
        total: 0,
        currentMovie: {},
        relatedMovies: [],
        loading: false
      }
    ], {
      type: types.CHANGE_SEARCH_BY,
      newSearchBy: 'genres'
    })).toEqual({
      "0": {
        "currentMovie": {},
        "loading": false,
        "movies": [],
        "relatedMovies": [],
        "search": "",
        "searchBy": "title",
        "sortBy": "release_date",
        "total": 0
      },
      "searchBy": "genres"
    })

    expect(reducer([
      {
        search: '',
        searchBy: 'genres',
        sortBy: 'release_date',
        movies: [],
        total: 0,
        currentMovie: {},
        relatedMovies: [],
        loading: false
      }
    ], {
      type: types.CHANGE_SEARCH_BY,
      newSearchBy: 'title'
    })).toEqual({
      "0": {
        "currentMovie": {},
        "loading": false,
        "movies": [],
        "relatedMovies": [],
        "search": "",
        "searchBy": "genres",
        "sortBy": "release_date",
        "total": 0
      },
      "searchBy": "title"
    })
  })

  it('should handle CHANGE_SORT_BY', () => {
    expect(reducer([
      {
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        movies: [],
        total: 0,
        currentMovie: {},
        relatedMovies: [],
        loading: false
      }
    ], {
      type: types.CHANGE_SORT_BY,
      newSortBy: 'vote_average'
    })).toEqual({
      "0": {
        "currentMovie": {},
        "loading": false,
        "movies": [],
        "relatedMovies": [],
        "search": "",
        "searchBy": "title",
        "sortBy": "release_date",
        "total": 0
      },
      "sortBy": "vote_average"
    })

    expect(reducer([
      {
        search: '',
        searchBy: 'title',
        sortBy: 'vote_average',
        movies: [],
        total: 0,
        currentMovie: {},
        relatedMovies: [],
        loading: false
      }
    ], {
      type: types.CHANGE_SORT_BY,
      newSortBy: 'release_date'
    })).toEqual({
      "0": {
        "currentMovie": {},
        "loading": false,
        "movies": [],
        "relatedMovies": [],
        "search": "",
        "searchBy": "title",
        "sortBy": "vote_average",
        "total": 0
      },
      "sortBy": "release_date"
    })
  })

  it('should handle SET_CURRENT_MOVIE', () => {
    expect(reducer([
      {
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        movies: [],
        total: 0,
        currentMovie: {},
        relatedMovies: [],
        loading: false
      }
    ], {
      type: types.SET_CURRENT_MOVIE,
      newCurrentMovie: moviesArr.data[1]
    })).toEqual({
      "0": {
        "currentMovie": {},
        "loading": false,
        "movies": [],
        "relatedMovies": [],
        "search": "",
        "searchBy": "title",
        "sortBy": "release_date",
        "total": 0
      },
      "currentMovie": moviesArr.data[1]
    })
  })
})
