export interface AdvertisementCommandMessage {
  id: string;
  description: string;
  password: string;
}

export class CreateAdvertisementCommand {
  public readonly id: string;
  public readonly description: string;
  public readonly password: string;

  constructor(message: AdvertisementCommandMessage) {
    this.id = message.id;
    this.description = message.description;
    this.password = message.password;
  }

}