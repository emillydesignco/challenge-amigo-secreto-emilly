let listaAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") return;

    listaAmigos.push(nome);
    input.value = "";

    atualizarLista();
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach((amigo, index) => {
        const item = document.createElement("li");
        item.textContent = `${index + 1}. ${amigo}`;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos 2 amigos para sortear.");
        return;
    }

    let sorteio = [];
    let listaTemp = [...listaAmigos];

    listaAmigos.forEach((amigo) => {
        let possiveis = listaTemp.filter((nome) => nome !== amigo);

        if (possiveis.length === 0) {
            alert("Não foi possível sortear. Tente novamente.");
            return;
        }

        let sorteado = possiveis[Math.floor(Math.random() * possiveis.length)];
        sorteio.push({ amigo: amigo, sorteado: sorteado });

        listaTemp = listaTemp.filter((nome) => nome !== sorteado);
    });

    exibirResultado(sorteio);
}

function exibirResultado(sorteio) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    sorteio.forEach(par => {
        const item = document.createElement("li");
        item.textContent = `${par.amigo} → ${par.sorteado}`;
        resultado.appendChild(item);
    });
}

