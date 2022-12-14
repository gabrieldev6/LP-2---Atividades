import AcessConfig, { Visibility } from "../../../../core/valueObjects/AcessConfig";
import {Room} from "../../../../core/entity/Room"
export class RetrieveRoomByIdOut {
    private link: String
    private status: String
    private visibility: Visibility
    constructor(link:String, status: String, visibility: Visibility) {
        this.link = link
        this.status = status
        this.visibility = visibility
    }

    static RetrieveRoomByIdOut(aRoom: Room) {
        return new RetrieveRoomByIdOut(
            aRoom.getRoomLink().getValue(),
            aRoom.getStatus().toString(),
            aRoom.getAcessConfig().getVisibility()
        )
    }
}