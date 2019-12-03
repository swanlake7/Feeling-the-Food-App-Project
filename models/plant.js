module.exports = function (sequelize, DataTypes) {
    var Plant = sequelize.define("filtered_data", {
        "Latinname": {
            type: DataTypes.STRING,
            primaryKey: true
        },
        "Commonname": DataTypes.STRING,
        "Medicinal": DataTypes.STRING,
        "Knownhazards": DataTypes.STRING,
        "Edibleuses": DataTypes.STRING,
        "Usesnotes": DataTypes.STRING,
        "EdibilityRating": DataTypes.INTEGER,
        "MedicinalRating": DataTypes.INTEGER
    }, {
        timestamps: false
    });
    return Plant;
};