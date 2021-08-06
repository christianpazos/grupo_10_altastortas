const path = require('path');
const fs = require('fs');

module.exports = {
    // Directory: ruta al json con el que se va a estar modificando el modelo
    directory: path.resolve(__dirname,"../data","users.json"),
    // All: devuelve la informacion del JSON que vamos a consultar. todos los resultados.
    all: function() {
        const file = fs.readFileSync(this.directory,"utf-8")
        return JSON.parse(file)
    },
    //one: con el id nos devuelve el elemento único que corresponde
    one: function (id) {
        return this.all().find(element => element.id == id);
    },
  create: function(data){
    let users = this.all();
    let lastUser = users[users.length -1]
    let newUser = {
      id: users.length > 0 ? lastUser.id +1 : 1,
      nombre: data.nombre ? data.nombre : String(data.email).trim()
	.replace(/\s/g, "")
	.split("@")[0]
	.toLowerCase(),
      nombreUsuario: data.nombre ? data.nombre : String(data.email).trim(),
      email: String(data.email),
      categoryUser: data.categoryUser,
      password: bcrypt.hashSync(data.password,10),
      avatar: null
    };
    users.push(newUser);
    this.write(users)
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