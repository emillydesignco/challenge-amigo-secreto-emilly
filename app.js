const listaAmigos = [];
const resultadoEl = document.getElementById("resultado");
const listaAmigosEl = document.getElementById("listaAmigos");
const inputAmigo = document.getElementById("amigo");

// Adiciona amigo ao clicar no botão ou ao pressionar Enter no input
function adicionarAmigo() {
  const nome = inputAmigo.value.trim();

  if (!nome) {
    alert("Por favor, insira um nome válido.");
    return;
  }

  if (listaAmigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    return;
  }

  listaAmigos.push(nome);
  atualizarLista();
  inputAmigo.value = "";
  inputAmigo.focus();
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

  const amigosSorteados = [...listaAmigos];
  embaralharArray(amigosSorteados);

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

    if (!temIgual) break;

    embaralharArray(amigosSorteados);
    tentativas++;
  }

  if (tentativas === maxTentativas) {
    alert("Não foi possível realizar o sorteio. Tente novamente.");
    return;
  }

  resultadoEl.innerHTML = "";
  for (let i = 0; i < listaAmigos.length; i++) {
    const p = document.createElement("p");
    p.textContent = `${listaAmigos[i]} vai presentear ${amigosSorteados[i]}`;
    resultadoEl.appendChild(p);
  }
}

// Evento para adicionar amigo ao pressionar Enter
inputAmigo.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // evita enviar formulário, se houver
    adicionarAmigo();
  }
});





