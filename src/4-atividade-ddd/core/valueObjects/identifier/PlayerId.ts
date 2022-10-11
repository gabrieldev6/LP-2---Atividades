import BaseId from "./BaseId";
import {v4 as uuidv4} from "uuid";

export default class PlayerId extends BaseId {
    
    private constructor(UUID?: any) {
        super(UUID)
    }
    // static create():PlayerId {

    // }
    static playerId(UUID?: any) {

        if(UUID==null || UUID ==undefined) {
            return new PlayerId(uuidv4())
        } else {
            return new PlayerId(UUID)
        }
    }
}