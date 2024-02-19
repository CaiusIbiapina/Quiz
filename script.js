function criarQuizz() {
    alert('deu certo');
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