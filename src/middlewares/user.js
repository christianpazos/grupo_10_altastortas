const user = require("../models/usuario");
const userModel = require("../models/usuario");


module.exports =(req,res,next)=>{
    let user = null;
    if (req.cookie != undefined && req.cookie.user != undefined ){//si hay una cookie seteada
        user = userModel.one(req.cookie.user)//user va hacer igual a ese dato que se esta guardando buscado por id
        req.session.user = user//voy a guardar en user el user deacuerdo a ese id
    }
    
    if (req.session != undefined && req.session.user != undefined){//si hay session de un usario, guardo la session del user de arriba ,
        user = req.session.user;
    }
    
    res.locals.user= user;//comparto al user a la variable global

    next();
}