import ValueObject from "./valueObject"


export default class AcessConfig implements ValueObject {
    private readonly minPlayer:number //readonly == final
    private readonly maxPlayer:number
    private readonly timeOfNextPlayer:number
    private readonly visibility: boolean
    
    private constructor(minPlayer:number, maxPlayer:number, timeOfNextPlayer:number, visibility: boolean) {
        this.minPlayer = minPlayer
        this.maxPlayer = maxPlayer
        this.timeOfNextPlayer = timeOfNextPlayer
        this.visibility = visibility
    }
    
    //TODO: testar se a funcao ta funcionando ok
    public AcessConfig(minPlayer: number, maxPlayer: number, visibility: boolean=true) {
        if(minPlayer < 4) {
            throw new Error("min players, can't be less than 4")
        }
        if(minPlayer < 13) {
            throw new Error("min players, can't be greater than + 13")
        }
        if(maxPlayer > 13) {
            throw new Error(`max players' can't be less than 13`)
        }
        if(maxPlayer < minPlayer){
            throw new Error(`max players can't be less than ${minPlayer}`)
        }


        return new AcessConfig(minPlayer, maxPlayer, 15, visibility)
    }

    public getMinPlayers() {
        return this.minPlayer
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