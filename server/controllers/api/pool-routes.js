const router = require('express').Router();
const { Pool } = require('../../models');

// CREATE new pool
router.post('/', async (req, res) => {
  try {
    const dbPoolData = await Pool.create({
        poolName: req.body.poolName,
    });
    res.status(200).json(dbPoolData);

  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET all pools
router.get('/', async (req, res) => {
  try {
    const dbPoolData = await Pool.findAll({
    });

    const pools = dbPoolData.map((pool) =>
      pool.get({ plain: true })
    );

    res.status(200).json(dbPoolData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


module.exports = router;
