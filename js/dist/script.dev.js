"use strict";

var numeroSecreto = 3;
var tentativas = 3;

while (tentativas > 0) {
  var chute = parseInt(prompt("Digite um número entre 0 e 10:"));

  if (numeroSecreto == chute) {
    alert("Acertou!");
    break;
  } else if (chute > numeroSecreto) {
    console.log("O número secreto é menor.");
    tentativas = tentativas - 1;
  } else if (chute < numeroSecreto) {
    console.log("O número secreto é maior.");
    tentativas = tentativas - 1;
  } else {
    console.log("Errou. O número secreto é " + numeroSecreto + ".");
  }
}