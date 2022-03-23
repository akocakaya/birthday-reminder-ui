import '@babel/polyfill';
import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { BrowserRouter }                from 'react-router-dom';
import { Provider }                     from 'react-redux';

import createStore                      from './store.js';
import App                              from '../app/index.js';

const store = createStore();

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, 
    document.querySelector('#root'),
);
