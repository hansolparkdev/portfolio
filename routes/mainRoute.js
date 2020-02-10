const express = require('express');
const passport = require('passport');

const router = express.Router();
// const db = require('../db/loginDB');
const bodyParser = require('body-parser');
const signAuth = require('../services/signAuth');

// const urlencodedParser = bodyParser.urlencoded({ extended: false });

// const ensureAuth   = require("../services/ensureAuth")
// const urlencodedParser = bodyParser.urlencoded({extended : false})
const jsonParser = bodyParser.json();

// const ensureAuth   = require("../services/ensureAuth")
router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', [signAuth], (req, res) => {
  res.render('index');
});

router.post('/logout', (req, res) => {
  req.session.destroy();
  res.send(true);
});

router.post('/signin', [jsonParser, passport.authenticate('local')], (req, res) => {
  res.send(req.user);
});

router.get('/:id', (req, res) => {
  res.render('index');
});

module.exports = router;
