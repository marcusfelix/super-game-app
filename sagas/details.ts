import { failureDetails, requestDetails, updateDetails } from '@/slices/detail';
import { put, takeEvery } from 'redux-saga/effects';

function* fetchData(game: any) {
  try {
    const response = yield fetch(
        `https://mock-game-api-9a408f047f23.herokuapp.com/api/games/${game.payload}`,
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
    yield put(updateDetails(response));
  } catch (error: any) {
    yield put(failureDetails(error.toString()));
  }
}

function* detailsSaga() {
  yield takeEvery(requestDetails.type, fetchData);
}

export default detailsSaga;
