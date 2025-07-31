// Array para armazenar os nomes adicionados
const amigos = [];

// Função para adicionar amigo na lista
function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === '') {
    alert('Por favor, digite um nome válido.');
    return;
  }

  amigos.push(nome);
  atualizarLista();
  input.value = '';
  input.focus();
}

// Atualiza a lista de amigos exibida na tela
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach((amigo, index) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    li.setAttribute('aria-label', `Amigo número ${index + 1}: ${amigo}`);
    lista.appendChild(li);
  });

  // Limpa o resultado do sorteio ao atualizar a lista
  document.getElementById('resultado').textContent = '';
}

// Função para sortear um amigo secreto aleatoriamente
function sortearAmigo() {
  if (amigos.length === 0) {
    alert('Adicione pelo menos um amigo antes de sortear.');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  const resultado = document.getElementById('resultado');
  resultado.textContent = `O amigo secreto sorteado foi: ${amigoSorteado}`;
}
