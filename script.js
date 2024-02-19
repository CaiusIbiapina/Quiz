inicializando();

function inicializando() {
  //isLoading(true);
  const promessa = axios.get(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );
  promessa.then(carregarTodosQuizzes);
}

function carregarTodosQuizzes(resposta) {
  const dadosDoQuizz = resposta.data;

  for (let i = 0; i < 6; i++) {
    const todosQuizzes = document.querySelector(".quizzes");
    todosQuizzes.innerHTML += `
    <li class="quizz">
      <img
      class="banner"
      onclick="irParaQuizz()"
      src="${dadosDoQuizz[i].image}"
      />
    </li>`;
  }
  //isLoading(false);
}

function irParaQuizz() {
  alert("estou indo para o quizz!!");
}
