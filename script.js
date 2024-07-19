// Método para encriptar el texto
function encriptar(texto) {
    const desplazamiento = 3; // Número de posiciones a desplazar
    let textoEncriptado = '';
    
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        
        if (char >= 'a' && char <= 'z') {
            // Calcular la nueva posición del carácter
            let charCode = texto.charCodeAt(i);
            let nuevoCodigo = ((charCode - 97 + desplazamiento) % 26) + 97;
            textoEncriptado += String.fromCharCode(nuevoCodigo);
        } else {
            textoEncriptado += char; // Si no es una letra minúscula, dejarla como está
        }
    }
    
    return textoEncriptado;
}

// Método para desencriptar el texto
function desencriptar(texto) {
    const desplazamiento = 3; // Número de posiciones a desplazar
    let textoDesencriptado = '';
    
    for (let i = 0; i < texto.length; i++) {
        let char = texto[i];
        
        if (char >= 'a' && char <= 'z') {
            // Calcular la nueva posición del carácter
            let charCode = texto.charCodeAt(i);
            let nuevoCodigo = ((charCode - 97 - desplazamiento + 26) % 26) + 97;
            textoDesencriptado += String.fromCharCode(nuevoCodigo);
        } else {
            textoDesencriptado += char; // Si no es una letra minúscula, dejarla como está
        }
    }
    
    return textoDesencriptado;
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.value=texto;
    //elementoHTML.innerHTML = texto;
    return;
}

 
function copiar(id){
   let blq = document.getElementById(id);
   let txt = blq.value;
   //si no se quiere incluir código html usar innerText
   let btn = event.target;
   let btnLbl = btn.innerText;
   navigator.clipboard.writeText(txt);
   btn.innerHTML = "Copiado";
   setTimeout(()=>btn.innerText = btnLbl, 1200);
}

function encriptarTexto(){
    let texto = document.getElementById("entradaTexto").value;
    console.log(texto);
    texto = encriptar(texto);
    document.getElementById("salidaTexto").value = texto;
    document.getElementById("botonCopiar").style.display = "block";
    document.getElementById("entradaTexto").value = "";
    ocultarImagenYTexto();
}

function desencriptarTexto(){
    let texto = document.getElementById("entradaTexto").value;
    console.log(texto);
    texto = desencriptar(texto);
    console.log(texto);
    document.getElementById("salidaTexto").value = texto;
    document.getElementById("entradaTexto").value = "";
    document.getElementById("botonCopiar").style.display = "block";
    ocultarImagenYTexto();
}

function limpiar(){
    document.getElementById("entradaTexto").value = "";
    document.getElementById("salidaTexto").value = "";
    document.getElementById("botonCopiar").style.display = "none";
    mostrarImagenYTexto();

}

function ocultarImagenYTexto(){
    document.getElementById("imagen").style.display = "none";
    document.getElementById("textoInformativo1").style.display = "none";
    document.getElementById("textoInformativo2").style.display = "none";
}

function mostrarImagenYTexto(){
    document.getElementById("imagen").style.display = "block";
    document.getElementById("textoInformativo1").style.display = "block";
    document.getElementById("textoInformativo2").style.display = "block";
}

document.getElementById("botonCopiar").style.display = "none";

document.getElementById('entradaTexto').addEventListener('input', function(event) {
    let input = event.target.value;
    let filteredInput = input.replace(/[^a-z ]/g, ''); // Permitir solo letras minúsculas y espacios
    if (input !== filteredInput) {
        event.target.value = filteredInput;
    }
});