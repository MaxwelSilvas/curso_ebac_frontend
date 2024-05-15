// arrays de objetos
const alunos = [
    { nome: "Ana", nota: 7.5 },
    { nome: "João", nota: 6.0 },
    { nome: "Maria", nota: 5.2 },
    { nome: "Pedro", nota: 8.1 },
    { nome: "Carlos", nota: 9.4 },
];

function exibeAprovados() {
    const aprovados = alunos.filter((aluno) => aluno.nota >= 6);

    if (aprovados.length === 0) {
        console.log("Não há alunos aprovados.");
        return;
    }

    console.log("Alunos aprovados: ");
    for (const aluno of aprovados) {
        console.log(`→ ${aluno.nome}: ${aluno.nota}`);
    }
}

exibeAprovados();















