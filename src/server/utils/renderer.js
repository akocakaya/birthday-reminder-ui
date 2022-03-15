import React                from 'react';
import ReactDOMServer       from 'react-dom/server';
import { StaticRouter }     from 'react-router';

import AppRouter            from '../../client/router/index.js';

export default req => {
    const context = {};
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.path} context={context}>
            <AppRouter />
        </StaticRouter>
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
