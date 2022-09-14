import { Produto, Type } from "./produto";

export default class Bermuda implements Produto{
    private tamanho:Number
    private cor:String
    private quantidade: Number
    private id: Number
    private valor: Number
    
    constructor(tamanho:Number, cor:String, quantidade:Number, id:Number, valor: Number) {
        this.tamanho = tamanho
        this.cor = cor
        this.quantidade = quantidade
        this.id = id
        this.valor = valor
    }

    public type(): Type {
        return Type.BERMUDA
    }
    
}