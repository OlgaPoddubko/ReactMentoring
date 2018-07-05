import * as actions from '.';
import moviesArr from '../../../test/moviesArr';

describe('test actions', () => {
  it('should create an action to update Movie By Id', () => {
    const id = '637';
    const expectedAction = {
      type: actions.UPDATE_MOVIE_BY_ID,
      id,
    };
    expect(actions.updateMovieById(id)).toEqual(expectedAction);
  });

  it('should create an action to update Gallery', () => {
    const gallery = moviesArr.data;
    const expectedAction = {
      type: actions.UPDATE_GALLERY,
      gallery,
    };
    expect(actions.updateGallery(gallery)).toEqual(expectedAction);
  });

  it('should create an action to update Related Movies', () => {
    const relatedMovies = moviesArr.data;
    const expectedAction = {
      type: actions.UPDATE_RELATED_MOVIES,
      relatedMovies,
    };
    expect(actions.updateRelatedMovies(relatedMovies)).toEqual(expectedAction);
  });

  it('should create an action to change Search Input', () => {
    const newSearchInput = 'hey';
    const expectedAction = {
      type: actions.CHANGE_SEARCH_INPUT,
      newSearchInput,
    };
    expect(actions.changeSearchInput(newSearchInput)).toEqual(expectedAction);
  });

  it('should create an action to change Search By', () => {
    const newSearchBy = 'genres';
    const expectedAction = {
      type: actions.CHANGE_SEARCH_BY,
      newSearchBy,
    };
    expect(actions.changeSearchBy(newSearchBy)).toEqual(expectedAction);
  });

  it('should create an action to change Sort By', () => {
    const newSortBy = 'vote_average';
    const expectedAction = {
      type: actions.CHANGE_SORT_BY,
      newSortBy,
    };
    expect(actions.changeSortBy(newSortBy)).toEqual(expectedAction);
  });

  it('should create an action to set Current Movie', () => {
    const newCurrentMovie = moviesArr.data[3];
    const expectedAction = {
      type: actions.SET_CURRENT_MOVIE,
      newCurrentMovie,
    };
    expect(actions.setCurrentMovie(newCurrentMovie)).toEqual(expectedAction);
  });
});
