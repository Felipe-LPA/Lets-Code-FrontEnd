// var bar = [5,4,3,2,1]
// var foo = [6,7,8]
// bar.pop()
// bar = bar.concat(foo)
// bar.sort()
// console.log(bar)

// var a = 10;

// (function(x){
//     console.log(x + a)
//     return x + a;
// })(a)

function Pessoa(nome, idade, estado){
    this.nome = nome;
    this.idade = idade;
    this.estado = estado;
}

var pessoa1 = new Pessoa('a', 30, 'a')
var pessoa2 = new Pessoa('b', 20, 'b')

pessoa1.altura = 1.8
Pessoa.prototype.sexo = 'M'

console.log(pessoa1.altura)
console.log(pessoa2.altura)
console.log(pessoa1.sexo)
console.log(pessoa2.sexo)