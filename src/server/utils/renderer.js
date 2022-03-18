import React                from 'react';
import ReactDOMServer       from 'react-dom/server';
import { StaticRouter }     from 'react-router';
import { Provider }         from 'react-redux'; 
import { createStore }      from 'redux';

import App                  from '../../app/index.js';
import reducer              from '../../reducer/index.js';

export default req => {
    // store creation for server
    const store = createStore(
        reducer
    );

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
                <script src="bundle.js"></script>
            </body>
        </html>
    `;

    return template;
};
