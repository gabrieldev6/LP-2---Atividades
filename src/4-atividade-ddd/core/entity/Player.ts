import PlayerId from "../valueObjects/identifier/PlayerId";
import Card from "./Card";

export class Player {
    private playerId: PlayerId
    private nickname: String
    private readonly cards: Array<Card>
    private choiceCard: Card | null

    private constructor(playerId: PlayerId, nickname: String, cards: Array<Card>, choiceCard: Card | null) {
        this.playerId = playerId
        this.nickname = nickname
        this.cards = cards
        this.choiceCard = choiceCard
    }

    public static Player(nickname: String) {
        return new Player(PlayerId.playerId(), nickname, new Array<Card>(), null)
    }

    public setChoiceCard(card: Card) {
        this.choiceCard = card
    }

    public getPlayerId(): PlayerId {
        return this.playerId
    }
    public getNickName(): String {
        return this.nickname
    }
    public getCards(): Array<Card> {
        
        return this.cards
    }
    public getChoiceCard(){
        return this.choiceCard
    }

    public comprareTo(o: Player) {
        
        if(o.choiceCard !== null && this.choiceCard !== null) {
            return o.choiceCard.getCardValue().getValue() - this.choiceCard.getCardValue().getValue()
        }

        
    }

}