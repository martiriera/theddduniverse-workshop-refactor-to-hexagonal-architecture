import { Advertisement } from "./Advertisement";

export interface AdvertisementPersistence {
  insert(advertisement: Advertisement): Promise<void>;
}