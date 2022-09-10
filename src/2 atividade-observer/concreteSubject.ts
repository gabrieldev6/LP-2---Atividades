import Observer from "./observers"
import { Subject } from "./subject"

export default class ConcreteSubject implements Subject{
    edicao: Number

    constructor(edicao: Number) {
        this.edicao = edicao
    }

    public getEdicao(): Number {
        return this.edicao
    }

    public attach(observer:Observer) {

    }
    public detach(observer:Observer) {

    }
    public notify() {

    }

}

