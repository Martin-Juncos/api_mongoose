const mongoose = require("mongoose");
const app = require("./app");

// require("dotenv").config();
// const db_host = process.env.DB_HOST;
// const port = process.env.PORT;
// mongodb://localhost:27017
// const password = "BlockAcademy";
// const db_uri = `mongodb+srv://profmcjuncos:${password}@clustertest.9g78zi0.mongodb.net/prueba`;
const port = 3000;
const db_host = "127.0.0.1";
const db_uri = `mongodb://${db_host}/prueba`;

mongoose
  .connect(db_uri)
  .then(() => {
    console.log("Connected!");
    app.listen(port, () => {
      console.log(`Server running on port: ${port}`);
    });
  })
  .catch((error) => console.log(error));
