<<<<<<<< HEAD:src/4-atividade-ddd/API/src/create/CreateRoomIn.ts
import { Room } from "../../../../4-atividade-ddd/core/entity/Room"
import { Player } from "../../../../4-atividade-ddd/core/entity/Player"
========
import { Player } from "../../../core/entity/Player"
import { Room } from "../../../core/entity/Room"
>>>>>>>> 9f2f71509f3c3c2faa437231c8ef4b8628db3cc3:src/4-atividade-ddd/app/room/create/CreateRoomIn.ts
import AcessConfig, { Visibility } from "../../../core/valueObjects/AcessConfig"

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