import {StoreApi, UseBoundStore} from 'zustand';

type WithSelectors<S> = S extends {getState: () => infer T}
	? S & {use: {[K in keyof T]: () => T[K]}}
	: never;

export const createSelectors = <
	T extends object,
	S extends UseBoundStore<StoreApi<T>>,
>(
	_store: S
): WithSelectors<S> => {
	const store = _store as WithSelectors<S>;
	store.use = Object.keys(_store.getState()).reduce(
		(selectors, key) => {
			(selectors as any)[key] = () => store((state) => state[key as keyof T]);
			return selectors;
		},
		{} as {[K in keyof T]: () => T[K]}
	);

	return store;
};

// https://zustand.docs.pmnd.rs/guides/auto-generating-selectors#create-the-following-function:-createselectors
export default createSelectors;
