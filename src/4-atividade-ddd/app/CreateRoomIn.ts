import { Player } from "../core/entity/Player"
import { Room } from "../core/entity/Room"
import AcessConfig, { Visibility } from "../core/valueObjects/AcessConfig"

export class CreateRoomIn {
    nickName: string
    visibility: Visibility
    maxPlayers: number

    private constructor(nickname:string, visibility, maxPlayers:number){
        this.nickName = nickname
        this.visibility = visibility
        this.maxPlayers = maxPlayers
    }
    
    static toRoom(nickname:string, visibility: Visibility, maxPlayers: number): Room{
        return Room.Room(Player.Player(nickname), AcessConfig.AcessConfig(maxPlayers, visibility))
    }


}