const env = require("dotenv").config({ path: "./config.env" });
const app = require("./middleware/app");
require("./config/db");

const port = process.env.PORT || 6000;

app.listen(port, function () {
  console.log(`Server is listened by ${port} port`);
});
