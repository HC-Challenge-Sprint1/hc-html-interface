const passos = [
  "Acesse o site com seu ID de paciente.",
  "Confirme seus dados e a especialidade médica.",
  "Escolha o melhor dia e horário disponível.",
  "Clique em 'Confirmar' e aguarde o e-mail com o link da consulta.",
  "No dia e hora marcados, acesse o link e inicie sua consulta."
];

const imagens = [
    "imagem1.jpg",
    "imagem2.jpg",
    "imagem3.jpg",
    "imagem4.jpg",
    "imagem5.jpg"
  ];

let indice = 0;

function atualizarPasso() {
  document.getElementById("texto-passo").innerHTML = `<span class="passo-negrito">Passo ${indice + 1}:</span><br>${passos[indice]}`;
  document.getElementById("imagem-passo").src = imagens[indice];
}


function proximoPasso() {
  indice = (indice + 1) % passos.length;
  atualizarPasso();
}


function passoAnterior() {
  indice = (indice - 1 + passos.length) % passos.length;
  atualizarPasso();
}

window.onload = atualizarPasso;
