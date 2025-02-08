const alunos = [
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 7 },
    { nome: "Carlos", nota: 9 },
    { nome: "Ana", nota: 4 },
    { nome: "Pedro", nota: 6 }
];

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6);

console.log(alunosAprovados);