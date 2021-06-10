window.addEventListener("load", init);
var alunos = [];

function init(){
   //Adiciona o evento no botao
   document.querySelector("#salvar").addEventListener("click", salvarAluno);
   document.querySelector("#ordenarNome").addEventListener("click", ordenarNome);
   document.querySelector("#ordenarNotas").addEventListener("click", ordenarNotas);
   document.querySelector("#maiorNota").addEventListener("click", maiorNota);
   document.querySelector("#media").addEventListener("click", media);
   document.querySelector("#aprovados").addEventListener("click", aprovados);
   //document.getElementById("salvar")
}

function salvarAluno(){
   //Pegar os dados do usuário
   let nome = document.querySelector("#nome").value;
   let nota = Number.parseFloat(document.querySelector("#nota").value);
   
   //Criar o objeto
   let aluno = {
      "nome": nome,
      "nota": nota
   };

   // let aluno2 = new Aluno(nome, nota);

   // let aluno3 = {};
   // aluno3.nome = nome;
   // aluno3.nota = nota;

   //Inserir no array
   alunos[alunos.length] = aluno;
   imprimeVetor(alunos);

   document.querySelector("#nome").value = "";
   document.querySelector("#nota").value = "";
}

function imprimeVetor(vetor){
   for(let i=0; i<vetor.length; i++){
      let aluno = vetor[i];
      console.log(`Aluno ${i}: ${aluno.nome} - Nota: ${aluno.nota}`);
   }
}

function ordenarNome(){
   let vetorOrdenadoNomes = alunos.sort(function (aluno1, aluno2){
      if(aluno1.nome.toLowerCase() > aluno2.nome.toLowerCase()) return 1;
      if(aluno1.nome.toLowerCase() < aluno2.nome.toLowerCase()) return -1;
      return 0;
   });
   console.log("Vetor Ordenado!")
   imprimeVetor(vetorOrdenadoNomes);
}

function ordenarNotas(){
   let vetorOrdenadoNotas = alunos.sort(function (a, b){
      if(a.nota > b.nota) return -1;
      if(a.nota < b.nota) return 1;
      return 0;
   })
   console.log("Vetor Ordenado (Notas)");
   imprimeVetor(vetorOrdenadoNotas);
}

function maiorNota(){//imprimir nome e nota do aluno com maior nota
   let alunoMaiorNota = alunos[0];
   alunos.forEach(function (elemento, index){
      if(elemento.nota > alunoMaiorNota.nota){
         alunoMaiorNota = elemento;
      }
   });
   console.log("A maior nota é do aluno "+alunoMaiorNota.nome+" com a nota "+alunoMaiorNota.nota);
}

function media(){//media de notas
   let soma = 0.0;
   for(let i=0; i<alunos.length; i++){
      aluno = alunos[i];
      soma = soma + aluno.nota;
   }
   let media = soma / alunos.length;
   console.log("A média das notas é "+media.toFixed(2));
}

function aprovados(){//maior ou igual a 6
   console.log("Alunos Aprovados!")
   for(let i=0; i<alunos.length; i++){
      aluno = alunos[i];
      if(aluno.nota >= 6.0){
         console.log(`Nome: ${aluno.nome} - Nota: ${aluno.nota}`);
         //Equivalente a:
         //console.log("Nome: " + aluno.nome + " - Nota: " + aluno.nota)
      }
   }
}









class Aluno{
   constructor(nome, nota){
      this.nome = nome;
      this.nota = nota;
   };
   
}