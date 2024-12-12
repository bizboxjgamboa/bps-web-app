import createSelectors from '@utils/createSelectors';
import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

interface MainLayoutState {
	isMainOnFullScreen: boolean;
	setFullScreen: (isFullScreen: boolean) => void;
	toggleFullScreen: () => void;
}

const useMainLayoutStoreBase = create<MainLayoutState>()(
	immer((set) => ({
		isMainOnFullScreen: false,
		setFullScreen: (isFullScreen: boolean) =>
			set((state) => {
				state.isMainOnFullScreen = isFullScreen;
			}),
		toggleFullScreen: () =>
			set((state) => {
				state.isMainOnFullScreen = !state.isMainOnFullScreen;
			}),
	}))
);

// Immer middleware
// zustand.docs.pmnd.rs/integrations/immer-middleware

export const useMainLayoutStore = createSelectors(useMainLayoutStoreBase);
