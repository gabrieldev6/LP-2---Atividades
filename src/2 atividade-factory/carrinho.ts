import CarrinhoFactory from "./carrinhoFactory"
import ItensCarrinho from "./ItemCarrinho"
import ItemCarrinho from "./ItemCarrinho"
import Bermuda from "./produtoBermuda"
import Calca from "./produtoCalca"


export default class Carrinho implements CarrinhoFactory{
    private dataHora: Date
    private idCliente:String
    private listaProduto: Array<ItemCarrinho>

    constructor(dataHora: Date, idCliente:String, listaProduto: Array<ItemCarrinho>) {
        this.dataHora = dataHora
        this.idCliente = idCliente
        this.listaProduto = listaProduto
    }

    public create(  tamanho: Number, 
                    cor: String, 
                    quantidade: Number, 
                    id: Number, 
                    tipo: String,
                    valor: Number, 
                    quantidade_total: Number, 
                    valor_total: Number): ItemCarrinho {
        
        return new ItensCarrinho(quantidade_total, valor_total, new Calca(tamanho, cor, quantidade, id, tipo, valor))
    }
    // public create ( tamanho:Number,
    //                 cor:String,
    //                 quantidade:Number,
    //                 id:Number, 
    //                 valor: Number,
    //                 quantidade_total: Number, 
    //                 valor_total:Number): ItemCarrinho {

    //     return new ItensCarrinho(quantidade_total, valor_total, new Bermuda(tamanho, cor, quantidade, id, valor))
    // }


    //gets
    public getDataHora(): Date {
        return this.dataHora
    }
    public getIdCliente():String {
        return this.idCliente
    }
    public getListaProduto(): Array<ItemCarrinho> {
        return this.listaProduto
    }

}