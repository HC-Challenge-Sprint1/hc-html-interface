const passos = [
  "1. Acesse o site com seu ID de paciente.",
  "2. Confirme seus dados e a especialidade médica.",
  "3. Escolha o melhor dia e horário disponível.",
  "4. Clique em 'Confirmar' e aguarde o e-mail com o link da consulta.",
  "5. No dia e hora marcados, acesse o link e inicie sua consulta."
];

const imagens = [
    "imagem1.jpg",
    "imagem2.jpg",
    "imagem3.jpg",
    "imagem4.jpg",
    "imagem5.jpg"
  ];

let passoAtual = 0;

function atualizarPasso() {
    const numero = passoAtual + 1;
    const texto = `Passo ${numero}: ${passos[passoAtual]}`;
    document.getElementById("passo-texto").textContent = passos[passoAtual];
    document.getElementById("imagem-passo").src = imagens[passoAtual];
}


function proximoPasso() {
    if (passoAtual < passos.length - 1) {
     passoAtual++;
    atualizarPasso();
     }
}

function passoAnterior() {
    if (passoAtual > 0) {
      passoAtual--;
      atualizarPasso();
    }
  }

window.onload = atualizarPasso;
