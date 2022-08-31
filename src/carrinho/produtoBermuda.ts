import { Type } from "./produto";

export default class Bermuda implements Type {
    private tamanho:Number
    private cor:String
    private quantidade: Number
    private id: Number

    constructor(tamanho:Number, cor:String, quantidade:Number, id:Number) {
        this.tamanho = tamanho
        this.cor = cor
        this.quantidade = quantidade
        this.id = id

    }

    public type(): Type {
        return Type.BERMUDA
    }
    
}