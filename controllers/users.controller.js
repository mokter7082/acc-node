const users = [
  { id: 1, name: "Md Mokter", email: "mokter@gmail.com" },
  { id: 2, name: "Md Mokter1", email: "mokter1@gmail.com" },
  { id: 3, name: "Md Mokter3", email: "mokter3@gmail.com" },
];

module.exports.getUsers = (req, res) => {
  res.json({
    message: "user found !",
    users: users,
  });
};
module.exports.getSingleUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((item) => item.id === parseInt(id));
  res.send({
    message: "user found",
    user: user,
  });
};

module.exports.saveAUser = (req, res) => {
  res.send("Save a user woth controller");
};

module.exports.updateUser = (req, res) => {
  console.log(req.params);
  res.send("Updated");
};
