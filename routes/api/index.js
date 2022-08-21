const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/thougts', thoughtRoutes);
// add prefix of `/comments` to routes created in `comment-routes.js`
router.use('/users', userRoutes);

module.exports = router;
