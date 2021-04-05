import { types, Instance, SnapshotOut, applySnapshot } from 'mobx-state-tree';
import { withEnvironment } from '@models/extensions/with-environment';
import { GetServerSidePropsContext } from 'next';
import { createEnvironment } from '@models';
import { ParsedUrlQuery } from 'querystring';
// import persist from 'mst-persist';
import makeInspectable from 'mobx-devtools-mst';

let store: RootStore | undefined;

// const ROOT_STATE_STORAGE_KEY = `___ROOT_STORE___`;

export const RootStoreModel = types
	.model({
		authStore: types.optional(types.string, 'good nha'),
	})
	.extend(withEnvironment);

export async function initializeStore(
	snapshot?: RootStoreSnapshot | null,
	ctx?: GetServerSidePropsContext<ParsedUrlQuery>
): Promise<RootStore> {
	const env = await createEnvironment(ctx);
	const _store = store ?? RootStoreModel.create({}, env);

	// If your page has Next.js data fetching methods that use a Mobx store, it will
	// get hydrated here, check `pages/ssg.js` and `pages/ssr.js` for more details
	if (snapshot) {
		applySnapshot(_store, snapshot);
	}

	// For SSG and SSR always create a new store
	if (typeof window === 'undefined') return _store;
	// Create the store once in the client
	if (!store) store = _store;

	// don't using caching with SSR
	// persist(ROOT_STATE_STORAGE_KEY, store, {
	// 	storage: localForage,
	// 	jsonify: false,
	// });

	makeInspectable(store);

	return store;
}

export type RootStore = Instance<typeof RootStoreModel>;

export type RootStoreSnapshot = SnapshotOut<typeof RootStoreModel>;

export type IStoreSnapshotOut = SnapshotOut<typeof RootStoreModel>;
