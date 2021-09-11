module.exports = (Sequelize, DataType) => {
    const Category = Sequelize.define ('Category',{
        category_id: {
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
        tableName: 'categories'
    });
    Category.associate = ({Product}) => {
        Category.hasMany(Product, {
            as:'Product',
            foreignKey:"category_id"
        })
    }
    return Product;

}
