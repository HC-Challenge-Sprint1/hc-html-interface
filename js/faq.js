document.addEventListener("DOMContentLoaded", function () {
  const perguntas = document.querySelectorAll(".faq-pergunta");

  perguntas.forEach((pergunta) => {
    pergunta.addEventListener("click", () => {
      const resposta = pergunta.nextElementSibling;

      // Fecha as outras, se quiser comportamento exclusivo
      perguntas.forEach(p => {
        if (p !== pergunta) {
          p.classList.remove("ativa");
          p.nextElementSibling.style.display = "none";
        }
      });

      // Alterna resposta atual
      const ativa = pergunta.classList.toggle("ativa");
      resposta.style.display = ativa ? "block" : "none";
    });
  });
});

function toggleMenu() {
    const menu = document.querySelector('nav ul');
    menu.classList.toggle('active');
}

