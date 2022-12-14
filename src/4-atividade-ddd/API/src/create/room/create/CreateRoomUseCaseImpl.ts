import { CreateRoomUseCase } from "./CreateRoomUseCase";
import { RoomRepository } from "../../../core/valueObjects/RoomRepository";
import { CreateRoomIn } from "./CreateRoomIn";
import { CreateRoomOut } from "./CreateRoomOut";

export class CreateRoomUseCaseImpl implements CreateRoomUseCase{
    private readonly repository: RoomRepository

    constructor (repository: RoomRepository) {
        this.repository = repository
    }
    execute(anIn: CreateRoomIn): CreateRoomOut {
        return CreateRoomOut.createRoomOut(this.repository.save(anIn.toRoom()))
    }
}