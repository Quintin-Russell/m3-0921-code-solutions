const express = require('express');
const path = require('path');
const app = express();
app.listen(3000, () => console.log('server is listening on port 3000'));

const absPathPublic = path.join(__dirname, '/public');

const staticServer = express.static(absPathPublic);

app.use(staticServer);
