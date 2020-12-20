import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the documentries state domain
 */

const selectDocumentriesDomain = state => state.documentries || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Documentries
 */

const makeSelectDocumentries = () =>
  createSelector(
    selectDocumentriesDomain,
    substate => substate,
  );
export const makeSelectLoading = () =>
  createSelector(
    selectDocumentriesDomain,
    ({ loading }) => loading,
  );

export const makeSelectDocumentriesData = () =>
  createSelector(
    selectDocumentriesDomain,
    ({ documentries }) => documentries,
  );

export const makeSelectError = () =>
  createSelector(
    selectDocumentriesDomain,
    ({ error }) => error,
  );

export default makeSelectDocumentries;
export { selectDocumentriesDomain };
