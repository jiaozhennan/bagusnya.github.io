import { Link } from 'react-router-dom';
import { useTranslation } from '@/lib/translate';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  const { language } = useLanguage();
  
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold flex items-center mb-6">
              <i className="fa-solid fa-building mr-2 text-amber-500"></i>
              <span>{language === 'zh' ? '优居地产' : 'Youju Real Estate'}</span>
            </div>
            <p className="text-blue-200 mb-6">
              {t('footer.slogan')}
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'fa-weixin', nameKey: 'common.wechat', color: '#07C160' },
                { icon: 'fa-weibo', nameKey: 'common.weibo', color: '#E6162D' },
                { icon: 'fa-qq', nameKey: 'common.qq', color: '#1DA1F2' },
                { icon: 'fa-youtube', nameKey: 'common.youtube', color: '#FF0000' }
              ].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-amber-600 transition-colors"
                  title={t(item.nameKey)}
                  style={{ backgroundColor: item.color }}
                >
                  <i className={`fa-brands ${item.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium mb-6">{t('footer.links.quick')}</h4>
            <ul className="space-y-3">
              {[
                { nameKey: 'common.home', path: '/' },
                { nameKey: 'common.properties', path: '#properties' },
                { nameKey: 'common.about', path: '#about' },
                { nameKey: 'common.contact', path: '#contact' },
                { nameKey: 'footer.links.faq', path: '/other' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.path} 
                    className="text-blue-200 hover:text-amber-500 transition-colors flex items-center"
                  >
                    <i className="fa-solid fa-angle-right mr-2 text-xs"></i>
                    {t(item.nameKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Property Types */}
          <div>
            <h4 className="text-lg font-medium mb-6">{t('footer.links.types')}</h4>
            <ul className="space-y-3">
              {[
                'property.features.luxury_apartment',
                'property.features.city_duplex',
                'property.features.garden_house',
                'property.features.townhouse',
                'property.features.villa',
                'property.features.commercial'
              ].map((key, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-blue-200 hover:text-amber-500 transition-colors flex items-center"
                  >
                    <i className="fa-solid fa-angle-right mr-2 text-xs"></i>
                    {t(key)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-medium mb-6">{t('contact.info.title')}</h4>
            <ul className="space-y-3">
              {[
                { icon: 'fa-map-marker-alt', text: '北京市朝阳区建国路88号优居大厦15层' },
                { icon: 'fa-phone', text: '400-888-9999' },
                { icon: 'fa-envelope', text: 'info@youjudichan.com' },
                { icon: 'fa-clock', text: '9:00 - 21:00 (周一至周日)' }
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <i className={`fa-solid ${item.icon} text-amber-500 mt-1 mr-3 w-4 text-center`}></i>
                  <span className="text-blue-200">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-300 text-sm mb-4 md:mb-0">
              &copy; {currentYear} {language === 'zh' ? '优居地产' : 'Youju Real Estate'}. {t('footer.copyright')}
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-blue-300 hover:text-amber-500 text-sm transition-colors">{t('footer.privacy')}</a>
              <a href="#" className="text-blue-300 hover:text-amber-500 text-sm transition-colors">{t('footer.terms')}</a>
              <a href="#" className="text-blue-300 hover:text-amber-500 text-sm transition-colors">{t('footer.sitemap')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}