const nomes = [];
const listaNomes = document.getElementById('listaNomes');
const input = document.getElementById('nomeInput');
const listaResultados = document.getElementById('listaResultados');

// Adiciona nome com Enter
input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    adicionarNome();
  }
});

function adicionarNome() {
  const nome = input.value.trim();

  if (nome === '') return;

  nomes.push(nome);
  atualizarLista();
  input.value = '';
  input.focus();
}

function atualizarLista() {
  listaNomes.innerHTML = '';
  nomes.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaNomes.appendChild(li);
  });
}

function sortear() {
  if (nomes.length < 2) {
    alert('Adicione pelo menos dois nomes!');
    return;
  }

  const sorteados = embaralhar([...nomes]);
  const resultados = [];

  for (let i = 0; i < nomes.length; i++) {
    const quemTirou = nomes[i];
    const quemFoiTirado = sorteados[i];
    if (quemTirou === quemFoiTirado) {
      // Embaralhar novamente se alguém tirar a si mesmo
      return sortear();
    }
    resultados.push(`${quemTirou} vai presentear ${quemFoiTirado}`);
  }

  mostrarResultados(resultados);
}

function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function mostrarResultados(resultados) {
  listaResultados.innerHTML = '';
  resultados.forEach(r => {
    const li = document.createElement('li');
    li.textContent = r;
    listaResultados.appendChild(li);
  });
}






