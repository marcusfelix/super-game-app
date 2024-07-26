import { put, takeEvery } from 'redux-saga/effects';
import {
  failureGames,
    requestGames,
  updateGames,
} from '../slices/games';

function* fetchData() {
  try {
    const response = yield fetch(
        'https://mock-game-api-9a408f047f23.herokuapp.com/api/games',
        {
            headers: {
                "Content-Type": "application/json",
                "X-API-Key": "01964fa8-f0e5-40fc-a13b-9f5c3a5415f3"
            },
        }
    ).then((response) => response.json());
    if(response.error){
      throw new Error(response.error)
    }
    yield put(updateGames(response));
  } catch (error) {
    yield put(failureGames(error.toString()));
  }
}

function* gamesSaga() {
  yield takeEvery(requestGames.type, fetchData);
}

export default gamesSaga;
