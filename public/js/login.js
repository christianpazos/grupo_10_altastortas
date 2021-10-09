/*Capturamos el formulario*/
const formLogin = document.querySelector("form#loginUser");

let inputs = Array.from(formLogin.elements);
inputs = inputs.filter(elemento =>elemento.getAttribute("type")!=undefined);
console.log(inputs);
inputs.forEach(input=>{
    input.onblur= (evento)=>{
            const target = evento.target;
            const name = target.getAttribute("name")
            const value = target.value//devuelve el padre del input
            const field = target.parentElement;//padre osea el fieldset
            const feed = field.querySelector(".feed")
            target.classList.remove ("error")//reinicio los errores
            feed.classList.remove("error")//
            feed.classList.remove("success")
            feed.innerHTML = null;

            if(name == "email"){
                const regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
                
                if(!regex.test(value)){//minimo 2 caracteres
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
                const regex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
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
    formLogin.onsubmit = (evento)=>{
        inputs.pop()
        inputs.pop()
        console.log(formLogin);
        evento.preventDefault();
        const target = evento.target;
        const inputs = target.querySelectorAll("input.seccess")
        if(inputs.length <= 2){
            alert("completa todos los campos")
            target.submit()
        }
    }
})