const passos = [
  "Acesse o <strong>aplicativo do HC</strong>.",
  "Faça seu login pelo <strong>gov.br</strong> (insira seu CPF e senha).",
  "No menu inferior, clique em <strong>Menu</strong> e selecione o painel <strong>Teleconsulta</strong>.",
  "Se você tiver algum agendamento, ele aprecerá na lista de <strong>Minhas Agendas</strong>.",
  "Selecione a consulta. Em seguida aparecerá os Termos de Uso, selecione <strong>Sim</strong>.",
  "Em seguida, você entrará na tela de vídeo. Mantenha o microfone e câmera ligados. Boa consulta!"
];

const imagens = [
    "passo-1.png",
    "passo-2.png",
    "passo-3.png",
    "passo-4.png",
    "passo-5.png",
    "passo-6.png"
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
