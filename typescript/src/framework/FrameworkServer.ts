import AdvertisementControllerHex from "../api/controllers/AdvertisementControllerHex";
import { FrameworkRequest } from "./FrameworkRequest";
import { FrameworkResponse } from "./FrameworkResponse";

export class FrameworkServer {

  private advertisementController = new AdvertisementControllerHex();

  private constructor() { }

  static async start(): Promise<FrameworkServer> {
    return Promise.resolve(new FrameworkServer())
  }

  async route(request: FrameworkRequest): Promise<FrameworkResponse> {

    const route = `${request.method}:${request.path}`

    switch (route) {
      case "POST:/advertisement":
        return await this.advertisementController.addAdvertisement(request)
      default:
        return Promise.resolve(new FrameworkResponse(404, { message: "Not Found" }))
    }

  }
}
