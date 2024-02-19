inicializando();

function inicializando() {
  //isLoading(true);
  const promessa = axios.get(
    "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes"
  );
  promessa.then(carregarTodosQuizzes);
}

function quiz1() {
    const promessa = axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/1');
    promessa.then(exibirQuizz);
    promessa.catch(console.log('Deu erro'));

    for (i = 0; i < resposta.lenght; i++) {
        const quizz = document.querySelector('.quiz1');
        `
        <img src=''>
        <h1>O quão Potterhead é você?</h1>

        <div class="pergunta1">
            <h1 class='titulo-pergunta'>Em qual animal Olho-tonto transfigurou Malfoy?</h1>

            <div class='alternativas'>
                <div class='a'>
                    <img class='img1' src=''>
                    <h1>Gatineo</h1>
                </div>
                <div class='b'>
                    <img class='img1' src=''>
                    <h1>Ratata</h1>
                </div>
                <div class='c'>
                    <img class='img1' src=''>
                    <h1>Sapo Gordo</h1>
                </div>
                <div class='d'>
                    <img class='img1' src=''>
                    <h1>Mustela</h1>
                </div>
            </div>
            
        </div>`
    }
    
}

function exibirQuizz(resposta) {
    console.log(resposta.data);
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
