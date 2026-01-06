'use client';

import { useEffect } from 'react';

type SetHtmlLangProps = {
  lang: 'nl' | 'en';
};

export function SetHtmlLang({ lang }: SetHtmlLangProps) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}
