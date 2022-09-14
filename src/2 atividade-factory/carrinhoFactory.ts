import ItensCarrinho from "./ItemCarrinho";

export default interface CarrinhoFactory {
        create (tamanho:Number, 
                cor:String, 
                quantidade:Number, 
                id:Number, 
                tipo: String,
                valor: Number, 
                quantidade_total: Number, 
                valor_total:Number): ItensCarrinho
            
        
}