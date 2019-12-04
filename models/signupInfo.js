// creating a table with user row and email and password columes
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        email: DataTypes.STRING,
        pw: DataTypes.STRING
    });
    return User;
};