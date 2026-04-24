const produtos = [
    {nome: 'Notebook', preco: 4500.00, categoria: 'Eletrônicos'},
    {nome: 'Monitor 24', preco: 890.00, categoria: 'Informática'},
    {nome: 'Cadeira Gamer', preco: 1200.00, categoria: 'Móveis'},
    {nome: 'Mouse Wireless', preco: 120.00, categoria: 'Eletrônicos'},
    {nome: 'Headset USB', preco: 350.00, categoria: 'Acessórios'}
]

const container = document.querySelector('#container');
const mostrarEletronicos = document.querySelector('.btn')
const limparCards = document.querySelector('.btn-limpar');
const btnAdicionar = document.querySelector('#btn-adicionar');

function atualizarTela() {
    container.innerHTML = '';
    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.categoria = produto.categoria;
        const precoFormatado = produto.preco.toFixed(2).replace('.', ',');
        card.innerHTML = `
            <h3>---${produto.nome}---</h3>
            <u><p><strong>Preço: </strong>R$<i> ${precoFormatado}</p></u></i>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
        `;
        container.appendChild(card);
    });
}
atualizarTela();

btnAdicionar.addEventListener('click', () => {
    const nome = document.querySelector('#nome').value;
    const preco = parseFloat(document.querySelector('#preco').value);
    const categoria = document.querySelector('#categoria').value;

    if (nome && preco && categoria) {
        produtos.push({ nome, preco, categoria });
        atualizarTela();
        document.querySelectorAll('input').forEach(i => i.value = '');
    } else {
        alert("Preencha todos os campos!");
    }
});

mostrarEletronicos.addEventListener('click', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (card.dataset.categoria !== 'Eletrônicos') {
      card.classList.toggle('escondido');
    }
  });
});

limparCards.addEventListener('click', () => {
    container.innerHTML = '';
});