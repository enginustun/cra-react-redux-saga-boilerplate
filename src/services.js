import { delay } from 'redux-saga';
import { put, takeEvery } from 'redux-saga/effects';
import { loadedRemoteData } from './actions';
import actionTypes from './action-types';

export function* loadRemoteData(action) {
  yield delay(2000);
  yield put(loadedRemoteData(['remote', 'data', 'loaded']));
}

export default function* rootSaga() {
  yield takeEvery(actionTypes.LOAD_REMOTE_DATA, loadRemoteData);
}
