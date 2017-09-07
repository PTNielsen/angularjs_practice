const mongoose = require('mongoose');

if (!process.env.JERBZ_DB) {
  console.error('No database connection made.');
  process.exit(128);
}

mongoose.connect(process.env.JERBZ_DB);

mongoose.connection.on('error', function handleDBErrors(err) {
  console.error('Database Error: ', err);
  process.exit(128);
});
