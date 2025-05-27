'use client';

import { useLanguageStore } from '../../store/uselanguageStore';

export default function LanguageSelector() {
  const language = useLanguageStore((state) => state.language);
  const setLanguage = useLanguageStore((state) => state.setLanguage);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value);
  };

  return (
    <select value={language} onChange={handleChange}>
      <option value="de">Deutsch</option>
      <option value="en">English</option>
    </select>
  );
}