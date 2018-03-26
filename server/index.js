const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../client/dist'));
});

// app.get('/', (req, res) => {
//   res.send('hello world');
// })

app.listen(port, err => {
  if (err) {
    console.log('error from starting server', err);
  } else {
    console.log('listening on port 3000');
  }
})