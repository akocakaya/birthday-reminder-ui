import express          from 'express';

import * as Utils       from './utils/index.js';

const app = express();

app.use(express.static('public'));

app.get('/', (_req, res) => {
    const template = Utils.renderer();

    res.send(template);
});

const applicationPort = 3000;
app.listen(applicationPort, () => {
    console.log(`Listening on port ${applicationPort}`);
});
