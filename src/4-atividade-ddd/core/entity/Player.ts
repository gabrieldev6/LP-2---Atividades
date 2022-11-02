import * as Collections from "typescript-collections";

import PlayerId from "../valueObjects/identifier/PlayerId";
import Card from "./Card";

export default class Player {
    private playerId: PlayerId
    private nickname: String
    private readonly cards: Array<Card>
    private choiceCard: Card

    private constructor(playerId: PlayerId, nickname: String, cards: Array<Card>, choiceCard: Card) {
        this.playerId = playerId
        this.nickname = nickname
        this.cards = cards
        this.choiceCard = choiceCard
    }

    public static Player(nickname: String) {
        return new Player(Player.Player(), nickname, new Array<Card>() )
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
        return o.choiceCard.getCardValue().getValue() - this.choiceCard.getCardValue().getValue()
    }

}