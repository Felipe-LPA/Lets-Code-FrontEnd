/*1. Faça uma função que calcule o preço de um terreno que tenha 5m de frente, 
20m de profundidade e custe R$6.350/m2. */

// const CalcularArea = (frente, profundidade, precoPorMetroQuadrado) => {
//     return frente * profundidade * precoPorMetroQuadrado
// }

// console.log(CalcularArea(5, 20, 6350))

// Faça uma função que calcule a hipotenusa do triangulo retângulo, recebendo por
// parâmetro o valor dos seus catetos. Teste seus valores com lados de 9 e 16 (pitágoras).

// const CalcularHipotenusa = (cateto1, cateto2) => {
//   return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
// };

// console.log(CalcularHipotenusa(9, 12));

// Faça uma função que retorne se vale a pena ou não abastecer com álcool.
// A função deve receber como parâmetros o valor do álcool e da gasolina
// Valor do alcool precisa ser menor que 70%

// const alcoolOuGasolina = (alcool, gasolina) => {
//     if(alcool < gasolina * 0.7){
//         return "Alcool vale mais a pena"
//     } else {
//         return "Gasolina vale mais a pena"
//     }
// }

const alcoolOuGasolina = (alcool, gasolina) =>
  alcool < gasolina * 0.7
    ? `Pelo preço do Alcool: ${alcool} e Gasolina: ${gasolina}, Alcool vale mais a pena`
    : `Pelo preço do Alcool: ${alcool} e Gasolina: ${gasolina}, Gasolina vale mais a pena`

console.log(alcoolOuGasolina(69, 100));
