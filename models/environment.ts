import nookies from 'nookies';
import storage from '@utils/storage';
import { Api } from '@services/api';
import { APP_CONSTANTS } from '@constants';
import { DEFAULT_API_CONFIG } from '@services/api/api-config';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

export class Environment {
	constructor() {
		const token = storage.loadString(APP_CONSTANTS.AUTH);

		this.api = new Api(DEFAULT_API_CONFIG, token);
	}

	setup(ctx?: GetServerSidePropsContext<ParsedUrlQuery>): void {
		const token =
			storage.loadString(APP_CONSTANTS.AUTH) ??
			nookies.get(ctx)[APP_CONSTANTS.AUTH];
		if (token) {
			this.api.setAuth(token);
		}
	}

	/**
	 * Our api.
	 */
	api: Api;
}
