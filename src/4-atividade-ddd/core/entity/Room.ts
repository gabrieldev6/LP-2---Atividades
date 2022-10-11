import RoomId from "../valueObjects/identifier/RoomId";
import PlayerId from "../valueObjects/identifier/PlayerId";
import RoomLink from "../valueObjects/RoomLink"; 
import AcessConfig from "../valueObjects/AcessConfig"

export default class Room {

    private readonly roomId: RoomId
    private ownerId: PlayerId
    private readonly roomLink: RoomLink
    private acessConfig: AcessConfig
    private players: Array<PlayerId>

    private constructor(roomId: RoomId, ownerId: PlayerId, roomLink: RoomLink, acessConfig: AcessConfig, players: Array<PlayerId>) {
        this.roomId = roomId
        this.ownerId = ownerId
        this.roomLink = roomLink
        this.acessConfig = acessConfig
        this.players = players
    }

    static Room(ownerId: PlayerId, acessConfig: AcessConfig) {
        let roomId = RoomId.RoomId()
        let roomLink = RoomLink.RoomLink()
        let players = new Array<PlayerId>()
        players.push(ownerId)

        return new Room(roomId, ownerId, roomLink, acessConfig, players)
    }

    public addPlayer(playerId:PlayerId) {
        if(this.players.length >= this.acessConfig.getMinPlayers()) {
            throw new Error("this room is full")
        }
        this.players.push(playerId)
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
export enum status {
    IN_LOBBY,
    SORTING,
    READY,
    ROUND,
    ROUND_FINISHED,
    FINISHED
}