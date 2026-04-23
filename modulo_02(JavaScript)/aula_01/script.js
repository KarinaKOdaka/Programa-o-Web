const nome = "Maria";
const precoProduto = 200;
const percentualDesconto = 15;

const valorDesconto = (precoProduto * percentualDesconto) / 100;
const precoFinal = precoProduto - valorDesconto;

console.log(`Olá, ${nome}! O produto custa R$ ${precoProduto}`);
console.log(`Desconto de ${percentualDesconto}%: R$ ${valorDesconto}`);
console.log(`Preço final: R$ ${precoFinal}`);
console.log(`Preço acima de R$ 100? ${precoFinal > 100}`);
console.log(`Desconto válido? ${valorDesconto >= 0 && valorDesconto <= 100}`);