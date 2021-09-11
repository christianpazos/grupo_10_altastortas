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
        admin: {
            type: DataType.BOOLEAN,
            allowNull: false,
        },
        password: {
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