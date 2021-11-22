// console.log('hello world')
"use strict";
// Você foi contratado para criar um sistema de um banco, nesse banco podemos ter vários clientes, todo cliente possui um nome, rg, cpf, idade, número da conta e agência. Um cliente pode sacar, depositar e ver seu saldo. Identifique a/as classes presentes nessa descrição e implemente com seus métodos e atributos.

class Cliente {
  constructor(nome, rg, cpf, idade, conta, agencia) {
    this.nome = nome;
    this.rg = rg;
    this.cpf = cpf;
    this.idade = idade;
    this.conta = conta;
    this.agencia = agencia;
  }

  withdrawMoney() {
    console.log("O cliente depositou");
  }
  depositMoney() {
    console.log("O cliente sacou");
  }
  getBalance() {
    console.log("O cliente viu o saldo");
  }
}

const pessoa1 = new Cliente("josé", 131233241, 12343212343, 20, 1232, 3232);

// console.log(pessoa1);

// EXERCÍCIO : CRIE UM OBJETO QUE DESCREVA UMA PESSOA, ESSE OBJETO DEVE TER NOME, IDADE E UM MÉTODO QUE CUMPRIMENTE AS PESSOAS DIZENDO "OI, MEU NOME É {NOME} E EU TENHO {XX} ANOS"

const pessoa3 = {
    name:'Joao',
    idade:19,
    sayHello() {
        setTimeout(() => {
            console.log('Oi, meu nome é ' + this.name)
        }, 2000)
    }
}

pessoa3.sayHello()

class Pessoa {
	nome;
	idade;
	say() {
		setTimeout(console.log(`Oi, meu nome é ${this.nome} e eu tenho ${this.idade}`), 2000)
	}
}

const pessoa4 = new Pessoa();

pessoa4.say()