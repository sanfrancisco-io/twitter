import { takeLatest, call, put } from 'redux-saga/effects';
import { setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreators';
import axios from 'axios'
import { TweetsApi } from '../../../services/api/tweetsApi';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest() {
    try {
        const items = yield call(TweetsApi.fetchTwees);
        yield put(setTweets(items));
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR));
    }
}

export function* tweetsSaga() {
    console.log('12321')
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}