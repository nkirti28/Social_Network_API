const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// /api/user
router.route("/").get(getUsers).post(createUser);

// /api/user/:id
router.route("/:id").get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/friends
router.route("/:id/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
