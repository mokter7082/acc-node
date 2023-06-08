const express = require("express")
const userController = require("../controllers/users.controller")

const router = express.Router()



router
  .route("/")
  .get(userController.getUsers)
  // **
  //user post
  .post(userController.saveAUser);

router
  .route("/:id")
  .get(userController.getSingleUser)
  .patch(userController.updateUser);

module.exports = router