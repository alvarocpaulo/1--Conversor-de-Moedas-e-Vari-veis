"use strict";

var valorDolar = prompt("Qual o valor em dolar da conversão?");
parseFloat(valorDolar);
var valorReal = valorDolar * 5.5;
valorReal = valorReal.toFixed(2);
alert("O valor em real é de: R$" + valorReal);