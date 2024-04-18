import { Advertisement } from "../domain/model/Advertisement";
import { AdvertisementPersistenceRepositorySqlite } from "../infrastructure/AdvertisementPersistenceRepositorySqlite";
import { CreateAdvertisementCommand } from "./CreateAdvertisementCommand";

export class CreateAdvertisementCommandUseCase {
    constructor() { }
    async execute(command: CreateAdvertisementCommand) {
        const advertisement = new Advertisement(command.id, command.description, command.password);
        const persistence = new AdvertisementPersistenceRepositorySqlite();
        await persistence.insert(advertisement);
    }
}