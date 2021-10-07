/*Capturamos el formulario*/
const formRegister = document.querySelector("#registerUser");

/* Hacemos un array con todos los elementos */
let inputs = Array.from(formRegister.elements);
inputs = inputs.filter(elemento =>elemento.getAttribute("type")!=undefined);
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
    
            if(name == "contraseña"){
                const regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
                //console.log(regex.test(value));
                const password = inputs.find(input=>input.getAttribute('name')== "password")
                if(!regex.test(value)){
                    target.classList.add("error");//aca le agregar el fonde verde o rojo
                    feed.classList.add("error")
                    feed.innerHTML = "Debe tener minimo  1 letra, 1numero y 1 caracter especial"
                }else{
                    target.classList.add("success");
                    feed.classList.add("success");
                    feed.innerHTML= "success"
                }
            }
    
    
            if(name == "email"){
                const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if(!regexEmail.test(String(value).toLocaleLowerCase())){
                    target.classList.add("error");//aca le agregar el fonde verde o rojo
                    feed.classList.add("error")
                    feed.innerHTML = "Debe ser un email"
                }else{
                    target.classList.add("success");
                    feed.classList.add("success");
                    feed.innerHTML= "success"
                }
            }
            //console.clear();
            //console.log(target, name, value);
            //bloque de validaciones
    
    
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
                
                if(name == "avatar"){
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
    

    formRegister.onsubmit = (evento)=>{
        evento.preventDefault();
        const target = evento.target;
        const inputs = target.querySelectorAll("input.success")
        console.log(inputs)
        if(inputs.length >=3){
            alert("Binvenido!!")//suit alert cambiar
            target.submit()
        }else{
            alert("completa todos los campos")
        }
    }
})


