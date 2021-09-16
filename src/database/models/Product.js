module.exports = (sequelize, DataType) => {
    const Product = sequelize.define ('Product',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type:DataType.STRING,
            allowNull: false,
        },
        category_id: {
            type: DataType.INTEGER,
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
        tableName: 'Product'
    });
    Product.associate = ({Category}) => {
        Product.belongsTo(Category, {
            as:'category',
            foreignKey:"category_id"
        })
    }
    return Product;
}