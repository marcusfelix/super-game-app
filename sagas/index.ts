import { all } from 'redux-saga/effects';
import detailsSaga from './details';
import gamesSaga from './games';

export default function* allSagas() {
  yield all([
    detailsSaga(),
    gamesSaga(),
  ]);
}
