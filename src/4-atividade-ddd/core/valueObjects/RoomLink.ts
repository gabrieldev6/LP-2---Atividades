import ValueObject from "./valueObject";
import {v4 as uuidv4} from "uuid";

export default class RoomLink implements ValueObject {
    private readonly UUID:any

    private constructor(UUID: any) {
        this.UUID = UUID
    }

    static RoomLink () {
        return new RoomLink(uuidv4())
    }

    public getValue(): String {
        return this.UUID.toString();
    }
}