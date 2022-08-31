import { Type } from "./produto";

export default class Cammisa implements Type {
    private tamanho:Number
    private cor:String
    private quantidade: Number
    private id: Number
    private marca: String

    constructor(tamanho:Number, cor:String, quantidade:Number, id:Number, marca:String) {
        this.tamanho = tamanho
        this.cor = cor
        this.quantidade = quantidade
        this.id = id
        this.marca = marca

    }

    public type(): Type {
        return Type.CAMISA
    }
    
}