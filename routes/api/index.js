const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// add prefix of `/thoughts` to routes created in `thoughts-routes.js`
router.use('/thoughts', thoughtRoutes);
// add prefix of `/comments` to routes created in `comment-routes.js`
router.use('/users', userRoutes);

module.exports = router;
