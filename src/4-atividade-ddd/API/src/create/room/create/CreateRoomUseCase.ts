import {CreateRoomIn} from "./CreateRoomIn"
import { CreateRoomOut } from "./CreateRoomOut"

export interface CreateRoomUseCase {
    execute(anIn: CreateRoomIn ): CreateRoomOut
}