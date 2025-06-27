// Função que cria um cartão interativo
function criaCartao(categoria, pergunta, resposta) {
  const container = document.getElementById('container');

  const article = document.createElement('article');
  article.className = 'cartao';

  const conteudo = document.createElement('div');
  conteudo.className = 'cartao__conteudo';

  const frente = document.createElement('div');
  frente.className = 'cartao__frente';
  frente.innerHTML = `<div><h3>${categoria}</h3><p>${pergunta}</p></div>`;

  const verso = document.createElement('div');
  verso.className = 'cartao__verso';
  verso.innerHTML = `<p>${resposta}</p>`;

  conteudo.appendChild(frente);
  conteudo.appendChild(verso);
  article.appendChild(conteudo);

  article.addEventListener('click', () => {
    article.classList.toggle('virado');
  });

  container.appendChild(article);
}

// Cartões criados diretamente aqui
criaCartao(
  'Tecnologia',
  'O que é um algoritmo?',
  'É uma sequência de passos para resolver um problema.'
);

criaCartao(
  'Cinema',
  'Quem dirigiu o filme "Titanic"?',
  'James Cameron.'
);

criaCartao(
  'Literatura',
  'Quem escreveu "Dom Casmurro"?',
  'Machado de Assis.'
);
