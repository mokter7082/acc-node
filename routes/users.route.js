const express = require("express")
const userController = require("../controllers/users.controller")

const router = express.Router()



router.route("/").get(userController.getUsers)
.post(userController.saveAUser)
module.exports = router