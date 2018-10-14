const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');

});

router.get('/home', (req, res) => {
  const wes = { name: 'gaorieh', age: '33' };
  //res.json(wes);
  //res.send('Hey! Iam in Home Page');
  //res.send(req.query.name);
  // res.json(req.query);
  res.render('hello');

});

router.get('/home1/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

const myCode = "<html><head></head><body><p>Hello</p></body></html>"

module.exports = router;
