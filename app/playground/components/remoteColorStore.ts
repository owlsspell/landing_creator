/* eslint-disable no-unused-vars */
import { create } from 'zustand';

const useRemoteColorStore = create((set) => ({
  remoteColor: 'black',
  setRemoteColor: (remoteColor:string) => set(({ remoteColor })),
}));

export default useRemoteColorStore;

// import { StateCreator } from 'zustand';

// export interface RemoteColor {
//   remoteColor: string;
//   setRemoteColor: (remoteColor: string) => void;
//   getRemoteColor: () => string;
// }

// export const manageRemoteColor: StateCreator<RemoteColor> = (set, get) => ({
//   remoteColor: 'black',
//   setRemoteColor: (remoteColor: string) => set({ remoteColor }),
//   getRemoteColor: () => (get().remoteColor),
// });
