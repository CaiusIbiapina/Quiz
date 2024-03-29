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
  quizz.innerHTML = `
  <div class= "containerTelaQuizz">
    <img src=${dados.image} class="imagemCapaTelaQuizz"/>
        <h1 class="tituloCapaTelaQuizz">${dados.title}</h1>
        <div class="perguntas"></div>`;

  for (let i = 0; i < dados.questions.length; i++) {
    const perguntas = document.querySelector(".perguntas");
    perguntas.innerHTML += `<div class="pergunta1">
            <h1 class='titulo-pergunta'>${dados.questions[i].title}</h1>

            <div class='alternativas'>
                <div class='a'>
                    <img class='img1' src='${dados.questions[0].answers[0].image}'/>
                    <h1>${dados.questions[i].answers[0].text}</h1>
                </div>
                <div class='b'>
                    <img class='img1' src='${dados.questions[0].answers[1].image}'/>
                    <h1>${dados.questions[i].answers[1].text}</h1>
                </div>
                <div class='c'>
                    <img class='img1' src='${dados.questions[0].answers[2].image}'/>
                    <h1>${dados.questions[i].answers[2].text}</h1>
                </div>
                <div class='d'>
                    <img class='img1' src='${dados.questions[0].answers[3].image}'/>
                    <h1>${dados.questions[i].answers[3].text}</h1>
                </div>
            </div>
            
        </div>`;
  }
  quizz.innerHTML += `</div>`;
}

function carregarTodosQuizzes(resposta) {
  const dadosDoQuizz = resposta.data;
  console.log(dadosDoQuizz);
  for (let i = 0; i < 6; i++) {
    const todosQuizzes = document.querySelector(".quizzes");
    todosQuizzes.innerHTML += `
    <li class="quizz">
      <img
      class="banner"
      onclick="irParaQuizz(${dadosDoQuizz[i].id})"
      src="${dadosDoQuizz[i].image}"
      />
      <p>${dadosDoQuizz[i].title}</p>
    </li>`;
  }
  //isLoading(false);
}
