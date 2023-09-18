const express = require('express');
const {
  enrollUser,
  deleteUser,
  updateUser,
  getUser,
} = require('../controllers/userControllers');

const router = express.Router();

router
  .route('/')
  .post(enrollUser);

router
  .route('/:id')
  .delete(deleteUser)
  .put(updateUser)
  .get(getUser);

module.exports = router;
