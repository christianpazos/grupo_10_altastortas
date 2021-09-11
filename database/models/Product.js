const product = require("../../src/models/product");

module.exports = (sequelize, DataType) => {
    const Product = sequelize.define ('Product',{
        product_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type:DataType.STRING,
            allowNull: false,
        },
        category_id: {
            type: DataType.STRING,
            allowNull: false,
        },
        imagen: {
            type: DataType.STRING,
            allowNull: false,
        },
        precio: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        descripcion: {
            type: DataType.STRING,
            allowNull: false,
        },

    }, {
        timestamps: false,
        tableName: 'products'
    });
    Product.associate = ({Category}) => {
        Product.belongsTo(Category, {
            as:'Category',
            foreignKey:"category_id"
        })
    }
    return Product;
}