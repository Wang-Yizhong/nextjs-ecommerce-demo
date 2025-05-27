import { create } from 'zustand';

type LanguageState = {
  language: string;
  setLanguage: (lang: string) => void;
};

export const useLanguageStore = create<LanguageState>((set) => ({
  language: 'de',
  setLanguage: (lang) => set({ language: lang }),
}));