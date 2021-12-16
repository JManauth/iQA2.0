const router = require('express').Router();
const {
  createUser,
  createEval,
  login,
  allUsers,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser)

router.route('/eval').post(createEval)

router.route('/login').post(login);

router.route('/allUsers').get(allUsers)

module.exports = router;
