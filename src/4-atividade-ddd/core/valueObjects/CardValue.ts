import ValueObject from "./valueObject"

export enum Enum {
    ACE=12,
    TWO=13,
    THREE=1,
    FOUR=2,
    FIVE=3,
    SIX=4,
    SEVEN=5,
    EIGHT=6,
    NINE=7,
    TEN=8,
    JACK=9,
    QUEEN=10,
    KING=11,
}

export class CardValue implements ValueObject {
    private value: Enum




    CardValue(value: number) {
        this.value = value
    }
    public getValue() {
        return this.value
    }
    public compare(c: CardValue) {
        return this.getValue() - c.getValue() 
    }
}
