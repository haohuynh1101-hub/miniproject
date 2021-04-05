import { ApisauceInstance, create } from 'apisauce';
import {
	ApiConfig,
	DEFAULT_API_CONFIG,
	DEFAULT_AUTH_API_CONFIG,
} from './api-config';
import { ApiAuth } from './auth-api';

export class Api {
	apisauce: ApisauceInstance;

	apiAuth: ApiAuth;

	config: ApiConfig;

	constructor(config: ApiConfig = DEFAULT_API_CONFIG, token: string | null) {
		this.config = config;
		this.apisauce = create({
			baseURL: this.config.url,
			timeout: this.config.timeout,
			headers: {
				Authorization: 'JWT ' + token,
			},
		});

		this.apiAuth = new ApiAuth(DEFAULT_AUTH_API_CONFIG, token);
	}

	setAuth(token: string): void {
		this.apisauce.setHeaders({
			Authorization: 'JWT ' + token,
		});

		this.apiAuth.apisauce.setHeaders({
			Authorization: 'JWT ' + token,
		});
	}
}
