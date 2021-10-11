//const userModel = require("../models/usuario"); 
const userModel = require ("../database/models/User");

module.exports =async (req,res,next)=>{
    try {
        let user = null;
        if (req.cookie != undefined && req.cookie.user != undefined ){//si hay una cookie seteada
            user = await userModel.findByPk({where: {id:req.cookie.id}})//user va hacer igual a ese dato que se esta guardando buscado por id
            req.session.user = user//voy a guardar en user el user deacuerdo a ese id
        }
        
        if (req.session != undefined && req.session.user != undefined){//si hay session de un usario, guardo la session del user de arriba ,
            user = req.session.user;
        }
        res.locals.user= user;//comparto al user a la variable global
    } catch (error) {
        console.log(error);
    }
    next();
}