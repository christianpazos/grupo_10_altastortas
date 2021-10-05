const fs= require('fs')
const path= require('path')
const { validationResult} = require ('express-validator')
const {User} = require ("../database/models");
const { Op } = require("sequelize");

//const userModel = require("./models/usuario");

module.exports = {
    login: (req, res) => {
      res.render("users/login",{
      title: "Formulario de login"}
    )},
    register: (req, res) => 
    res.render("users/register", {
      title: "Formulario de Registro"
    }),
    profile:(req,res) => res.render("users/profile",{
      title:"Perfil de Usuario"
    }),
    processRegister: async (req, res) => {
        try {
          const resultValidation = validationResult(req);
          if (resultValidation.errors.length > 0){
              return res.render ('users/register',{
                  errors: resultValidation.mapped(),
                  data: req.body,
              });
          }
        } catch (error) {
          console.log(error);
        }
      },
    save: async(req,res) => {
      try {        
        let errors = validationResult(req);//guardamos los datos , y variable para los errores
        if (errors.isEmpty()){//o .length == 0, si no hay errores
           
            const newUser = await User.create({
              nombre: req.body.nombre,
              email: req.body.email,
              contraseña:req.body.contraseña,
              esAdmin: String(req.body.email).includes("@altastortas") || (req.body.email).includes("@at") ? true: false,//si es con @digitalhose o @dh va hacer admin o no
              //contrase;a la encripto , cantidad de veces del intentado
              avatar: req.file.filename
              });
            return newUser? res.redirect("/"): res.redirect("/");//despues de crear, vuelva a la pagina raiz 
            }else{//de modo contrario ir a la vista con los errores
                if (req.file != undefined){fs.unlinkSync(path.resolve(__dirname,
                    "../../public/uploads/avatar/", 
                    req.file.filename))//eliminar la imagen
                      }
                  res.render("users/register", {/*mostrar en la vistas los errores*/
                  title:"Join",
                  errors:errors.mapped(),
                  data:req.body/*pasar la vieja data*/
                  });
            }
      } catch (error) {
        console.log(error);
      }
    },
      access: async (req, res) => {
        try {
          let errors = validationResult(req); 
          if (errors.isEmpty()){
            try {
              let user = await User.findOne({
                where:{email:req.body.email}});
              if (req.body.remember != undefined ){
                res.cookie("user",//seteamos cookie user 
                user.id,//guardamos esos datos
                {maxAge:1000*60*60*24*30}
                );
              }//lo siguiente guardamos los datos en una session
              req.session.user = user;
              return res.redirect("/");//redirigimos a la raiz
              } catch (error) {
                return res.send(error)
              }
          }else{
              res.render("users/login", {
              title:"Access",
              errors:errors.mapped(), 
              data:req.body});
          }//pasando a la vista los errores
          
        } catch (error) {
          console.log(error);
        }
    },  
    logout: (req,res) => {
      req.session.destroy();
      res.cookie("user",null, {maxAge:0});
        res.redirect("/");
      },  
    update: (req,res) => {
      User.update(req.body,null);
      delete req.session.user;//elimino la sesion previa
    let user = userModel.findByEmail(req.body.email);//
    req.session.user = user;
    return res.redirect("/")
  },
  test: async(req, res) => {
        try {
            const prueba= await User.findAll()
            return res.send({prueba}) 
        
        } catch (error) {
            console.log(error);
        }},
  testsave:async(req,res)=>{
    try {
      const newUser = await User.create({
        nombre: req.body.nombre,
        email: req.body.email,
        contraseña:req.body.password,
        esAdmin: String(req.body.email).includes("@altastortas") || (req.body.email).includes("@at") ? true: false,//si es con @digitalhose o @dh va hacer admin o no
        //contrase;a la encripto , cantidad de veces del intentado
        avatar: req.body.avatar
        });
    } catch (error) {
      console.log(error);
    }
  }
  /* access: post extra - utilizar el metodo de validPassword y el metodo byEmail - guardar el usuario logeado en sesion - instalar express sesion*/
    /*save: post register - utilizar metodo create del usuario*/
}