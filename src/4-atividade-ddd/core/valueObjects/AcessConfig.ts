import ValueObject from "./valueObject"


export default class AcessConfig implements ValueObject {
    private static readonly  MIN_PLAYERS = 4
    private readonly maxPlayer:number
    private readonly timeOfNextPlayer:number
    private readonly visibility: Visibility
    
    private constructor( maxPlayer:number, timeOfNextPlayer:number, visibility: Visibility) {

        this.maxPlayer = maxPlayer
        this.timeOfNextPlayer = timeOfNextPlayer
        this.visibility = visibility
    }
    
    static AcessConfig(maxPlayer: number, visibility: Visibility) {
        if(maxPlayer < AcessConfig.MIN_PLAYERS) {
            throw new Error("mas players, can't be less than four")
        }
        if(maxPlayer > 13) {
            throw new Error("max players, can't be greater than 13");
            
        }
        if(visibility == Visibility.PRIVATE) {
            return new AcessConfig(maxPlayer, 15, Visibility.PRIVATE)
        }
        if(visibility == Visibility.PUBLIC) {
            return new AcessConfig(maxPlayer, 15, Visibility.PUBLIC)
        }
        return new AcessConfig(maxPlayer, 15, Visibility.PUBLIC)
    }

    public getMinPlayers() {
        return AcessConfig.MIN_PLAYERS
    }
    public getMaxPlayer() {
        return this.maxPlayer
    }
    public getTimeOfNextPlayer() {
        return this.timeOfNextPlayer
    }
    public getVisibility() {
        return this.visibility
    }
    
    
    //link: https://github.com/ifce-prof-thiago/president-and-the-asshole/blob/main/core/src/main/java/president/domain/valueobjects/AccessConfig.java

}
export enum Visibility {
    PUBLIC, PRIVATE
}