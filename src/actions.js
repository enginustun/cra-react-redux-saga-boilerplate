import actionTypes from './action-types';

export const loadRemoteData = () => {
  return { type: actionTypes.LOAD_REMOTE_DATA };
};

export const loadedRemoteData = (data) => {
  return { type: actionTypes.LOADED_REMOTE_DATA, data };
};
