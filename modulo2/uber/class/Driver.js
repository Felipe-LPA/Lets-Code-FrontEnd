import User from "./User.js";
// export default class Driver extends User{
//     constructor(nome){
//         super(nome)
//     }
// }

export default class Driver extends User {
  constructor({ name, age, cpf, hasCar }) {
    super({ name, age, cpf });
    this.hasCar = hasCar;
    this.available = true;
  }
  acceptRun(distance, price) {
    if (distance >= 10 && price > 20) {
        console.log(`O(A) motorista ${this.name} aceitou a corrida!`)
      this.available = false;
      return true;
    }
    console.log(`O(A) motorista ${this.name} recusou a corrida!`)
    return false;
  }
  
  
}
