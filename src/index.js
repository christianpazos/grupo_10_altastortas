const express = require('express');
const path = require('path');
const app = express();
const method = require('method-override');


app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => console.log ("Server on http://localhost:"+app.get("port")));

app.use(express.static(path.resolve(__dirname,'../public')));

app.set("view engine", "ejs");
app.set("views",path.resolve(__dirname,"./views"));

app.use(express.urlencoded({extended:false}))
app.use(method("_method"))
app.use(require("./middlewares/styles"))

const main = require('./routes/main');
app.use(main)

const productos = require('./routes/productos');
app.use("/productos", productos)

const usuarios = require('./routes/usuarios');
app.use("/usuarios", usuarios)

