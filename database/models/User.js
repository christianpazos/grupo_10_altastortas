module.exports = (Sequelize, DataType) => {
    const User = Sequelize.define ('User',{
        usuarios_id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type:DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
            unique: true,
        },
        esAdmin: {
            type: DataType.BOOLEAN,
            allowNull: false,
        },
        contraseña: {
            type: DataType.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataType.STRING,
            allowNull: false,
        },

    }, {
        timestamps: false,
        tableName: 'usuarios'
    });
    return User;
}