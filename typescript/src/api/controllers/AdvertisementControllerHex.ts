import { FrameworkResponse } from "../../framework/FrameworkResponse";
import { FrameworkRequest } from '../../framework/FrameworkRequest';
import { CreateAdvertisementCommandUseCase } from "../advertisement/application/CreateAdvertisementCommandUseCase";
import { CreateAdvertisementCommand } from "../advertisement/application/CreateAdvertisementCommand";

type AddAdvertisementRequest = FrameworkRequest & {
	body: {
		id: string;
		description: string;
		password: string;
	};
};
export default class AdvertisementControllerHex {
	public async addAdvertisement(req: AddAdvertisementRequest): Promise<FrameworkResponse> {
		const command = new CreateAdvertisementCommand(req.body);
		const useCase = new CreateAdvertisementCommandUseCase();
		await useCase.execute(command);

		return new FrameworkResponse(201);

	}

}
