import { useTranslations } from 'next-intl';

 function  $t () {
  const t = useTranslations();
  return (key: string) => t(key);
}
export default $t;