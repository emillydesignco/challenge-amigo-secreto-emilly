const form = document.getElementById('form-adicionar');
const inputNome = document.getElementById('input-nome');
const listaNomes = document.getElementById('lista-nomes');
const btnSortear = document.getElementById('btn-sortear');
const resultado = document.getElementById('resultado');

let nomes = [];

form.addEventListener('submit', e => {
  e.preventDefault();

  const nome = inputNome.value.trim();

  if (!nome) {
    alert('Por favor, digite um nome válido.');
    return;
  }

  nomes.push(nome);
  atualizarLista();
  inputNome.value = '';
  inputNome.focus();

  btnSortear.disabled = nomes.length === 0;
});

function atualizarLista() {
  listaNomes.innerHTML = '';

  nomes.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    listaNomes.appendChild(li);
  });
}

btnSortear.addEventListener('click', () => {
  if (nomes.length === 0) {
    alert('Adicione pelo menos um nome antes de sortear.');
    return;
  }

  const indexSorteado = Math.floor(Math.random() * nomes.length);
  const nomeSorteado = nomes[indexSorteado];

  resultado.textContent = `O amigo secreto sorteado foi: ${nomeSorteado}`;
});