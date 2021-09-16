module.exports = (Sequelize, DataType) => {
    const Category = Sequelize.define ('Category',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type:DataType.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
        tableName: 'category'
    });
Category.associate = ({Product}) => {
    Category.hasMany(Product, {
            as:'product',
            foreignKey:"category_id"
        })
    }
    return Category;

}