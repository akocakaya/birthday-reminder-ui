import '@babel/polyfill';
import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { BrowserRouter }                from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider }                     from 'react-redux';
import createSagaMiddleware             from 'redux-saga';

import App                              from '../app/index.js';
import reducer                          from '../reducer/index.js';
import appSaga                          from '../app/saga/index.js';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    initialState,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(appSaga);

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.querySelector('#root'),
);
