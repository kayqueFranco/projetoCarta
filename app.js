/**
 * Estudo do array 
 * Exemplo do uso em jogo de cartas
 * @author Kayque Franco
 */

function sortear () {
   
    let nipes = ["♥","♦","♣","♠"]
    let faces = ["A" ,"2","3","4","5","6","7","8","9","10","J","Q","K"]


    // gerando numeros aleatórios em JS (random)
    //Math,floor() converte para número inteiro
    //Math.random()*4 (gerando 4 número 0,1 , 2 ,3 )
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)]
    let facesSorteado= faces[Math.floor(Math.random() * 13)]

    //console.clear()
    //console.log(facesSorteado)
    //console.log(nipeSorteado)

    // Determina a cor com base no nipe sorteado
    let cor
    if(nipeSorteado === "♥" || nipeSorteado === "♦") {
        cor = "#ff0000"
    }
    else{
        cor = "#000"
    }
    


    // renderizndo do canto superior esquerdo
    document.getElementById('supEsq').innerHTML= `<div>${facesSorteado}</div> <div>${nipeSorteado}</div>`
    // a linha abaixo aplica o estilo de cor ao documento html 
    //identificado como 'supEsq'
    document.getElementById('supEsq').style.color = cor 

    // renderização do centro
    // Verificar o nipe sortiado e renderizar uma img ou o 
    //nipe e sua respectiva cor de acordo com a carta
    let cc = document.getElementById('centroCarta')
    if (facesSorteado === "J"){
        cc.innerHTML = `<img src ="img/valete.png">`
    }
    else if (facesSorteado === "Q") {
        cc.innerHTML = `<img src ="img/dama.png">`

    }
    else if (facesSorteado === "K"){
        cc.innerHTML = `<img src ="img/rei.png">`

    }
    else {
        cc.innerHTML = `${nipeSorteado}`
        cc.style.color = cor

    }

    //renderização do canto inferior direito
    document.getElementById('infDir').innerHTML= `<div>${facesSorteado}</div> <div>${nipeSorteado}</div>`
    document.getElementById('infDir').style.color = cor 


}