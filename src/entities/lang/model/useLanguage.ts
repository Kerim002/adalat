import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface LanguageStore {
  language: LanguageVariants;
  setLanguage: (language: LanguageVariants) => void;
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set) => ({
      language: "tm",
      setLanguage: (language) => set({ language }),
    }),
    {
      name: "language",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        language: state.language,
      }),
    }
  )
);
