const {Product,Category} = require ("../database/models");
const {Op} = require ("sequelize");
const {like} = Op;
const {validationResult} = require('express-validator')

//const product = require ("../models/product")
//const category = require ("../models/category")

module.exports = {
    show: async(req, res) => {
        try {
            const productos= await Product.findAll({include:['category']});
            const categorias= await Category.findAll({include:['product']}) 
            return res.render("products/list",
            {title: "Listado de productos",
            style: null,
            productos: productos,
            categories:categorias  
            });
            //(req.params.category)? product.categorias(req.params.category) : product.allWithExtra() })
            
    } catch ( error) {
            console.log(error);
            res.send (error)
        }
    },
    detalle:async(req,res)=>{
        try {
            let product = Product.findByPk({
                where:{id:req.params.id}});
            if (product) {
            res.render('products/detail',{
            title: "Detalle del producto",
            style: null,
            productos: product,
            //categories:categorias  
            });
            } else {
            res.render('products/404', { 
            message: {
            class: 'error-message',
            title: 'Inexistente',
            desc: 'El producto que buscas ya no existe, nunca existió y tal vez nunca exista.'

            }})}
        } catch (error) {
            console.log(error)
        }
    }, 
    category:async(req,res)=>{
            try {
                //const categories= await Category.findAll({include:['product']})
                const category = await Category.findOne({
                    where: {nombre: {
                        [like] : Category.nombre}
                    }
                })

            return res.render("products/categories",
            {title: "Listado de productos",
            style: null,
            categories: category
            });
    }catch(error){
        console.log(error);
    }
},
    
    create: (req, res) => res.render("products/create",
    {title: "Crear producto", 
    style: "formregistro"}),
    
    save: async(req,res) => {
        try {
            let errors = validationResult(req)
            if (errors.isEmpty()){
                let result = await Product.create({
                    nombre: req.body.nombre,
                    precio: req.body.precio,
                    descripcion: req.body.descripcion,
                    category_id: req.body.category_id,
                    imagen: req.file.filename
                    })
                    return result?res.redirect("productos/list"): 
                    res.render("products/create", {
                        title:"Products",
                        errors:errors.mapped(),
                        data:req.body
                        });
                }else{//de modo contrario ir a la vista con los errores
                    /* if (req.file != undefined){fs.unlinkSync(path.resolve(__dirname,
                        "../../public/uploads/avatar/", 
                        req.file.filename))//eliminar la imagen
                          } */
                      res.render("products/create", {/*mostrar en la vistas los errores*/
                      title:"Products",
                      errors:errors.mapped(),
                      data:req.body/*pasar la vieja data*/
                      });
                }
                } catch (error) {
                    console.log(error)
                }
            },
            
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
    
    test: async(req, res) => {
    try {
        const productos= await Product.findAll({include:['category']})
        const categorias= await Category.findByPk(1,{include:['product']}) 
        
        const category = await Category.findOne({
            where: {nombre: {
                [like] : "Liviana"}
            }
        })
        return res.send({category}) 
    
    } catch (error) {
        console.log(error);
    }}
}

