let sala = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];
// 0 = Livre
// 1 = Ocupado

function reservar(linha, coluna, cadeira){
    // Verifica se a cadeira está livre
    if (sala[linha][coluna]==0){
        // Muda a Matriz para Ocupado
        sala[linha][coluna]==1
        // Muda a Cor da Cadeira para Vermelho
        cadeira.style.backgroundColor="red"
        document.getElementById("mensagem").innerText="Cadeira Reservada com Sucesso"
    }else{
        cadeira.style.backgroundColor="grey"
        document.getElementById("mensagem").innerText="Cadeira ocupada"
    }
}