import RoomId from "../valueObjects/identifier/RoomId";
import Card from "./Card";
import RoomLink from "../valueObjects/RoomLink"; 
import AcessConfig from "../valueObjects/AcessConfig"
import { Player } from "./Player";
import PlayerId from "../valueObjects/identifier/PlayerId";
import { CardValue, EnumCardValue } from "../valueObjects/CardValue";

import * as Collections from 'typescript-collections';

export class Room {
    private readonly N_DECKS: number = 2
    private readonly roomId: RoomId
    private owner: Player
    private readonly roomLink: RoomLink
    private acessConfig: AcessConfig
    private players: Array<Player>
    private playersToChoice: Array<PlayerId>
    private cardsToChoice: Array<Card>

    private cardsToDeal: Array<Card>
    private status: status

    private constructor(roomId: RoomId, owner: Player, roomLink: RoomLink, acessConfig: AcessConfig, players: Array<Player>) {
        this.roomId = roomId
        this.owner = owner
        this.roomLink = roomLink
        this.acessConfig = acessConfig
        this.players = players

        this.cardsToChoice = new Array<Card>()
        this.cardsToDeal = new Array<Card>()

        initializePlayer(players)

        this.status = Status.WAITING
    }
    //TODO: resolver o problema de Deck e vim aqui para resolver o restante do problema
    public dealCards(): void {
        var qtyCardsOfRemove = (this.N_DECKS * 52) % this.players.length

        for(let i=0; i< this.N_DECKS; i++){
            for(let card in Deck) {
                if(card.getCardValue().equals(EnumCardValue.THREE) && qtyCardsOfRemove > 0) {
                    qtyCardsOfRemove--
                    continue
                }
                this.cardsToDeal.push(card)
            }
        }
        //TODO:resolver o problema do sort
        Array.sort(()=> {
            Math.random() -0.5 *2
        })
        var currentPlayer = 0
        //TODO: resolver o problema do get
        for(var card in this.cardsToDeal) {
            this.players.get(currentPlayer).addPlayer(card)
            currentPlayer = (currentPlayer + 1) % this.players.length
        }
    }


    static Room(owner: Player, acessConfig: AcessConfig) {
        let roomId = RoomId.RoomId()
        let roomLink = RoomLink.RoomLink()
        let players = new Array<PlayerId>()
        players.push(owner)

        return new Room(roomId, owner, roomLink, acessConfig, players)
    }

    public addPlayer(player:Player) {
        if(this.players.length >= this.acessConfig.getMinPlayers()) {
            throw new Error("this room is full")
        }
        this.players.push(player)
    }


    public getRoomId() {
        return this.roomId
    }
    public getOwnerId() {
        return this.ownerId
    }
    public getRoomLink() {
        return this.roomLink
    }
    public getAcessConfig() {
        return this.acessConfig
    }
    public getPlayers() {
        return this.players
    }
}
export enum Status {
    WAITING,
    IN_SORTING,
    THROWING_CARDS,
    IN_GAME,
    ROUND_FINISHED,
    GAME_FINISHED
}