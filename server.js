require('dotenv').config();
const express = require('express');
const db = require('./models')
const isAuthenticated = require('./middleware/isAuthenticated.js')
const jwt = require('jsonwebtoken');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static("public"));
app.use(isAuthenticated);

require('./routes/signup-routes')(app);
require("./routes/api-routes")(app);
require("./routes/userFavorites")(app);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Listening at localhost: " + PORT)
    });
});