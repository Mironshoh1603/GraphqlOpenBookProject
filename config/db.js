const mongoose = require("mongoose");

const db = process.env.DATABASE.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(db)
  .then(() => {
    console.log("DATABASE is connected...");
  })
  .catch((err) => {
    console.log("DB is not connected!. Error: ", err);
  });
