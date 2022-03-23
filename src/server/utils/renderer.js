import React                from 'react';
import ReactDOMServer       from 'react-dom/server';
import { StaticRouter }     from 'react-router';
import { Provider }         from 'react-redux'; 

import App                  from '../../app/index.js';
import createStore          from './store';

export default req => {

    const store = createStore();

    const context = {};
    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.path} context={context}>
                <App />
            </StaticRouter>
        </Provider>
    );

    const template = `
        <html>
            <head></head>
            <body>
                <div id="root">${content}</div>
                <script>
                    window.INITIAL_STATE = ${JSON.stringify(store.getState())}
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    return template;
};
