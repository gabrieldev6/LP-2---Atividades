import { Suit } from "../valueObjects/Suit"
import CardId from "../valueObjects/identifier/CardId"
import { CardValue } from "../valueObjects/CardValue"

export default class Card {
    private readonly cardId: CardId
    private readonly cardValue: CardValue 
    private readonly suit: Suit

    private constructor(cardId: CardId, cardValue: CardValue, suit: Suit){
        this.cardId = cardId
        this.cardValue = cardValue
        this.suit = suit
    }

    public static Card(cardValue: CardValue , suit: Suit) {
        let cardid = CardId.CardId()

        return new Card(cardid , cardValue, suit)
        // a funcao vai receber o nuero da carta e o brasao 'suit'
        // cria um novo objeto com UUID aleatorio, o valor e o brasao da carta
    }

    public getCardId(): CardId {
        return this.cardId
    }
    public getCardValue(){
        return this.cardValue
    }
    public getSuit(): Suit {
        return this.suit
    }

    public toString(){
        return this.cardValue + "of" + this.suit
    }

    public compareTo(o: Card){
         
        return o.getCardValue().getValue() - this.getCardValue().getValue()
            
    }
}