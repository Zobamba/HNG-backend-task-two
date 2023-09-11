module.exports = (sequelize, DataTypes) => {
  const person = sequelize.define('users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING,
    },
  });
  person.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return person;
};