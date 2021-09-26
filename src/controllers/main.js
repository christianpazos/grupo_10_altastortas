//const product = require ("../models/product")
const {Product,Category} = require("../database/models")

module.exports = {
    index: async(req,res) =>{
        try {
            //return res.send(await Product.findAll({include:['category']}))
            return res.render("home",
            {title: "home",
            style: null,
            productos: await Product.findAll({include:['category']})
            })
        } catch (error) {
            res.send(error)
        }
    },
   // contact:(req, res) => res.render("contact",{title: "Contacto", style: null}),
   //search:(req, res) => res.render("products/list"), 
 



/*    
}*/
  
/* modificar el metodo index para enviar a la vista del home una array de 4 productos de forma alatoria  */

/*  crear en el modelo de productos  un metodo para selecionar 4 productos de forma alatoria */ 

}