import React                from 'react';
import ReactDOMServer       from 'react-dom/server';
import { StaticRouter }     from 'react-router';

import App                  from '../../app/index.js';

export default req => {
    const context = {};
    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.path} context={context}>
            <App />
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
