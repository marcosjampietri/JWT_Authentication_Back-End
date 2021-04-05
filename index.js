const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/auth");
//ENV
const router = express();
dotenv.config({ path: "./.env" });

// parse application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
router.use(bodyParser.json());

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then((err, client) => {
        console.log("conectado no MarcosDB");
    });

// routes(app);
router.use("/api", userRoutes);

const port = process.env.PORT || 5000;

router.listen(port, () => {
    console.log(`consolando a porta ${port}`);
});
