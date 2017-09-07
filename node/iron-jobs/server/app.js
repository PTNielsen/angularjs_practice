const express = require('express');
const bodyParser = require('body-parser');

require('./database-setup.js');

let path = require('path');
let app = express();

app.use(express.static(path.join(__dirname, '../client/public')));

app.use(bodyParser.json());

app.use(require('./middleware/logger.middleware.js'));

app.use('/api/jobs', require('./routes/jobs.route.js'));

app.use(require('./middleware/error-handling.middleware.js'));

app.listen(3000, function startServer() {
  console.log('The server is now running.');
});
