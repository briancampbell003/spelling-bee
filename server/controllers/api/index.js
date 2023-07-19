const router = require('express').Router();

const poolRoutes = require('./pool-routes');
const wordRoutes = require('./word-routes');

router.use('/pool', poolRoutes);
router.use('/word', wordRoutes);

module.exports = router;
