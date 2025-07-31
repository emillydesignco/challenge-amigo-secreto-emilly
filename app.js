let nomes = [];

function adicionarNome() {
  const input = document.getElementById('nameInput');
  const nome = input.value.trim();

  if (nome && !nomes.includes(nome)) {
    nomes.push(nome);
    atualizarLista();
    input.value = '';
  }
}

function atualizarLista() {
  const lista = document.getElementById('nameList');
  lista.innerHTML = '';
  nomes.forEach(nome => {
    const li = document.createElement('li');
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function sortearAmigoSecreto() {
  if (nomes.length < 2) {
    alert('Adicione pelo menos dois nomes!');
    return;
  }

  const embaralhado = [...nomes].sort(() => Math.random() - 0.5);
  const resultado = [];

  for (let i = 0; i < nomes.length; i++) {
    const amigo = i === nomes.length - 1 ? embaralhado[0] : embaralhado[i + 1];
    resultado.push(`${embaralhado[i]} → ${amigo}`);
  }

  exibirResultado(resultado);
}

function exibirResultado(lista) {
  const resultList = document.getElementById('resultList');
  resultList.innerHTML = '';
  lista.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    resultList.appendChild(li);
  });
}


