'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export default function LanguageSelector() {
  const [lang, setLang] = useState(() => Cookies.get('locale') || 'de');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    Cookies.set('locale', newLang, { path: '/' });
    location.reload(); // 刷新页面触发 server component 重新渲染
  };

  return (
    <select value={lang} onChange={handleChange}>
      <option value="de">Deutsch</option>
      <option value="en">English</option>
    </select>
  );
}