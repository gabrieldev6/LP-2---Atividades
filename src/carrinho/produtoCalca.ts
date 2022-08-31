import { Type } from "./produto";


export default class calca implements Type{
    private tamanho:Number
    private cor:String
    private quantidade: Number
    private id: Number
    private tipo: String

    constructor(tamanho: Number, cor:String, quantidade: Number, id: Number, tipo:String) {
        this.tamanho = tamanho
        this.cor = cor
        this.quantidade = quantidade
        this.id = id
        this.tipo = tipo
    }
    public type() : Type {
        return Type.CALCA
    }
    
    
}