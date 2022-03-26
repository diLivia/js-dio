let arrayAlunos = [
  {
    nome: "Maria",
    nota: 1,
  },
  {
    nome: "Fernando",
    nota: 8,
  },
  {
    nome: "Gabriela",
    nota: 9,
  },
  {
    nome: "Letícia",
    nota: 4,
  },
  {
    nome: "Vitor",
    nota: 3,
  },
  {
    nome: "Carlos",
    nota: 10,
  },
];

function alunosAprovados(arrayAlunos, media) {
  let aprovados = [];
  
  for (let i = 0; i < arrayAlunos.length; i++) {

    let {nota, nome} = arrayAlunos[i];

      if(nota >= media){
          aprovados.push(nome)
      }
  }
  return aprovados;
}

function alunosReprovados(arrayAlunos, media){
    let reprovados = [];

    for (let i = 0; i < arrayAlunos.length; i++){
        
        let {nota, nome} = arrayAlunos[i];

        if (nota < media){
            reprovados.push(nome)
        }
    }
    return reprovados;
}

console.log(alunosAprovados(arrayAlunos, 5));
console.log(alunosReprovados(arrayAlunos, 5));