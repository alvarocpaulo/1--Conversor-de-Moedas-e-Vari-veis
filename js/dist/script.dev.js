"use strict";

//let operacao = parseFloat(prompt("Digite 1 para fazer uma divisão, 2 para multiplicar, 3 para soma, 4 para subtração:"))
var primeiroValor = parseFloat(prompt("Digite o primeiro valor:"));
var segundoValor = parseFloat(prompt("Digite o segundo valor:"));
resultado = primeiroValor + segundoValor;
document.write("<h1>" + primeiroValor.toFixed(2) + " + " + segundoValor.toFixed(2) + " = " + resultado + "</h1>");