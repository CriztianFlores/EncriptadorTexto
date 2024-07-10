// Llamada
document.addEventListener("DOMContentLoaded", () => {
  
  // Declaración de variables
  const textoIngresado = document.getElementById("textoIngresado");
  const textoFinal = document.getElementById("textoFinal");

  // Encriptar texto
  document.getElementById("botonEncriptar").addEventListener("click", () => {
    const textoEncriptado = encriptarTexto(textoIngresado.value);
    textoFinal.textContent = textoEncriptado;
  });

  // Desencriptar texto
  document.getElementById("botonDesencriptar").addEventListener("click", () => {
    const textoDesencriptado = desencriptarTexto(textoIngresado.value);
    textoFinal.textContent = textoDesencriptado;
  });

  // Copiar texto
  document.getElementById("botonCopiar").addEventListener("click", () => {
    navigator.clipboard
      .writeText(textoFinal.textContent)
      .then(() => {
        alert("¡El texto se ha copiado!");
      })
      .catch((err) => {
        console.error("Se produjo una falla al copiar: ", err);
      });
  });
});

// Declaración de funciones
function encriptarTexto(text) {
  return text
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
};

function desencriptarTexto(text) {
  return text
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
};