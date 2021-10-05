/*Capturamos el formulario*/
const formLogin = document.querySelector('#loginUser');

let inputs = Array.from(formLogin.elements);
inputs = inputs.filter(elemento =>elemento.getAttribute("type")!=undefined);
inputs.forEach(input=>{
    input.onblur= (evento)=>{
        const target = evento.target;
            const name = target.getAttribute("nombre")
            const value = target.value//devuelve el padre del input
            const field = target.parentElement;//padre osea el fieldset

            target.classList.remove ("error")//reinicio los errores
            feed.classList.remove("error")
            feed.innerHTML = null;

            if(name == "nombre"){
                if(value.length < 2 ){//minimo 2 caracteres
                    target.classList.add("error");//aca le agregar el fonde verde o rojo
                    feed.classList.add("error")
                    feed.innerHTML = "Debe tener miimo 2 caracteres"
    
                }else{
                    target.classList.add("success");
                    feed.classList.add("success");
                    feed.innerHTML= "success"
                }
            }

            if(name == "contraseña"){
                const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
                console.log(regex.test(value));
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
    }
    
    formElement.onsubmit = (evento)=>{
        evento.preventDefault();
        const target = evento.target;
        const inputs = target.querySelectorAll("input.seccess")
        if(inputs.length >= 5){
            alert("completa todos los campos")
            target.submit()
        }
    }
})