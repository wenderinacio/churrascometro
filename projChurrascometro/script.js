// Quantidade de carne = 400g por pessoa. Se + 6h = 650g
// Quantidade de cerveja = 1200ml por pessoa. Se + 6h = 2000ml
// Quantidade de refrigerante = 1000ml. Se + 6h = 1500ml
// Crianças valem por 0.5

const inputAdultos = document.getElementById('adultos');
const inputCriancas = document.getElementById('criancas');
const inputDuracao = document.getElementById('duracao');

const resultado = document.getElementById('resultado');

function carnePorPessoa(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervjaPorPessoa(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function refriPorPessoa(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}

function calcular(){
    const adultos = inputAdultos.value;
    const criancas = inputCriancas.value;
    const duracao = inputDuracao.value;
    
    const qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    const qtdTotalCerveja = cervjaPorPessoa(duracao) * adultos;
    const qtdTotalRefri = refriPorPessoa(duracao) * adultos + (refriPorPessoa(duracao) / 2 * criancas);

    resultado.innerHTML = `</br><h2 class="result-info">Você vai precisar de:</h2>`

    resultado.innerHTML += `
            <p>${qtdTotalCarne/1000} Kg de Carne</p>
    `

    resultado.innerHTML +=`
            <p>${Math.ceil(qtdTotalCerveja/350)} latas de Cerveja</p>
    `

    resultado.innerHTML +=`
            <p>${Math.ceil(qtdTotalRefri/2000)} garrafas de refrigerante</p>
    `
}