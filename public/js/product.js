/*Capturamos el formulario*/
const formProduct = document.querySelector("#product");

/* Hacemos un array con todos los elementos */
let inputs = Array.from(formProduct.elements);
inputs = inputs.filter(elemento =>elemento.getAttribute("type")!=undefined);
console.log(inputs)
inputs.forEach(input=>{
    if(input.getAttribute("type")!="file"){//separo el evento del type text del tipo file
        input.onblur= (evento)=>{//
            const target = evento.target;
            const name = target.getAttribute("name")
            const value = target.value//devuelve el padre del input
            const field = target.parentElement;//padre osea el fieldset
            const feed = field.querySelector(".feed");//trae el fieldset
            console.log(field);
            target.classList.remove("error")//reinicio los errores
            feed.classList.remove("error")
            feed.classList.remove("success")
            feed.innerHTML = null;
    
            if(name == "nombre"){
                if(value.length < 2 ){//minimo 2 caracteres
                    target.classList.add("error");//aca le agregar el fonde verde o rojo
                    feed.classList.add("error")
                    feed.innerHTML = "Debe tener minimo 2 caracteres"
                }else{
                    target.classList.add("success");
                    feed.classList.add("success");
                    feed.innerHTML= "success"
                }
            }
            if(name == "category_id"){
                if(value == undefined ){//minimo 2 caracteres
                    target.classList.add("error");//aca le agregar el fonde verde o rojo
                    feed.classList.add("error")
                    feed.innerHTML = "Debes seleccionar una categoria"
                }else{
                    target.classList.add("success");
                    feed.classList.add("success");
                    feed.innerHTML= "success"
                }
            }
            if(name == "precio"){
                if(value < 0){//minimo 2 caracteres
                    target.classList.add("error");//aca le agregar el fonde verde o rojo
                    feed.classList.add("error")
                    feed.innerHTML = "Colocar un valor"
                }else{
                    target.classList.add("success");
                    feed.classList.add("success");
                    feed.innerHTML= "success"
                }
            }
            
            if(name == "descripcion"){
                if(value.length <= 2 ){//minimo 2 caracteres
                    target.classList.add("error");//aca le agregar el fonde verde o rojo
                    feed.classList.add("error")
                    feed.innerHTML = "Colocar un valor"
                }else{
                    target.classList.add("success");
                    feed.classList.add("success");
                    feed.innerHTML= "success"
                }
            }
        }
        }else{
            input.onchange= (evento)=>{//
                const target = evento.target;
                const name = target.getAttribute("name")
                const field = target.parentElement;
                const feed = field.querySelector(".feed")

                target.classList.remove("error")
                feed.classList.remove("error")
                feed.innerHTML = null;
                
                if(name == "products"){
                    const files = target.files
                    if(files.length > 0){
                        target.classList.add("seccess")
                        feed.classList.add("success")
                        const img = document.createElement("img")
                        img.src = URL.createObjectURL(files[0])//preview
                        img.classList.add("preview")
                        feed.appendChild(img)
                        
                    }else{
                        target.classList.add ("error")
                        feed.classList.add("error")
                        feed.innerHTML = "Debesd Subir una imagen";                    
                    }
            }
        }
    }
    console.log(inputs);
    formProduct.onsubmit = (evento)=>{
        evento.preventDefault();
        const target = evento.target;
        const inputs = target.querySelectorAll("input.success")
        console.log(inputs)
       
        if(inputs.length >=3){
            alert("Subiendo Nueva Torta")//suit alert cambiar
            target.submit()
        }else{
            alert("completa todos los campos")
        }
    }
})
