import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware             from 'redux-saga';

import reducer                          from '../reducer/index.js';
import appSaga                          from '../app/saga/index.js';

export default () => {
    const initialState = window.INITIAL_STATE;
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducer,
        initialState,
        applyMiddleware(sagaMiddleware),
    );
    sagaMiddleware.run(appSaga);

    return store;
};
