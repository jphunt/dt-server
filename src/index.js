const express = require('express');
const router = require('./router/router');
const jwt = require('express-jwt');


const app = express();

app.use(jwt({
  secret: 'secret'
}).unless({
  path: '/hello'
}));

app.use(function (err, req, res, next) {
  // next();
  if (err.name === 'UnauthorizedError') {
    res.status(401).send('invalid token...');
  }
});

app.use(router);

const port = 3000;
app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started');
  }
});