const alunos = [
    {nome: 'Ana', n1: 8.5, n2: 9.0},
    {nome: 'Carlos', n1: 6.0, n2: 7.5},
    {nome: 'Julia', n1: 9.2, n2: 8.5},
    {nome: 'Pedro', n1: 4.5, n2: 6.0},
    {nome: 'Elena', n1: 7.5, n2: 8.0 }
];

const calcularMedia = (n1, n2) => (n1 + n2) / 2;

const alunosComMedia = alunos.map(aluno => ({
  ...aluno,
  media: calcularMedia(aluno.n1, aluno.n2)
}));

const aprovados = alunosComMedia.filter(aluno => aluno.media >= 6);
const reprovados = alunosComMedia.filter(aluno => aluno.media < 6);

const somaMedias = alunosComMedia.reduce((acumulado, aluno) => acumulado + aluno.media, 0);
const mediaGeral = somaMedias / alunosComMedia.length;

console.log(`--- LISTA COMPLETA ---`);
alunosComMedia.forEach(aluno => {
    console.log(`Aluno: ${aluno.nome} | Média Final: ${aluno.media.toFixed(1)}`);
});

console.log(`\n--- Alunos aprovados ---`);
aprovados.forEach(a => console.log(`✅ O aluno ${a.nome} foi APROVADO com média ${a.media.toFixed(1)}`));
console.log(`\n--- Alunos reprovados ---`);
reprovados.forEach(r => console.log(`❌ O aluno ${r.nome} foi REPROVADO com média ${r.media.toFixed(1)}`));

console.log(`\n--- MÉDIA GERAL DA TURMA ---`);
console.log(`A média aritmética de todos os alunos é: ${mediaGeral.toFixed(2)}`);