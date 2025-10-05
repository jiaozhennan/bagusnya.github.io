import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useLanguage, languageNames } from '@/contexts/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  // 切换语言
  const changeLanguage = (lang: string) => {
    setLanguage(lang as 'zh' | 'en' | 'id');
    setIsLanguageOpen(false);
  };
  
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-900 flex items-center">
              <i className="fa-solid fa-building mr-2 text-amber-600"></i>
              <span>{language === 'zh' ? '优居地产' : 'Youju Real Estate'}</span>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#" className="text-blue-900 hover:text-amber-600 font-medium transition-colors">{t('common.home')}</a>
              <a href="#properties" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">{t('common.properties')}</a>
              <a href="#features" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">{t('common.features')}</a>
              <a href="#about" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">{t('common.about')}</a>
              <a href="#contact" className="text-gray-600 hover:text-amber-600 font-medium transition-colors">{t('common.contact')}</a>
            </nav>
            
            {/* Language Selector */}
            <div className="relative ml-4">
              <button
                type="button"
                className="flex items-center text-gray-700 hover:text-amber-600 focus:outline-none"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <span className="mr-1">{languageNames[language as keyof typeof languageNames]}</span>
                <i className={`fa-solid fa-chevron-down text-xs transition-transform ${isLanguageOpen ? 'transform rotate-180' : ''}`}></i>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-1 z-10">
                  {Object.entries(languageNames).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => changeLanguage(code)}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        language === code 
                          ? 'bg-blue-100 text-blue-900' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Contact Button */}
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full font-medium transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              {t('common.consult_now')}
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Language Selector */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center text-gray-700 hover:text-amber-600 focus:outline-none"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
              >
                <span className="mr-1 text-sm">{languageNames[language as keyof typeof languageNames]}</span>
                <i className={`fa-solid fa-chevron-down text-xs transition-transform ${isLanguageOpen ? 'transform rotate-180' : ''}`}></i>
              </button>
              
              {isLanguageOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-white rounded-lg shadow-lg py-1 z-10 text-sm">
                  {Object.entries(languageNames).map(([code, name]) => (
                    <button
                      key={code}
                      onClick={() => changeLanguage(code)}
                      className={`block w-full text-left px-4 py-2 ${
                        language === code 
                          ? 'bg-blue-100 text-blue-900' 
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <button
              type="button"
              className="text-gray-600 hover:text-amber-600 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-white border-t",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="container mx-auto px-4 py-3 space-y-3">
          <a href="#" className="block py-2 text-blue-900 font-medium">{t('common.home')}</a>
          <a href="#properties" className="block py-2 text-gray-600 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>{t('common.properties')}</a>
          <a href="#features" className="block py-2 text-gray-600 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>{t('common.features')}</a>
          <a href="#about" className="block py-2 text-gray-600 hover:text-amber-600" onClick={() => setIsMenuOpen(false)}>{t('common.about')}</a>
          <a 
            href="#contact" 
            className="block py-2 text-center bg-amber-600 text-white rounded-lg font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            {t('common.consult_now')}
          </a>
        </div>
      </div>
    </header>
  );
}