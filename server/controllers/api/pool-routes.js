const router = require('express').Router();
const { Pool } = require('../../models');

// CREATE new pool
router.post('/', async (req, res) => {
  try {
    const dbPoolData = await Pool.create({
        poolName: req.body.poolName,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all pools
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
