module.exports = function (req,res,next){
    const ruta = req.url //toma la ruta de la pagina
    const ultimaPalabra = ruta.split('/').pop() // split separa por / y pop toma el ultimo array, toma la ultima palabra  
    console.log("ruta",ruta)
    console.log("ultima palabra", ultimaPalabra);
    //compartir a nivel global
    res.locals.styles = [];

    if (ultimaPalabra.length > 0 ){//se pone > 0 por la raiz /
        res.locals.styles.push(`/css/${ultimaPalabra}.css`)//se pone `` para interpolar una variable agregar temple literal ${..}
    }else{//en el caso que el length no sea mayor , que redirecione al home
        res.locals.styles.push (`/css/home2.css`)
    }

    //continuamos con la aplicacion
    next();
}