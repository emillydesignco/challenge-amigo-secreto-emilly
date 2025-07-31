const amigos = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome !== '' && !amigos.includes(nome)) {
    amigos.push(nome);

    const lista = document.getElementById('listaAmigos');
    const item = document.createElement('li');
    item.textContent = nome;
    lista.appendChild(item);
    input.value = '';
  }
}

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Adicione pelo menos dois amigos para sortear!');
    return;
  }

  const sorteio = [...amigos];
  embaralhar(sorteio);

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    const sorteado = sorteio[i === sorteio.length - 1 ? 0 : i + 1];

    const item = document.createElement('li');
    item.textContent = `${amigo} vai tirar ${sorteado}`;
    resultado.appendChild(item);
  }
}



