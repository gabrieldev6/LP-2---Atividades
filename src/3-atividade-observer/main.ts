import ConcreteObserver from "./concreteObserver";
import ConcreteSubject from "./concreteSubject";

export function main() {
    let lp2 = new ConcreteSubject("Lp2")
    let programing = new ConcreteSubject("Programing")

    let melissa = new ConcreteObserver("Melissa")
    let lara = new ConcreteObserver("Lara")

    lp2.attach(melissa)
    lp2.attach(lara)

    lp2.notify("hey hi")
    
}
