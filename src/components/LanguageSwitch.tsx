import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
];

type LanguageDropdownProps = {
  onSelect?: () => void;
};

const LanguageDropdown = ({ onSelect }: LanguageDropdownProps) => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLanguageChange = (code: string) => {
    i18n.changeLanguage(code);
    
    // Update the URL to reflect the new language
    const pathSegments = location.pathname.split('/');
    if (languages.some((lang) => lang.code === pathSegments[1])) {
      pathSegments[1] = code;
    } else {
      pathSegments.splice(1, 0, code);
    }
    const newPath = pathSegments.join('/') || '/';
    navigate(newPath);
    
    onSelect?.();
  };

  const currentLanguage = i18n.language || 'en';

  return (
    <div className="grid grid-cols-2 gap-2">
      {languages.map((language) => {
        const isActive = currentLanguage === language.code;

        return (
          <button
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm ${
              isActive
                ? 'bg-gray-100 text-[#1f3059] font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageDropdown;