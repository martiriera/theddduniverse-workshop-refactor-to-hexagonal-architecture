import { createHash } from "crypto";
import { SqliteConnectionFactory } from "../../../framework/database/SqliteConnectionFactory";
import { Advertisement } from "../domain/model/Advertisement";
import { AdvertisementPersistence } from "../domain/model/AdvertisementPersistence";

export class AdvertisementPersistenceRepositorySqlite implements AdvertisementPersistence {
  async insert(advertisement: Advertisement): Promise<void> {
    const connection = await SqliteConnectionFactory.createClient();
    await connection.execute(
      'INSERT INTO advertisements (id, description, password) VALUES (?, ?, ?)',
      [advertisement.id, advertisement.description, createHash('md5').update(advertisement.password).digest('hex')]);
  }
}