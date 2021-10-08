const router = require('express').Router();
const {
  createUser,
  createEval,
} = require('../../controllers/user-controller');

// import middleware
const { authMiddleware } = require('../../utils/auth');

// put authMiddleware anywhere we need to send a token for verification of user
router.route('/').post(createUser)

router.route('/eval').post(createEval)

// router.route('/login').post(login);

// router.route('/me').get(authMiddleware, getSingleUser);

// router.route('/books/:bookId').delete(authMiddleware, deleteBook);

module.exports = router;