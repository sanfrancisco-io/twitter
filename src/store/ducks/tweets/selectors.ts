import { createSelector } from 'reselect'
import { RootState } from '../../store'
import { LoadingState, TweetState } from './contracts/state'

export const selectTweets = (state: RootState): TweetState => state.tweets

export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState;

export const isSelectTweetsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const isSelectTweetsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

export const selectTweetsItems = createSelector(selectTweets, tweets => tweets.items)
