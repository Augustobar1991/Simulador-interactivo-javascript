/*  Tiene 3 oportunidades para ingresar usuario y contraseña correctas, si no, se habilita 
    la funcion de emergencia teniendo el ingreso con la forma prompt, si no, se bloquea el acceso
    Si ingresa los datos correctos sale del bucle */

const array = [];
function Registrarte(){
    class User{
        constructor(nombre, password){
          this.nombre = nombre;
          this.password = password;
        }
      }
      
    let nombre = prompt("ingrese el nombre de usuario");
    let passwords = parseInt(prompt("ingrese el password"));
    let obj = new User(nombre, passwords);

    if(nombre=="") {
        alert("ingrese un usuario");
    }
    else if (passwords ==parseInt("")){
        alert("ingrese una contraseña");
    } 
    else{
        array.push(obj);
    }
console.log(array);

}

cont=0;
function Login(){ 
    let mensaje = [];

    let usuario=document.login.user.value; 
    let password=document.login.pass.value;

    let nom = array.find(name => name.nombre===usuario);

      if(cont<3){

        if (nom.nombre==usuario && usuario !=""){ 
 
            if(nom.password==password && password!=''){ 

                alert(`Felicidades ${usuario}, usted sera redirigido` );
                window.location.href ="https://media.istockphoto.com/vectors/congratulations-greeting-card-vector-lettering-vector-id1199025903"; 
                cont = 0;
            }
            else{
                mensaje.push(`Contraseña incorrecta, le quedan ${2-cont} intentos mas \n`);
                cont++;
            }
        } 
        else{
            mensaje.push(`Usuario incorrecto, le quedan ${2-cont} intentos mas \n`);
            cont++;
        }
        if (usuario == "") 
            {mensaje.push("El campo Usuario no puede estar vacio\n");}
        if (password == "") 
            {mensaje.push("El campo Clave no puede estar vacio");}
            
        if (mensaje.length > 0)
        {alert(mensaje.join("\n"));} 
    } 
    else if(cont=3){
        alert(`Tiene 2 posibilidades mas, no se equivoque!!!`); 
        for(i=0; i<2; i++){
            let usuario2 = prompt(`Ingresa el nombre de usuario`);
            if(nom.nombre==usuario2 && usuario2 !=""){
                let pass3 = parseInt(prompt("Ingresa la contraseña"));
                if(nom.password==pass3 && pass3!=''){
                    alert(`Felicidades ${usuario2}, usted sera redirigido`);
                    window.location.href ="https://media.istockphoto.com/vectors/congratulations-greeting-card-vector-lettering-vector-id1199025903";
                    break;
                }
                else{alert(`Contraseña incorrecta, le quedan ${1-i} intentos mas`);}
            }
            else{alert(`Usuario incorrecto, le quedan ${1-i} intentos mas`);}
        }
        if (i>1){alert(`Usuario bloqueado`);} 
    }
}


var text = ["Bienvenido a nuestra pagina", 
            "Inserte el Usuario y Contraseña correctas", 
            "Recuerde, si inserta mal, sera Bloqueado"]; 
var contar = 0;
var elem = document.getElementById("cambioDeTexto");
var inst = setInterval(cambiarText, 3000);

function cambiarText() {
    elem.innerHTML = text[contar];
    contar++;
    if (contar >= text.length) {
      contar = 0;
    }
}
