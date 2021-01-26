module.exports = function(sequelize, DataTypes) {
    let BMI = sequelize.define("Bmi", {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          },
          BMI: {
              type: DataTypes.DECIMAL(3,2),
              allowNull:false,
          },
          date: {
              type: DataTypes.DATEONLY ,
              allowNull: false
          }
    });
    return BMI;
  };