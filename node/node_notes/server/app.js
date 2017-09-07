const express     = require('express');
const bodyParser  = require('body-parser');
require('./database-setup.js');

let app = express();

app.use(express.static(__dirname + '/../client'));
console.log('Database location: ', process.env.MONGO_DB);
app.use(bodyParser.json());

app.use(require('./middleware/log-stuff.middleware.js'));

app.use(require('./middleware/auth.middleware.js'));

app.get('/', function showHomePage(req, res, next) {
  console.log(req.url);

  res.status(200);
  res.set('Content-Type', 'text/html');
  res.end('<h1>Hello World</h1>');
});

app.use('/food', require('./routes/food.routes.js'));

// Error handling is ALWAYS THE LAST PIECE OF MIDDLEWARE
app.use(require('./middleware/error-handler.middleware.js'));

app.listen(3000, function doSomethingOnceServerIsUp() {
  console.log('The server is now running!');
});
