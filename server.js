require('dotenv').config();
const express = require('express');
const db = require('./models')

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.static("public"));

require("./routes/api-routes")(app);
require('./routes/signup-routes')(app);
require("./routes/html-routes")(app);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("Listening at localhost: " + PORT)
    });
});