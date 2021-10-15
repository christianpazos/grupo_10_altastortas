const {User, Product, Category} = require('../database/models');


const controller = {
    users:async (req,res)=>{
        try {
            User.findAll({
                order:[
                    ['id','DESC']
                ],
                attributes:['nombre', 'email','esAdmin']
                
            }).then(users=>{
                let resul={
                    general:{
                        url:"/apis/users",
                        cantidad:users.length
                    },
                    data:users
                }
                res.send(resul);
            })
        } catch (error) {
            console.log(error);
        }
    },
    userId:async(req,res)=>{
        try {
            User.findByPk(req.params.id).then((user)=>{
                user!=null?res.send(user):res.send("No se encontro ese Usuario")
            })
            
        } catch (error) {
            console.log(error);
        }
    },
    productos:async (req,res)=>{
        try {
            let sumatoria= Product.sum('precio');
            let data=Product.findAll({
                order:[['id','DESC']],
                attributes:['id','nombre','imagen','precio','descripcion']
            })
            Promise.all([sumatoria,data]).then(([promedio,productos])=>{
                let resul={
                    general:{
                        url:"/apis/productos",//preguntar a edu 
                        totalProductos:productos.length,
                        totalPrecio:promedio
                    },
                    data:productos
                } 
                return res.send(resul);
            })
        }catch (error) {
            console.log(error);
            
        }
    },
    productosId:async(req,res)=>{
        await Product.findOne({
            where:{id:req.params.id}}).then((producto)=>{
                producto!=null?res.send(producto):res.send("No se encontro ese Producto :(")
            })
        
    },
    category:async(req,res)=>{
        try {
            //let sumatoria= Category.sum('precio');
            let data=Category.findAll({include:['product']},{
                order:[['id','DESC']],
                attributes:['id','nombre','category_id']
            })
            Promise.all([/* sumatoria */data]).then(([/* promedio */categorias])=>{
                
                let resul={
                    general:{
                        url:"/apis/categorias",//preguntar a edu 
                        totalCategorias:categorias.length,
                        //totalPrecio:promedio
                    },
                    data:categorias
                } 
                return res.send(resul);
            })
        }catch (error) {
            console.log(error);
        }
    },
    categoryId:async(req,res)=>{
            await Category.findOne({
                include:['product'],
                where:{id:req.params.id}}).then((categorias)=>{
                    categorias!=null?res.send(categorias):res.send("No se encontro esa Categoria :(")
                })
            }
}
module.exports= controller