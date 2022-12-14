import { Room } from "../../../../4-atividade-ddd/core/entity/Room"

export class CreateRoomOut {
    roomId: string
    link: string
    status: string

    private constructor(aRoom: Room) {
        

        new CreateRoomOut(aRoom.getRoomId().getValue(),
                            aRoom.getRoomLink().getValue(),
                            aRoom.getStatus().name()
        )
    }


}