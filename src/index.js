const express = require('express');
const app = express();

const applicationPort = 3000;
app.listen(applicationPort, () => {
    console.log(`Listening on port ${applicationPort}`);
});
