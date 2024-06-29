import { useTranslation } from 'react-i18next';

const LanguageSwitch = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="language-switch">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('bg')}>Български</button>
    </div>
  );
};

export default LanguageSwitch;