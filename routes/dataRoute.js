const express = require('express');

const router = express.Router();
const db = require('../db/projectDB');

// const bodyParser = require('body-parser');
// const jsonParser = bodyParser.json()
// const passport   = require("../services/passport")
// const signAuth   = require("../services/signAuth")
// const ensureAuth   = require("../services/ensureAuth")
// const urlencodedParser = bodyParser.urlencoded({extended : false})
router.get('/getProjectList', (req, res) => {
  db.getProjectList((result) => {
    res.json({ hits: result });
  });
});

router.get('/session_data', (req, res) => {
  if (req.user === undefined) {
    const user = { user: '' };
    res.json({ hits: user });
    return;
  }
  res.json({ hits: req.user });
});

module.exports = router;
