import Uber from "./class/Uber.js";
import Driver from "./class/Driver.js";
import Passenger from "./class/Passenger.js";

/*
A sua tarefa é recriar, mais ou menos, as funcionalidades do Uber (cadastrar user, iniciar corrida, finalizar corrida, pagar (de mentirinha) corrida etc.). Sugiro que separem em 3 classes:  

- Uber, que contém as regras de negócio (como , por ex., criar usuário, a fórmula de custo da corrida etc.)

- Motorista, que contem os métodos e propriedades de um motorista

- Passageiro, que contem os métodos e propriedades de um passageiro
*/
const uber = new Uber();
// criar motorista
const createDriver = () => {
  const driver = new Driver({
    name: "Artemis",
    age: 23,
    cpf: 89745635090,
    hasCar: true,
  });
  uber.createDriver(driver);
};
// criar passageiro
const createPassenger = () => {
  const passenger = new Passenger({
    name: "Diana",
    age: 25,
    cpf: 61958406023,
    balance: 100,
  });
  uber.createPassenger(passenger);
};
// criar corrida
const createRun = ({
  driver,
  passenger,
  passangerLocacation,
  driverLocation,
  positionPassengersArr,
  positionDriverArr,
}) => {
  console.log(`${passenger.name} solicitou uma corrida`);
  // Calculo inicial de preço e distancia da corrida
  const { price, distance } = uber.calculateRun(
    driverLocation,
    passangerLocacation
  );
  console.log(
    `A distancia calculada foi de ${distance}Km e o preço total foi de R$${price}`
  );
  // confirmações para dar continuidade(ou não) a corrida
  const runAccepted = runValidationUsers(passenger, driver, price, distance);
  if (!runAccepted) return;
  console.log(
    `O(A) motorista ${driver.name} chegou ao local do passageiro e o passageiro embarcou`
  );
  // inicio da corrida
  const runStarted = uber.startRun({ condition: true, driver: driver.name });
  if (!runStarted) return;
  // calculo do pagamento real da corrida
  const payout = uber.finishRun(
    passangerLocacation,
    driverLocation,
    driver.name
  );
  // subtração do valor de saldo do passageiro
  uber.passengers[positionPassengersArr].balance -= payout;
  console.log(`Pagamento efetuado, e o saldo atualizado do(a) passageiro(a) ${passenger.name} é igual a ${uber.passengers[positionPassengersArr].balance}`)
  console.log(uber);
};

const runValidationUsers = (passenger, driver, price, distance) => {
  // confirmação do passageiro após o mesmo verificar o preço
  const ConfirmationPassanger = passenger.confirmRun(price);
  if (!ConfirmationPassanger) return false;
  // confirmação do motorista após avaliar o preço e distancia
  const acceptedDriver = driver.acceptRun(distance, price);
  if (!acceptedDriver) return false;
  return true;
};

// execução das funções de
createDriver();
createPassenger();
console.log();
createRun({
  driver: uber.drivers[0],
  positionDriverArr: 0,
  passenger: uber.passengers[0],
  positionPassengersArr: 0,
  passangerLocacation: 30,
  driverLocation: 20,
});
