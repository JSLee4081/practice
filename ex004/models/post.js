module.exports = (sequelize, DataType) =>
	sequelize.define(
		"post",
		{
			content: {
				type: DataType.STRING(140),
				allowNull: false
			},
			img: {
				type: DataType.STRING(200),
				allowNull: true
			}
		},
		{timestamps: true, paranoid: true}
	);