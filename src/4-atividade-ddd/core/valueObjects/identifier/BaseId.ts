import ValueObject from "../valueObject";
import {v4 as uuidv4} from "uuid";
// import objectHash from "object-hash";

export default abstract class BaseId implements ValueObject {
    private readonly UUID: any = uuidv4()

    protected constructor(UUID: any) {
        this.UUID = UUID
    }

    public getValue() {
        return this.UUID.toString()
    }
    
    public equals(o: Object) {
        if(this == o) {
            return true
        }
        if(o ==null) { //this.getClass() != o.getClass()
            return false
        }
        return this.UUID.equals(this.UUID)
    }


    public hashCode() {
        return uuidv4(this.UUID)
    }
}