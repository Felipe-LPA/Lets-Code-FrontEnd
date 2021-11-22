import User from "./User.js";
export default class Passenger extends User {
  constructor({ name, age, cpf, balance }) {
    super({name, age, cpf});
    this.balance = balance;
  }
  confirmRun(price) {
    if (price <= 50) {
        console.log(`O(A) passageiro ${this.name} confirmou a corrida!`)
        return true;
    }
    console.log(`O(A) passageiro ${this.name} recusou a corrida!`)
    return false;
  }
}
