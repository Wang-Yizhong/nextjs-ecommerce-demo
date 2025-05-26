'use client';

import { createContext, useContext } from 'react';

const TranslationContext = createContext<Record<string, string>>({});

export function TranslationProvider({
  children,
  translations
}: {
  children: React.ReactNode;
  translations: Record<string, string>;
}) {
  return (
    <TranslationContext.Provider value={translations}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useT() {
  const translations = useContext(TranslationContext);
  return (key: string) => translations[key] || key;
}