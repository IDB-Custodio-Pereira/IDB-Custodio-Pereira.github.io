const versiculos = [
  `"O Senhor é o meu pastor; nada me faltará." - Salmos 23:1`,
  `"Porque sou eu que conheço os planos que tenho para vocês..." - Jeremias 29:11`,
  `"Tudo posso naquele que me fortalece." - Filipenses 4:13`,
  `"Lâmpada para os meus pés é a tua palavra..." - Salmos 119:105`,
  `"Vinde a mim, todos os que estais cansados..." - Mateus 11:28`
];

let index = 0;
let intervalo = null;
let digitando = false;

function digitarVersiculo(texto, elemento) {
  if (digitando) return; // Evita múltiplas execuções simultâneas
  digitando = true;
  elemento.textContent = "";
  let i = 0;

  intervalo = setInterval(() => {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
    } else {
      clearInterval(intervalo);
      digitando = false;
    }
  }, 30);
}

function proximoVersiculo() {
  if (digitando) return;
  index = (index + 1) % versiculos.length;
  digitarVersiculo(versiculos[index], document.getElementById("versiculo-text"));
}

function versiculoAnterior() {
  if (digitando) return;
  index = (index - 1 + versiculos.length) % versiculos.length;
  digitarVersiculo(versiculos[index], document.getElementById("versiculo-text"));
}

document.addEventListener("DOMContentLoaded", () => {
  const versiculoText = document.getElementById("versiculo-text");
  digitarVersiculo(versiculos[index], versiculoText);

  document.getElementById("btn-anterior").addEventListener("click", versiculoAnterior);
  document.getElementById("btn-proximo").addEventListener("click", proximoVersiculo);
});
