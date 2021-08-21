const express = require('express');
const path = require('path');
const app = express();
const method = require('method-override');
const session = require('express-session');
const cookie = require('cookie-parser') 


//App Acces Public
app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log ("Server on http://localhost:"+app.get("port")));
//App View
app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname,"./views"));
//App Acces Public
app.use(express.static(path.resolve(__dirname,'../public')));

//App Middlewares
app.use(express.urlencoded({extended:false}))
app.use(method("_method"))
app.use(cookie());
app.use(session({
    secret: "proyecto",
    resave: true,
    saveUninitialized:true}));

//Middlewares Custom
app.use(require("./middlewares/styles"));
app.use(require("./middlewares/user"));


//App Routes
const main = require('./routes/main');
app.use(main)
const productos = require('./routes/productos');
app.use("/productos", productos)
const usuarios = require('./routes/usuarios');
app.use("/usuarios", usuarios)

