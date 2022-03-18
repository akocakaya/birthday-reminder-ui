import '@babel/polyfill';
import express          from 'express';
import bodyParser       from 'body-parser';

import * as Utils       from './utils/index.js';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    const template = Utils.renderer(req);

    res.send(template);
});

const applicationPort = 3000;
app.listen(applicationPort, () => {
    console.log(`Listening on port ${applicationPort}`);
    console.log(`Node version: ${process.versions.node}`);
});

app.use(bodyParser.json());

// TODO: refactor
const router = express.Router();
router.route('/api/auth/sign-up')
    .post( (req, res, _next) => {
        console.log(`req.body -> `, req.body)
        res.json(
            req.body,
        );
    });

app.use('/', router);
