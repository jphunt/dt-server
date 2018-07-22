const express = require('express');

const router = express.Router();


router.get('/hello', function (req, res) {
  res.send('ok');
});

router.get('/', function (res, req) {
  req.send('hello')
});

router.get('/abc', function (req, res) {

  res.json('ok');

});

router.put('/user/:id', function (req, res) {


});

router.all('/auth', function (req, res) {

});

module.exports = router;
