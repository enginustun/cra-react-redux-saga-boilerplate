import actionTypes from './action-types';

const initialState = {
  dataLoading: false,
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_REMOTE_DATA:
      return { ...state, dataLoading: true };
    case actionTypes.LOADED_REMOTE_DATA:
      return { ...state, dataLoading: false, data: action.data };
    default:
      return state;
  }
};
