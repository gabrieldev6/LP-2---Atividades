import PlayerId from "../valueObjects/identifier/PlayerId";
import Card from "./Card";

export default class Player implements Comparable<Player> {
    private playerId: PlayerId
    private nickname: String
    private cards: Array<Card>
    private choiceCard: Card

    private constructor(playerId: PlayerId, nickname: String, cards: Array<Card>, choiceCard: Card) {
        this.playerId = playerId
        this.nickname = nickname
        this.cards = cards
        this.choiceCard = choiceCard
    }

    public static Player(nickname: String) {
        return new Player(Player.Player, nickname, new Array<Card>(), null)
    }
}