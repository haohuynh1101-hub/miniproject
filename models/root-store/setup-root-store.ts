import makeInspectable from 'mobx-devtools-mst';
import { persist } from 'mst-persist';
import localForage from 'localforage';

import { RootStoreModel, RootStore } from './root-store';
import { Environment } from '../environment';
import { GetServerSidePropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';

const ROOT_STATE_STORAGE_KEY = `ROOT`;

export async function createEnvironment(
	ctx?: GetServerSidePropsContext<ParsedUrlQuery>
): Promise<Environment> {
	const env = new Environment();
	await env.setup(ctx);
	return env;
}

/**
 * Setup the root state.
 */
export async function setupRootStore(
	snapshot?: Record<string, unknown>
): Promise<RootStore> {
	let rootStore: RootStore;
	let data: Record<string, unknown>;

	const env = await createEnvironment();
	try {
		data =
			snapshot || (await localForage.getItem(ROOT_STATE_STORAGE_KEY)) || {};
		rootStore = RootStoreModel.create(data, env);
	} catch (e) {
		rootStore = RootStoreModel.create({}, env);
	}

	persist(ROOT_STATE_STORAGE_KEY, rootStore, {
		storage: localForage,
		jsonify: false,
	});

	makeInspectable(rootStore);

	return rootStore;
}
