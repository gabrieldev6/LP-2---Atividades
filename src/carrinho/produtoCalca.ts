import { Type } from "./produto";


export default class Calca {
    private tamanho:Number
    private cor:String
    private quantidade: Number
    private id: Number
    private tipo: String
    private valor: Number

    constructor(tamanho: Number, cor:String, quantidade: Number, id: Number, tipo:String, valor: Number) {
        this.tamanho = tamanho
        this.cor = cor
        this.quantidade = quantidade
        this.id = id
        this.tipo = tipo
        this.valor = valor
    }
    public type() : Type {
        return Type.CALCA
    }
    
}