import { ApiResponse, ApisauceInstance, create } from 'apisauce';
import { ApiConfig } from '../api-config';
import { Response, returnResponse } from '../api-utilities';

export class ApiAuth {
	apisauce: ApisauceInstance;

	constructor(config: ApiConfig, token: string | null) {
		this.apisauce = create({
			baseURL: config.url,
			timeout: config.timeout,
			headers: {
				Authorization: 'JWT ' + token,
			},
		});
	}

	async login(username: string, password: string): Promise<ApiResponse<any>> {
		const result: ApiResponse<any> = await this.apisauce.post('/login/', {
			username,
			password,
		});

		return result;
	}

	async fetchMe(): Promise<Response<any>> {
		const result: ApiResponse<any> = await this.apisauce.get('/me/');

		return returnResponse(result);
	}
}
