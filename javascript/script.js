function resposta(opcao){

    let resultado = document.getElementById("resultado")

    if(opcao == "c"){
        resultado.innerText ="parabens, resposta certa"
        resultado.style.color = "grey"
    }else{
        resultado.innerText =  "resposta errada"
        resultado.style.color = "red"
    }
}
