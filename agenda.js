const formCpf = document.getElementById('form-cpf');
const consultaInfo = document.getElementById('consulta-info');
const dataConsulta = document.getElementById('data-consulta');

formCpf.addEventListener('submit', function(e) {
  e.preventDefault();

  // Gerar data aleatória
  const dias = Math.floor(Math.random() * 30) + 1;
  const meses = Math.floor(Math.random() * 12) + 1;
  const anos = 2025;
  const data = `${dias.toString().padStart(2, '0')}/${meses.toString().padStart(2, '0')}/${anos}`;

  dataConsulta.textContent = `Data: ${data}, às 14h00.`;
  consultaInfo.style.display = 'block';
});

const formOpcao = document.getElementById('form-opcao');
formOpcao.addEventListener('submit', function(e) {
  e.preventDefault();
  const opcao = document.getElementById('opcao').value;
  if(opcao) {
    alert(`Sua opção "${opcao}" foi registrada com sucesso!`);
  }
});
