inicializando();

function inicializando() {
  //isLoading(true);
  const promessa = axios.get(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );
  promessa.then(carregarTodosQuizzes);
}

function irParaQuizz(id) {
  const promessa = axios.get(
    `https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/${id}`
  );
  promessa.then(exibirQuizz);
  promessa.catch(console.log("Deu erro"));
}

function exibirQuizz(resposta) {
  console.log(resposta.data);
  const dados = resposta.data;

  const quizz = document.querySelector(".principal");
  console.log(dados.questions[0].answers);
  quizz.innerHTML = 
  `
    <img src=${dados.image}>
        <h1>${dados.title}</h1>

        <div class="pergunta1">
            <h1 class='titulo-pergunta'>${dados.questions[0].title}</h1>

            <div class='alternativas'>
                <div class='a'>
                    <img class='img1' src='${dados.questions[0].answers[0].image}'>
                    <h1>${dados.questions[0].answers[0].text}</h1>
                </div>
                <div class='b'>
                    <img class='img1' src='${dados.questions[0].answers[1].image}'>
                    <h1>${dados.questions[0].answers[1].text}</h1>
                </div>
                <div class='c'>
                    <img class='img1' src='${dados.questions[0].answers[2].image}'>
                    <h1>${dados.questions[0].answers[2].text}</h1>
                </div>
                <div class='d'>
                    <img class='img1' src='${dados.questions[0].answers[3].image}'>
                    <h1>${dados.questions[0].answers[3].text}</h1>
                </div>
            </div>
            
        </div>`;
}

function carregarTodosQuizzes(resposta) {
  const dadosDoQuizz = resposta.data;

  for (let i = 0; i < 6; i++) {
    const todosQuizzes = document.querySelector(".quizzes");
    todosQuizzes.innerHTML += `
    <li class="quizz">
      <img
      class="banner"
      onclick="irParaQuizz(${dadosDoQuizz[i].id})"
      src="${dadosDoQuizz[i].image}"
      />
    </li>`;
  }
  //isLoading(false);
}
