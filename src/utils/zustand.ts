import {create} from 'zustand';

export const useModalState = create(set => ({
  visiable: false,
  handleModal: () =>
    set((state: {visiable: boolean}) => ({visiable: !state.visiable})),
  handleModalOpen: () => set({visiable: true}),
  handleModalClose: () => set({visiable: false}),
}));
