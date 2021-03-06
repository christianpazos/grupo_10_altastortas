const fs= require('fs')
const path= require('path')
const bcrypt = require("bcrypt");
const { validationResult} = require ('express-validator')
const {User} = require ("../database/models");


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
    show:(req,res)=>{
      User.findAll({
					order: [
					['id', 'DESC']
					]}
			).then(users => {
				return res.render('users/listUsers', { 
          title:"Listado de Usuario",
          users:users });
			})
			.catch(error => console.log(error));
    },
    save: async(req,res) => {
      try {        
        let errors = validationResult(req);//guardamos los datos , y variable para los errores
        if (errors.isEmpty()){//o .length == 0, si no hay errores
            await User.create({
              nombre: req.body.nombre,
              email: req.body.email,
              contraseña: bcrypt.hashSync(req.body.contraseña,10),
              esAdmin: String(req.body.email).includes("@altastortas") || (req.body.email).includes("@at") ? true: false,//si es con @digitalhose o @dh va hacer admin o no
              //contrase;a la encripto , cantidad de veces del intentado
              avatar: "uploads/avatar/"+ req.file.filename
              });
              return res.redirect("/usuarios/login") 
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
                res.cookie("user",user.id,{maxAge:1000*60*60*24*30});
                }//lo siguiente guardamos los datos en una session
              req.session.user = user;
              return res.redirect(`/usuarios/profile/${user.id}`);//redirigimos a la raiz
              } catch (error) {
                console.log(error);
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
      res.cookie("user",null, {maxAge:1});
        return res.redirect("/");
      },  
    update: async (req,res) => {
      let errors = validationResult(req)
      let edit = await User.findByPk(req.params.id)
      if (errors.isEmpty()){
        let result = await User.update({
          nombre: req.body.nombre,
          email: req.body.email,
          contraseña: bcrypt.hashSync(req.body.contraseña,10),
          esAdmin: String(req.body.email).includes("@altastortas") || (req.body.email).includes("@at") ? true: false,//si es con @digitalhose o @dh va hacer admin o no
          avatar: 'uploads/avatar/'+ req.file.filename
        },{where:{id:edit.id}});
        delete req.session.user;//elimino la sesion previa
      let user = User.findOne({
        where:{email:req.body.email}});//
      req.session.user = user;
      return res.redirect("/") 

      }
    },
    delete:async(req,res)=>{
      try {
        let userId= await User.findByPk(req.params.id)
        let imagenDefault='';
        if (userId.avatar!= 'default_user.png'){
          imagenDefault= path.join(__dirname,'../../public/uploads/avatar/'+ userId.avatar);
        }
        User.destroy({where:{id:req.params.id}}).then(deleteUser=>{
          if(fs.existsSync(imagenDefault)){
             fs.unlinkSync(imagenDefault)
          }
        });
        req.session.destroy();
        res.cookie("user",null, {maxAge:1});
        return res.redirect('../login')
      } catch (error) {
        console.log(error);
      }
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
        contraseña:req.body.contraseña,
        esAdmin: String(req.body.email).includes("@altastortas") || (req.body.email).includes("@at") ? true: false,//si es con @digitalhose o @dh va hacer admin o no
        
        avatar: req.body.avatar
        });
    } catch (error) {
      console.log(error);
    }
  }
}