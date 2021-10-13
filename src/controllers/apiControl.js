const {User, Product, Category} = require('../database/models');
const sequelize = db.sequelize;

const controller = {
    users:async (req,res)=>{
        try {
            User.findAll({
                order:[
                    ['id','DESC']
                ],
                attributes:['nombre', 'email','esAdmin']
                
            }).then(users=>{})
        } catch (error) {
            
        }
    }



}