import express          from 'express';
import React            from 'react';
import ReactDOMServer   from 'react-dom/server';

import SignUp           from './client/pages/auth/sign-up.js';

const app = express();

app.get('/', (_req, res) => {
    const content = ReactDOMServer.renderToString(<SignUp />);

    res.send(content);
});

const applicationPort = 3000;
app.listen(applicationPort, () => {
    console.log(`Listening on port ${applicationPort}`);
});
