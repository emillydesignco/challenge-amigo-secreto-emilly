const listaAmigos = [];
const resultadoEl = document.getElementById("resultado");
const listaAmigosEl = document.getElementById("listaAmigos");

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (!nome) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  // Evitar nomes duplicados
  if (listaAmigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    return;
  }

  listaAmigos.push(nome);
  atualizarLista();
  input.value = "";
  input.focus();
}

function atualizarLista() {
  listaAmigosEl.innerHTML = "";
  listaAmigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigosEl.appendChild(li);
  });
  resultadoEl.textContent = "";
}

// Função para embaralhar array (Fisher-Yates)
function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  // Criar uma cópia da lista para o sorteio
  const amigosSorteados = [...listaAmigos];

  // Embaralhar os nomes para distribuição aleatória
  embaralharArray(amigosSorteados);

  // Garantir que ninguém sorteie a si mesmo:
  // Se alguém sorteou o próprio nome, repetir o embaralhamento
  let tentativas = 0;
  const maxTentativas = 1000;
  while (tentativas < maxTentativas) {
    let temIgual = false;

    for (let i = 0; i < listaAmigos.length; i++) {
      if (listaAmigos[i] === amigosSorteados[i]) {
        temIgual = true;
        break;
      }
    }

    if (!temIgual) break; // Nenhum sorteou a si mesmo, pronto!

    // Se alguém sorteou a si mesmo, embaralhar de novo
    embaralharArray(amigosSorteados);
    tentativas++;
  }

  // Se não conseguiu evitar que alguém sorteasse a si mesmo depois de muitas tentativas
  if (tentativas === maxTentativas) {
    alert("Não foi possível realizar o sorteio. Tente novamente.");
    return;
  }

  // Mostrar resultado formatado: quem vai presentear quem
  resultadoEl.innerHTML = ""; // Limpar antes
  for (let i = 0; i < listaAmigos.length; i++) {
    const p = document.createElement("p");
    p.textContent = `${listaAmigos[i]} vai presentear ${amigosSorteados[i]}`;
    resultadoEl.appendChild(p);
  }
}




