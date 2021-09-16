//const product = require ("../models/product")
const product = require("../database/models/Product")

module.exports = {
    index: async(req,res) =>{
        try {
            
            return res.render("home",
            {title: "home",
            style: null,
            productos:  product.findAll({include:["category"]}) })
        } catch (error) {
            res.render(error)
        }
    }
    
    
    
    /*(req, res) => res.render("home",
    {title: "home",
    style: null,
    productos:  product.randomProducs() })*/,
 
   // index: (req, res) => res.render("home", {title: "Home", style: null }),
    contact:(req, res) => res.render("contact",{title: "Contacto", style: null}),
    search:(req, res) => res.render("products/list"), 
 



/*    
}*/
  
/* modificar el metodo index para enviar a la vista del home una array de 4 productos de forma alatoria  */

/*  crear en el modelo de productos  un metodo para selecionar 4 productos de forma alatoria */ 

}