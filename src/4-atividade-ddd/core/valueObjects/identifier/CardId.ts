import { v4 as uuidv4 } from "uuid"
import BaseId from "./BaseId"

export default class CardId extends BaseId{
    
    private constructor(UUID: any) {
        super(UUID)
    }
    
    public CardId(UUID?: any) {
        if(UUID==null) {
            return new CardId(uuidv4())
        } else {
            return new CardId(UUID)
        }
    }
}