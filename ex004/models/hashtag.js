module.exports = (sequelize, DataType) =>
  sequelize.define(
    "hashtag",
    {
      title: {
        type: DataType.STRING(15),
        allowNull: false,
        unique: true
      }
    },
    {
      timestamps: true,
      paranoid: true
    }
  );
