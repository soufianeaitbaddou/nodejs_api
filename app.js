const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const expressValidation = require("express-validation");
const sequelize =  require('sequelize');




const categorieRoutes = require("./routes/categories");
const offersRoutes = require("./routes/offers");
const authRoutes = require("./routes/auth");
//const orderRoutes = require("./api/routes/orders");

app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests
app.use("/categories", categorieRoutes);
app.use("/offers", offersRoutes);
app.use("/auth", authRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});
app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
        console.log('hi');
        
      res.status(err.status).json(err);
    }
    if (err instanceof sequelize.ValidationError) {
      console.log('hi jjj');
      
    res.status(err.status).json(err);
  } else {
      res.status(500)
        .json({
          status: err.status,
          message: err.message
        });
    }

    next();
  });
  
app.use("/*",(error, req, res, next) => {
  console.log('gfgf');

});

module.exports = app;