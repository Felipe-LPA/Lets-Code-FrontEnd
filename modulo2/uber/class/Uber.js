

export default class Uber {
    constructor(){
        this.drivers = [];
        this.passengers = [];
    }
    
    createDriver(driver){
        this.drivers.push(driver)
        console.log('Motorista criado')
    }
    
    createPassenger(passenger){
        this.passengers.push(passenger)
        console.log('Passageiro criado')
    }
    calculateRun(pointA, pointB){
        const diff = Math.abs(pointA - pointB)
        return {
            distance: diff,
            price: diff * 4.2     
        }
    }
    startRun({driver, condition}){
        if(condition){
            console.log(`O(A) motorista ${driver} iniciou a corrida`)
            return true;
        }
        this.available = true
        console.log(`O(A) motorista ${driver} cancelou a corrida`)
        return false
    }
    finishRun(startPoint, finishPoint, driver){
        const {price} = this.calculateRun(startPoint, finishPoint)
        console.log(`O(A) motorista ${driver} finalizou a corrida`)
        return price
    }
}

