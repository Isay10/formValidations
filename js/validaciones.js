var usuario =[];
var contraseña=[];


/* const almacenarRegistro = () => {
    let valorInputs = document.getElementById("form-security");
    let InputUsuario = valorInputs[0].value;
    let InputContraseña = valorInputs[1].value;
    usuario.push(InputUsuario);
    contraseña.push(InputContraseña);
    console.log(`El Usuario es: ${usuario} y la contraseña es: ${contraseña}`);
    return false;
};
 */

const verificador = (usuario, contraseña) =>{
    console.log(`El usuario es ${usuario} y la contraseña es ${contraseña}`);
    return;
};

const almacenarRegistroUsuario = () => {
    let inputUsuario = document.getElementById("mail");
    let valorInputUsuario = inputUsuario.value
    usuario.push(valorInputUsuario);
    if (usuario.length >= 2){
        usuario.shift();
    }
    return;
};

const almacenarRegistroContraseña = () => {
    let inputContraseña = document.getElementById("password");
    let valorinputContraseña = inputContraseña.value
    contraseña.push(valorinputContraseña);
    if (contraseña.length >= 2){
        contraseña.shift();
    }
    verificador(usuario, contraseña)
    return;
};


const validarCampos = (usuario) => {
    const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPass =  /^[a-zA-Z\-]+$/;
    let input1 = document.getElementById("mail")
    let input2 = document.getElementById("password")
    regexMail.test(usuario)  ? input1.style.borderBottom = "2px solid lawgreen"  : input1.style.borderBottom = "2px solid red";
    regexPass.test(usuario) ? input1.style.borderBottom = "2px solid lawgreen"  : input1.style.borderBottom = "2px solid red";

    switch (ultimoValorInputUsuario) {
        case undefined:
            input1.style.borderBottom = "2px solid red";
            input2.style.borderBottom = "2px solid red";
        case null:
            input1.style.borderBottom = "2px solid red";
            input2.style.borderBottom = "2px solid red";          
        case "":
            input1.style.borderBottom = "2px solid red";
            input2.style.borderBottom = "2px solid red";
        break;
        default:
            return;    
        };
     return
};