const prompt = require('prompt-sync')();

var alturas = []

// Implementar a entrada de dados
for(i = 0; i < 10; i++){
  var altura = alturas.push(parseFloat(prompt("Digte a altura do aluno " + i + " : ")));
}
for(j = 0; j < 10; j++){
    var cont = 0;
  for(f = 0; f < 10; f++){
    if(alturas[j] > alturas[f]){
      cont++;
    }
  }
    console.log("Aluno:", j ,"maior que",cont, "aluno(s)");
}



// Implementar o processamento de dados
// Fazer for dentro de for

// Implementar a saída de dados
