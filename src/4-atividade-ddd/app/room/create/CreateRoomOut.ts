import { Room } from "../../../core/entity/Room"

export class CreateRoomOut {
    private roomId: String
    private link: String
    private status: String

    private constructor(roomId: string, link: String, status: String) {
        this.roomId = roomId
        this.link = link
        this.status = status
        
    }

    static createRoomOut(aRoom: Room) {
        return new CreateRoomOut(aRoom.getRoomId().getValue(),
        aRoom.getRoomLink().getValue(),
        aRoom.getStatus().toString()
        )
        
    }



}