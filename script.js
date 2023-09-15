


let jogadores = []; // An array to store player objects

function exibirTela() {
    let elementoTabela = document.querySelector('#tabelaJogadores');
    elementoTabela.innerHTML = ''; // Clear the table

    for (let jogador of jogadores) {
        let newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${jogador.nome}</td>
            <td>${jogador.vitoria}</td>
            <td>${jogador.empate}</td>
            <td>${jogador.derrota}</td>
            <td>${jogador.pontos}</td>
            <td><button onclick="adicionarVitoria(${jogadores.indexOf(jogador)})">Vitória</button></td>
            <td><button onclick="adicionarEmpate(${jogadores.indexOf(jogador)})">Empate</button></td>
            <td><button onclick="adicionarDerrota(${jogadores.indexOf(jogador)})">Derrota</button></td>
            <td><button onclick="removerJogador(${jogadores.indexOf(jogador)})">Remover</button></td>
        `;
        elementoTabela.appendChild(newRow);
    }
}

function adicionarNovoJogador() {
    const newPlayerName = document.getElementById('newPlayerName').value;

    if (newPlayerName.trim() !== '') {
        const novoJogador = {
            nome: newPlayerName,
            vitoria: 0,
            empate: 0,
            derrota: 0,
            pontos: 0
        };

        jogadores.push(novoJogador);
        exibirTela();
    }
}

function adicionarVitoria(index) {
    jogadores[index].vitoria++;
    jogadores[index].pontos += 3;
    exibirTela();
}

function adicionarEmpate(index) {
    jogadores[index].empate++;
    jogadores[index].pontos++;
    exibirTela();
}

function adicionarDerrota(index) {
    jogadores[index].derrota++;
    exibirTela();
}

function removerJogador(index) {
    jogadores.splice(index, 1);
    exibirTela();
}