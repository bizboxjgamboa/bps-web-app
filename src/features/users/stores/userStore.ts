import createSelectors from '@utils/createSelectors';
import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

interface UserState {
	isDialogOpen: boolean;
	setIsDialogOpen: (isFullScreen: boolean) => void;
	toggleIsDialogOpen: () => void;
}

const useUserStoreBase = create<UserState>()(
	immer((set) => ({
		isDialogOpen: false,
		setIsDialogOpen: (isFullScreen: boolean) =>
			set((state) => {
				state.isDialogOpen = isFullScreen;
			}),
		toggleIsDialogOpen: () =>
			set((state) => {
				state.isDialogOpen = !state.isDialogOpen;
			}),
	}))
);

export const useUserStore = createSelectors(useUserStoreBase);
