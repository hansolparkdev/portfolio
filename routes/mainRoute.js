const express = require('express');
const passport = require('passport');

const router = express.Router();
// const db = require('../db/loginDB');
const bodyParser = require('body-parser');
const signAuth = require('../services/signAuth');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// const ensureAuth   = require("../services/ensureAuth")
// const urlencodedParser = bodyParser.urlencoded({extended : false})
// const jsonParser = bodyParser.json()

// const ensureAuth   = require("../services/ensureAuth")

router.get('/login', [signAuth], (req, res) => {
  if (req.user === undefined) {
    const user = { user: '' };
    res.render('index', { user });
    return;
  }
  res.render('index', { user: req.user });
});

router.get('/session_data', (req, res) => {
  if (req.user === undefined) {
    const user = { user: '' };
    res.json({ hits: user });
    return;
  }
  res.json({ hits: req.user });
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

router.post('/signin', [urlencodedParser, passport.authenticate('local', {
  failureRedirect: '/login',
})], (req, res) => {
  res.redirect('/');
});

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('index');
});

router.get('/session_data', (req, res) => {
  if (req.user === undefined) {
    const user = { user: '' };
    res.json({ hits: user });
    return;
  }
  res.json({ hits: req.user });
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.render('index');
});

router.get('/:id', (req, res) => {
  // const { id } = req.params;
  if (req.user === undefined) {
    const user = { user: '' };
    res.render('index', { user });
    return;
  }
  res.render('index', { user: req.user });
});

router.post('/signin', [urlencodedParser, passport.authenticate('local', {
  failureRedirect: '/login',
})], (req, res) => {
  res.redirect('/');
});

module.exports = router;
