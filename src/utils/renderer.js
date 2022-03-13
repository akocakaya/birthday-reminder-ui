import React            from 'react';
import ReactDOMServer   from 'react-dom/server';

import SignUp           from '../client/pages/auth/sign-up.js';

export default () => {
    const content = ReactDOMServer.renderToString(<SignUp />);

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
}
