import { Room } from "../entity/Room"
import RoomId from "./identifier/RoomId"

export interface RoomRepository {
    save(aRoom: Room): Room
    delete(anId: RoomId): void
    getById(anId: RoomId): Room
    getByLink(aLink: string): Room
}