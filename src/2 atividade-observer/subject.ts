import Observer from "./observers";

export interface Subject {
    
    attach(observer:Observer): void //anexar

    detach(observer: Observer): void //separar
    
    notify(): void //notificar
}