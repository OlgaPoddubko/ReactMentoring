import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as actions from '.';

import moviesArr from '../../../test/moviesArr';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('test async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates LOAD_GALLERY, UPDATE_GALLERY when fetchGallery has been done', () => {
    fetchMock
      .getOnce(
        'http://react-cdp-api.herokuapp.com/movies?sortBy=release_date&sortOrder=desc&search=pride&searchBy=title&limit=12',
        { body: moviesArr, headers: { 'content-type': 'application/json' } },
      );

    const expectedActions = [
      { type: actions.LOAD_GALLERY },
      { type: actions.UPDATE_GALLERY, gallery: moviesArr },
    ];
    const store = mockStore({ gallery: [] });
    const state = {
      search: 'pride',
      searchBy: 'title',
      sortBy: 'release_date',
      movies: [],
      total: 0,
      currentMovie: {},
      relatedMovies: [],
      loading: false,
    };

    return store.dispatch(actions.fetchGallery(state)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates SET_CURRENT_MOVIE when fetchMovie has been done', () => {
    fetchMock
      .getOnce(
        'http://react-cdp-api.herokuapp.com/movies/4348',
        { body: moviesArr.data[1], headers: { 'content-type': 'application/json' } },
      );

    const expectedActions = [
      { type: actions.SET_CURRENT_MOVIE, newCurrentMovie: moviesArr.data[1] },
    ];
    const store = mockStore({ newCurrentMovie: [] });
    const id = 4348;

    return store.dispatch(actions.fetchMovie(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('creates LOAD_GALLERY, UPDATE_RELATED_MOVIES when fetchRelatedMovies has been done', () => {
    fetchMock
      .getOnce(
        'http://react-cdp-api.herokuapp.com/movies?search=comedy&searchBy=genres&limit=12',
        { body: moviesArr, headers: { 'content-type': 'application/json' } },
      );

    const expectedActions = [
      { type: actions.LOAD_GALLERY },
      { type: actions.UPDATE_RELATED_MOVIES, relatedMovies: moviesArr },
    ];
    const store = mockStore({ relatedMovies: [] });
    const genre = 'comedy';

    return store.dispatch(actions.fetchRelatedMovies(genre)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
