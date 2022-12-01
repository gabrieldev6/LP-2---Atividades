import Card from "../entity/Card"
import ValueObject from "./valueObject"
import { CardValue } from "./CardValue"
import { Suit} from "../valueObjects/Suit"
//TODO: resolver esse problema
export default class Deck implements ValueObject{
    private readonly cards: Array<Card>[]

    private constructor() {
        this.cards = new Card[52]

        for(let card in CardValue) {
            for(let suit in Suit) {
                this.cards[card.ordinal() + suit.ordinal() * 13] = Card.Card(card, suit)
            }
        }

        
    }
    public static Deck(){
        return new Deck()
    }
    public getCards(): Array<Card>[] {
        return this.cards
    }
}