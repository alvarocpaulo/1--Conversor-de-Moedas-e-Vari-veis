let numeroSecreto = parseInt(Math.random() * 10);
let tentativas = 3;

while (tentativas > 0) {
   let chute = parseInt(prompt("Digite um número entre 0 e 10:"));

   if (numeroSecreto == chute) {
      alert("Acertou!")
      break;
   } else if (chute > numeroSecreto) {
      alert("O número secreto é menor.")
      tentativas = tentativas - 1;
   } else if (chute < numeroSecreto) {
      alert("O número secreto é maior.");
      tentativas = tentativas - 1;
   } else {
      alert("Errou. O número secreto é " + numeroSecreto + ".");
   }

   if (chute != numeroSecreto) {
      alert("Acabou o jogo. O número secreto é " + numeroSecreto + ".");
   }
}