import { applyMiddleware, compose, createStore } from 'redux'


import { rootReducer } from './rootReducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { TweetState } from './ducks/tweets/contracts/state';

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;



const sagaMiddleware = createSagaMiddleware();  // create middleware

export interface RootState {
    tweets: TweetState;
}

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(rootSaga); //run 