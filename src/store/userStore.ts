import { create } from 'zustand';

interface UserState {
  email: string | null;
  userId: string | null;
  setUser: (email: string | null, userId: string | null) => void;
  clear: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  email: null,
  userId: null,
  setUser: (email, userId) => set({ email, userId }),
  clear: () => set({ email: null, userId: null }),
}));