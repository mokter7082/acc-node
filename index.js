const express = require('express')
const router = require('./routes/users.route')
const { viewCount } = require("./middleware/viewCount");
const { errorHandler } = require("./middleware/errorHandler");
const app = express();
const port = 3000;

app.use(viewCount);

app.use(express.json());

app.use("/api/users", router);

// app.use("/", (req, res) => {
//   res.sendFile(__dirname + "/public/test.html");
// });

app.all("*", (req, res) => {
  res.send("No route found");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("unhandledRejection", function (error) {
  console.log("Unhandled Rejection:", error.stack);
  app.close(() => {
    process.exit(1);
  });
});