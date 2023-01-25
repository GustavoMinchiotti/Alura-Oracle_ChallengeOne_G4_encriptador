// document.getElementById("encriptar").onclick = function () {
//   document.getElementById("procesar").innerText = "hiciste click inner text";
//   document.getElementById("procesar").innerHTML = "hiciste click html"; // tiene prioridad sobre inner text

//   console.log("mensaje 00001"); //solo para probar la consola...
// };
// document.getElementById("copiar").onmouseover = function () {
//   document.getElementById("respuesta").style.backgroundColor = "red"; // con el botón copiar cambio el color de fondo de respuesta solo al pasar el mouse por encima
// };

// document.getElementById("copiar").onmouseleave = function () {
//   document.getElementById("respuesta").style.backgroundColor = "white"; // al sacar el mouse vuelve a blanco
// };

//* ayuda de alura

const textArea = document.querySelector(".text-Area");
const mensaje = document.querySelector(".respuesta");

// let matriz = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"],];
// console.table(matriz);

function btnEncriptar() {
  //*                                             //* -- con esta función llamo a la func. encriptar al presionar el botón
  const encriptado = encriptar(textArea.value); //* -- en la variable guardo el valor de la textArea
  mensaje.value = encriptado; //* -- se guarda en "mensaje" el retorno
  textArea.value = ""; //* -- limpia el campo luego del return
  mensaje.style.backgroundImage = "none"; //* -- limpia la imagen de fondo
}

function encriptar(mensajeEncriptar) {
  let matriz = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  mensajeEncriptar = mensajeEncriptar.toLowerCase();
  for (let i = 0; i < matriz.length; i++) {
    if (mensajeEncriptar.includes(matriz[i][0])) {
      //los parámetros son la llave a verificar -- método includes /* Checking if the message contains the letter. */
      mensajeEncriptar = mensajeEncriptar.replaceAll(
        matriz[i][0],
        matriz[i][1]
      ); //? le digo reemplaza los 0 por 1 ----- representa la posición en la matriz
    }
  }
  return mensajeEncriptar;
}

//! ---------------------------------------   desencriptar -----------------------  igual anterior salvo que inverso

function btnDesencriptar() {
  const encriptado = desEncriptar(textArea.value);
  mensaje.value = encriptado;
  textArea.value = "";
}

function desEncriptar(mensajeDesEncriptar) {
  let matriz = [
    ["e", "enter"], 
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  mensajeDesEncriptar = mensajeDesEncriptar.toLowerCase();
  for (let i = 0; i < matriz.length; i++) {
    if (mensajeDesEncriptar.includes(matriz[i][1])) {
      mensajeDesEncriptar = mensajeDesEncriptar.replaceAll(
        matriz[i][1],
        matriz[i][0]
      ); //? le digo reemplaza los 1 por 0
    }
  }
  return mensajeDesEncriptar;
}
