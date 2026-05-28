const fs = require('fs');
const http = require('http');
const { somar, saudacao } = require('./utils');

const resultadoSoma = somar(15, 25);
const mensagem = saudacao('Aluno FATEC');

const textoParaSalvar = `${mensagem}\nO resultado da soma é: ${resultadoSoma}`;

fs.writeFileSync('saida.txt', textoParaSalvar);
console.log('Arquivo "saida.txt" gerado com sucesso!');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    
    res.write(`
        <h1>${mensagem}</h1>
        <p><strong>Resultado processado e salvo:</strong> ${resultadoSoma}</p>
    `);
    res.end();
});

server.listen(3000, () => {
    console.log('Servidor rodando em: http://localhost:3000');
});
