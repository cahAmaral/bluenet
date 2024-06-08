const form = document.querySelector("#form-cadastro");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const campoNome = form.querySelector("#campo_nome");
  const campoEmail = form.querySelector("#campo_email");
  const campoPerfil = form.querySelector("#campo_perfil");

  form.style.display = "none";

  const mensagem = `Obrigado por se cadastrar ${campoNome.value}! Fique de olho em seu email ${campoEmail.value} pois como estamos em fase de desenvolvimento, enviamos os convites aos usuários aos poucos! Seu perfil será: ${campoPerfil.value}`;

  const pMensagem = document.querySelector("#mensagem-cadastro");
  pMensagem.textContent = mensagem;
  pMensagem.style.display = "block";
});
