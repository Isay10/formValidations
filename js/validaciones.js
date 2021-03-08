var usuario =[];
var contraseña=[];

const almacenarRegistroUsuario = () => {
    let inputUsuario = document.getElementById("mail");
    let valorInputUsuario = inputUsuario.value
    usuario.push(valorInputUsuario);
    if (usuario.length >= 2){
        usuario.shift();
    }
    return usuario;
};

const almacenarRegistroContraseña = () => {
    let inputContraseña = document.getElementById("password");
    let valorinputContraseña = inputContraseña.value
    contraseña.push(valorinputContraseña);
    if (contraseña.length >= 2){
        contraseña.shift();
    }
    return contraseña;
};

const validarCamposNoVacios = () => {
    switch (usuario) {
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
            break;    
        };
}


const validarCampos = () => {
    let usuario = almacenarRegistroUsuario()
    let contraseña = almacenarRegistroContraseña()
    const inputUsuario = document.getElementById("mail")
    const InputContraseña = document.getElementById("password")
    const regexMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexPass =  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
    validarCamposNoVacios();
    regexMail.test(usuario)  ? inputUsuario.style.borderBottom ="2px solid lawngreen" : inputUsuario.style.borderBottom ="2px solid red";
    regexPass.test(contraseña) ? InputContraseña.style.borderBottom = "2px solid lawngreen"  : InputContraseña.style.borderBottom = "2px solid red";
     return
};