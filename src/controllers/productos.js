const {Product,Category} = require ("../database/models");
const {Op} = require ("sequelize");
const {like} = Op;

//const product = require ("../models/product")
//const category = require ("../models/category")

module.exports = {
    show: async(req, res) => {
        try {
            //const products= 
            //const categorias= await Category.findByPk(1,{include:['product']}) 
            
            return res.render("products/list",
            {title: "Listado de productos",
            style: null,
            productos: await Product.findAll({include:['category']}) 
            });
            //(req.params.category)? product.categorias(req.params.category) : product.allWithExtra() })
            
    } catch ( error) {
            console.log(error);
            res.send (error)
        }
    },
    
    /*(req, res) => ,    
    show: async (req, res) => {
    try {
        const show= await Product.findByPk(req.params.id,{
            include:['category']
        });

        return res.render("products/detail",{
        productos:show,
        title: "Detalles de producto",
        style: "productdetail" })
        
    } catch (error) {
        console.log(error);
    }
},
    
/*     let product = productsModel.find(req.params.id);

        if (product) {
            res.render('products/detail', { product });
        } else {
            res.render('products/404', { 
                message: {
                    class: 'error-message',
                    title: 'Inexistente',
                    desc: 'El producto que buscas ya no existe, nunca existió y tal vez nunca exista.'
                } */
    create: (req, res) => res.render("products/create",
    {title: "Crear producto", 
    style: "formregistro"}),
    
    save: (req,res) => {
    let result = product.new(req.body,req.file)
    return result == true ? res.redirect("/") : res.send("Error al cargar la informacion")},
    
    edit: (req, res) => res.render("products/edit", 
    {title: "Edicion de producto", 
    style: "formregistro", 
    product: product.oneWithExtra(req.params.id), 
    categories: category.all() }),
    
    update: (req,res) =>{
    let result = product.edit(req.body,req.file,req.params.id)
    return result != null ? res.redirect("/productos/detalle/" + result.id) : res.send("Error al cargar la informacion") 
    },
   
    delete: (req,res) => {
        let result = product.delete(req.params.id);
        return result == true ? res.redirect("/") : res.send("Error al cargar la informacion") 
    },
    
    test: (req, res) => res.send ({
        params: req.params, 
        body: req.body,
        query: req.query,
        products: (req.params.category)? product.porCategoria(req.params.category) : product.allWithExtra(),
    })
}

/*
 en el metodo show utilizar el metodo  oneWithExtra  del modelo de productos con el parametro del req.params.id
*/

/* 
 en metdo index verificar si llega el parametro en el req.parmas.category 
  y en caso de exista utilizar el metodo allWithExtra con un flitro por el nombre de la categoria del producto
  sino utilizar el metodo allWithExtra sin filtro 


  */

