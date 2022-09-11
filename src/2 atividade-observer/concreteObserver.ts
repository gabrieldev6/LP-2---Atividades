import Observer from "./observers";

export default class ConcreteObserver implements Observer{
    private name:String

    constructor(name:String) {
        this.name = name
    }

    publish(msg:String): void {
        console.log(`${this.name} recebeu: ${msg}`)
    }
}