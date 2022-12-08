import RoomId from "../valueObjects/identifier/RoomId";
import Card from "./Card";
import RoomLink from "../valueObjects/RoomLink"; 
import AcessConfig from "../valueObjects/AcessConfig"
import { Player } from "./Player";
import PlayerId from "../valueObjects/identifier/PlayerId";
import { CardValue, EnumCardValue } from "../valueObjects/CardValue";
import Deck from "../valueObjects/Deck";
import { Suit } from "../valueObjects/Suit";
import { equals } from "typescript-collections/dist/lib/arrays";

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
    private status: Status

    private constructor(roomId: RoomId, owner: Player, roomLink: RoomLink, acessConfig: AcessConfig, players: Array<Player>) {
        this.roomId = roomId
        this.owner = owner
        this.roomLink = roomLink
        this.acessConfig = acessConfig
        this.players = players

        this.cardsToChoice = new Array<Card>()
        this.cardsToDeal = new Array<Card>()

        this.initializePlayers(players)

        this.status = Status.WAITING
    }
    //TODO: resolver o problema de Deck e vim aqui para resolver o restante do problema
    public dealCards(): void {
        var qtyCardsOfRemove = (this.N_DECKS * 52) % this.players.length
        
        for(let i=0; i< this.N_DECKS; i++){
            for(let card of Deck.Deck().getCards()) {
                
                if(card.getCardValue().equals(EnumCardValue.THREE) && qtyCardsOfRemove > 0) {
                    qtyCardsOfRemove--
                    continue                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
                }
                this.cardsToDeal.push(card)
            }
        }
        //TODO:resolver o problema do sort
        Array.prototype.sort(()=> Math.random() -0.5 *2)

        var currentPlayer = 0
        
        //TODO: resolver o problema do get
        for(let card of this.cardsToDeal) {
            this.players.splice(currentPlayer)//.push(card)
            currentPlayer = (currentPlayer + 1) % this.players.length
        }
    }

    private initializePlayers(players: Array<Player>){
        this.playersToChoice = new Array<PlayerId>
            players.map(p => {
                p.getPlayerId()
            }
        )

    }

    private toSorting(): void{
        if(this.status != Status.WAITING) {
            throw new ErrorEvent("Room is not waiting")
        }
        this.shuffleCardsToChoice()
        this.status = Status.IN_SORTING
    }

    
    private shuffleCardsToChoice(): void{
        if(this.players.length < this.acessConfig.getMinPlayers()) {
            throw new Error("'min players' can't be less than four!")
        }
        for(let cardValue of CardValue.arguments) {
            this.cardsToChoice.push(Card.Card(cardValue, Suit.CLUBS))
        }
        this.cardsToChoice.sort(()=> Math.random() -0.5 *2 )

    }

    

    static Room(owner: Player, acessConfig: AcessConfig) {
        let roomId = RoomId.RoomId()
        let roomLink = RoomLink.RoomLink()
        let players = new Array<Player>()
        players.push(owner)

        return new Room(roomId, owner, roomLink, acessConfig, players)
    }

    public sortPlayers(): void{
        if(this.playersToChoice) {
            this.players.sort(()=> Math.random() -0.5 * 2)
            this.ToThorwing()
        }
    }

    public ToThorwing(): void{
        if(this.status  != Status.IN_SORTING && this.status != Status.ROUND_FINISHED) {
            throw new Error("Room is not in sorting or round finished");
        }
    }

    public toInGame(){
        if(this.status != Status.THROWING_CARDS) {
            throw new Error("Room is not throwing cards")
        }
        this.status = Status.IN_GAME;
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
        return this.owner
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