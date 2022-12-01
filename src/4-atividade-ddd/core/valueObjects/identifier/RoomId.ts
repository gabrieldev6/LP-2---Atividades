import BaseId from "./BaseId";
import {v4 as uuidv4} from "uuid";

export default class RoomId extends BaseId {
    private constructor(UUID: string) {
        super(UUID)
    }
    static RoomId(UUID?: string) {
        if(UUID==null) {

            return new RoomId(uuidv4())
        
        } else {
            return new RoomId(UUID)
        }
    }
}