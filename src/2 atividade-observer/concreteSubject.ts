import Observer from "./observers"
import { Subject } from "./subject"

export default class ConcreteSubject implements Subject{
    private name: String
    public observers: Array<Observer>

    constructor(name: String) {
        this.name = name
    }

    public getName(): String {
        return this.name
    }

    public attach(observer: Observer) { //anexar
        
        this.observers.splice(0, 0, observer)
        //vai remover 0 elementos e apartir do indice 0 vai inserir um novo elemento 'observer'
        //ou seja ele vai sempre adicionar no começo da lista
    }

    public detach(observer:Observer) { //separar
        
        for(let c=0; c<=this.observers.length; c++) {
            if(this.observers[c] == observer) {
                this.observers.splice(c, 1)
            }
        }
        //vai percorrer a lista inteira ate encontrar o indice que o dado corresponde ao que ta sendo
        //procurado, depois disso remove o elemento da lista
        
        
    }
    public notify(msg: String):void {
         this.observers.forEach((observer: Observer)=> {
            observer.notify(msg)
         })   

        
    }

}

