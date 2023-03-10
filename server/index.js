require("dotenv").config();

const express = require("express");
const sequelize = require("./db");
const models = require("./models/models.js");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const path = require("path");

const errorHandler = require("./middleware/ErrorHandlingMiddleWare");
const { resolve } = require("path");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "statik")));
app.use(fileUpload({}));
app.use("/api", router);

//Обработчик ошибок
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
