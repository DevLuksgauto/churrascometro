let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    let resultado = document.getElementById("resultado")

    let qntCarne = carnePP(duracao) * adultos + (carnePP(duracao) * criancas / 2);
    let qntCerveja = cervejaPP(duracao) * adultos;
    let qntBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) * criancas / 2);

    resultado.innerHTML = `<p>${Math.ceil(qntCarne / 1000)}Kg de carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntCerveja / 355)} Latas de Cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qntBebidas / 2000)} Garrafas de Bebidas</p>`
}

function carnePP(duracao){
    if (duracao >= 6)
    return 650
    else
    return 400
}
function cervejaPP(duracao){
    if (duracao >= 6)
    return 2500
    else
    return 1200
}
function bebidasPP(duracao){
    if (duracao >= 6)
    return 2000
    else
    return 1000
}