const { validationResult} = require ('express-validator')
/* require modelo de usuarios */
module.exports = {
    login: (req, res) => res.render("users/login", {title: "Formulario de login"}),
    register: (req, res) => res.render("users/register", {title: "Formulario de Registro"}),
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
          let user= req.body;//si esta vacio entonces crear el usuario
          let avatar = req.file;
          userModel.create(user,avatar);
          return res.redirect("/");//despues de crear, vuelva a la pagina inicial 
        }else{//de modo contrario ir a la vista con los errores
          if (req.file != undefined){
            fs.unlinkSync(path.resolve(__dirname,
              "../../public/uploads/avatars/", 
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
      } 
    /* access: post extra - utilizar el metodo de validPassword y el metodo byEmail - guardar el usuario logeado en sesion - instalar express sesion*/
    /*save: post register - utilizar metodo create del usuario*/
}