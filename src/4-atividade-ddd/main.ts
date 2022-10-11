import Room from "./core/entity/Room"
import AcessConfig from "./core/valueObjects/AcessConfig"
import PlayerId from "./core/valueObjects/identifier/PlayerId"

export function main() {
        
        console.log(Room.Room(PlayerId.playerId() , AcessConfig.AcessConfig(5, 13)))
}