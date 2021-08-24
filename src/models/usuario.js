const path = require('path');
const fs = require('fs');
const bcrypt = require("bcrypt");
module.exports = {
    // Directory: ruta al json con el que se va a estar modificando el modelo
    directory: path.resolve(__dirname,"../data","users.json"),
    write: function(data){
      return fs.writeFileSync(this.directory,JSON.stringify(data,null,2)) 
    },
    // All: devuelve la informacion del JSON que vamos a consultar. todos los resultados.
    all: function() {
        const file = fs.readFileSync(this.directory,"utf-8")
        return JSON.parse(file)
    },
    //one: con el id nos devuelve el elemento único que corresponde
    one: function (id) {
        return this.all().find(element => element.id == id);
    },
    findByEmail: function (email){
      return this.all().find(user => user.email == email)
    },/* 
    findByUser: function (email){
      return this.all().find(user => user.email == email)
    }, */
    create: function(data,file){
    let users = this.all();//leyendo todos los usuarios
    let lastUser = users[users.length -1]//leyendo el ultimo usuario si es que existe
    let newUser = {//creo el nuevo usario, como el crud
      id: users.length > 0 ? lastUser.id +1 : 1,//capture la barra de arriba y lastUser y le pongo el id + 1 
      nombre: data.nombre ? data.nombre : String(data.email).trim()//saca el nombre del email
      
	.replace(/\s/g, "")//quito espacio en el email
	.split("@")[0]//separo en string por el @ y me quedo con la primera parte
	.toLowerCase(),//combierte miniscula todo
      //nombreUsuario= String(data.nombreUsuario),
      email: String(data.email),//tomo el email
      admin: String(data.email).includes("@altastortas") || data.email.includes("@at") ? true: false,//si es con @digitalhose o @dh va hacer admin o no
      password: bcrypt.hashSync(data.password,10),//contrase;a la encripto , cantidad de veces del intentado
      avatar: file ? file.filename: null // cambiar null a nombre de archivo default , si viene un avatar o sino null

      /*nombreUsuario: data.nombre ? data.nombre : String(data.email).trim(),
      email: String(data.email),
      categoryUser: data.categoryUser,
      password: bcrypt.hashSync(data.password,10),
      avatar: null*/
    };
    users.push(newUser);
    this.write(users);
  },
/*  update:function(data,file,id){
    let users = this.all();
    users.map(user => {
      if(user.id == id){
        user.name = data.name ? data.name : String(data.email).trim()
	.replace(/\s/g, "")
	.split("@")[0]
	.toLowerCase();
        user.email = String(data.email);
        user.admin = String(data.email).includes("@digitalhouse") || user.data.email.include("@dh") ? true : false;
        user.password = bcrypt.hashSync(data.password,10);
        user.avatar = file ? file.filename : null;
        return user
      }
      return user
    });
    this.write(users)
  } */
}/* 5 metodos: all, one, create, (edit), validPassword, byEmail */