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
criaCartao(
  'História',
  'Quem descobriu o Brasil?',
  'Pedro Álvares Cabral.'
);

criaCartao(
  'Ciências',
  'Qual planeta é conhecido como Planeta Vermelho?',
  'Marte.'
);

criaCartao(
  'Matemática',
  'Qual o resultado de 9 + 6?',
  '9 + 6 = 15.'
);
