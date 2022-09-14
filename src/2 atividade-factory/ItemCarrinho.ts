import { Produto } from "./produto"

export default class ItensCarrinho {
    private quantidade_total: Number
    private valor_total: Number
    private tipoProduto: Produto
    
    constructor(quantidade_total: Number, valor_total:Number, tipoProduto: Produto) {
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
    
    TypeProduto(): Produto {
        return this.tipoProduto
        
    }
    

}