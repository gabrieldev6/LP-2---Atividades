import { Type } from "./produto"
import Bermuda from "./produtoBermuda"
import Calca from "./produtoCalca"
import Camisa from "./produtoCamisa"

export default class ItensCarrinho {
    private quantidade_total: Number
    private valor_total: Number
    private tipoProduto: Type
    
    constructor(quantidade_total: Number, valor_total:Number, tipoProduto: Type) {
        this.quantidade_total = quantidade_total
        this.valor_total = valor_total
        this.tipoProduto = tipoProduto
    }

    QuantidadeTotal(): Number {
        return this.quantidade_total;
    }
    ValorTotal(): Number {
        return this.valor_total
    }
    
    TypeProduto(): Type {
        return this.tipoProduto
        
    }
    

}