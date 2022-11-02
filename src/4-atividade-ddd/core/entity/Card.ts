import { Suit } from "../valueObjects/Suit"
import CardId from "../valueObjects/identifier/CardId"
import { CardValue } from "../valueObjects/CardValue"


export default class Card{
    private readonly cardId: CardId
    private readonly cardValue: CardValue
    private readonly suit: Suit

    private constructor(cardId: CardId, cardValue: CardValue, suit: Suit){
        this.cardId = cardId
        this.cardValue = cardValue
        this.suit = suit
    }

    public Card(cardValue: CardValue, suit: Suit) {
        
        return new Card(this.cardId.CardId(), cardValue, suit)
        // a funcao vai receber o nuero da carta e o brasao 'suit'
        // cria um novo objeto com UUID aleatorio, o valor e o brasao da carta
    }

    public getCardId(): CardId {
        return this.cardId
    }
    public getCardValue(): CardValue {
        return this.cardValue
    }
    public getSuit(): Suit {
        return this.suit
    }
}