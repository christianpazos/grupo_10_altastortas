const { validationResult} = require ('express-validator')

const userModel = require("../models/usuario");
const fs= require('fs')
const path= require('path')

/* require modelo de usuarios */
module.exports = {
    login: (req, res) => res.render("users/login", {title: "Formulario de login"}),
    register: (req, res) => res.render("users/register", {title: "Formulario de Registro"}),
    profile:(req,res) => res.render("users/profile",{title:"Perfil de Usuario"}),
    processRegister: (req, res) => {
        const resultValidation = validationResult(req);

        if (resultValidation.errors.length > 0){
            return res.render ('users/register', {
                errors: resultValidation.mapped(),
                oldData: req.body,
            });
        }
    },
    save: (req,res) => {
        let errors = validationResult(req);//guardamos los datos , y variable para los errores
        if (errors.isEmpty()){//o .length == 0, si no hay errores
          let user= req.body;//si no hay errores (esta vacio isEmpty) entonces crear el usuario
          let avatar = req.file;//si no viene una una imagen colocar la de defoult 
          userModel.create(user,avatar);
          return res.redirect("/");//despues de crear, vuelva a la pagina raiz 
        }else{//de modo contrario ir a la vista con los errores
          if (req.file != undefined){
            fs.unlinkSync(path.resolve(__dirname,
              "../../public/uploads/avatar/", 
              req.file.filename
              )
            )//eliminar la imagen
          }
          res.render("users/register", {/*mostrar en la vistas los errores*/
            title:"Join",
            errors:errors.mapped(),/* mejor vista con mapped*/  
            data:req.body/*pasar la vieja data*/
          });//pasando a la vista los errores
        }
      },
      access: (req,res) => {
        let errors = validationResult(req); //recibe esos errores
        //return res.send(errors.length)
        if (errors.isEmpty()){//verificar la vueltas de errores, si no hay errores entonces logearse
          let user = userModel.findByEmail(req.body.email);//buscar el usuario por el email , input checkbox name     
          if (req.body.remember != undefined ){//Si no marcamos el checkbox, culquier dato pero no undefine
              res.cookie("user",//seteamos cookie user 
              user.id,//guardamos esos datos
              {maxAge:1000*60*60*24*30}//tiempo que dure esa cookie, es un año aqui
              );//guardo en una cookie el user, y guardo del user, el id
          }//lo siguiente guardamos los datos en una session
          req.session.user = user;
          return res.redirect("/");//redirigimos a la raiz
        }else{
          res.render("users/login", {/*mostrar en la vistas los errores*/
            title:"Access",
            errors:errors.mapped(), /* mejor vista con mapped*/
            data:req.body});/*pasar la vieja data*/
        }//pasando a la vista los errores
      },
      logout: (req,res) => {
        req.session.destroy();
        res.cookie("user",null, {maxAge:0});
        res.redirect("/");
      },  
    update: (req,res) => {
    userModel.update(req.body,null);
    delete req.session.user;//elimino la sesion previa
    let user = userModel.findByEmail(req.body.email);//
    req.session.user = user;
    return res.redirect("/")
    } 
    /* access: post extra - utilizar el metodo de validPassword y el metodo byEmail - guardar el usuario logeado en sesion - instalar express sesion*/
    /*save: post register - utilizar metodo create del usuario*/
}