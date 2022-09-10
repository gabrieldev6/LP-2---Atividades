import ItensCarrinho from "./ItemCarrinho";
import Bermuda from "./produtoBermuda";
import Calca from "./produtoCalca";
export default interface CarrinhoFactory {
    create (
        tamanho:Number,
        cor:String,
        quantidade:Number,
        id:Number, 
        valor: Number,
        quantidade_total: Number, 
        valor_total:Number, 
        ): ItensCarrinho { 
    
        return new ItensCarrinho(
            quantidade_total, 
            valor_total, 
            new Bermuda(tamanho,cor, quantidade, id, valor))
    }
    create () :ItensCarrinho{
        tamanho:Number,
        cor:String,
        quantidade:Number,
        id:Number, 
        valor: Number,
        quantidade_total: Number, 
        valor_total:Number, 
        ): ItensCarrinho { 
    
        return new ItensCarrinho(
            quantidade_total, 
            valor_total, 
            new Calca(tamanho,cor, quantidade, id, valor))
    }
    
}

function 

function create () {

}