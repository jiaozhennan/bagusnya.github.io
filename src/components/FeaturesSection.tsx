import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/translate';

export default function FeaturesSection() {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: 'fa-building',
      titleKey: 'features.location.title',
      descriptionKey: 'features.location.desc'
    },
    {
      icon: 'fa-shield-alt',
      titleKey: 'features.quality.title',
      descriptionKey: 'features.quality.desc'
    },
    {
      icon: 'fa-hand-holding-heart',
      titleKey: 'features.service.title',
      descriptionKey: 'features.service.desc'
    },
    {
      icon: 'fa-line-chart',
      titleKey: 'features.investment.title',
      descriptionKey: 'features.investment.desc'
    }
  ];
  
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{t('features.title')}</h2>
          <p className="text-gray-600">{t('features.subtitle')}</p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <i className={`fa-solid ${feature.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">{t(feature.titleKey)}</h3>
              <p className="text-gray-600">{t(feature.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{t('features.cta.ready')}</h3>
              <p className="text-blue-100 mb-8">
                {t('features.cta.desc')}
              </p>
              <a 
                href="#contact" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium inline-block w-fit transition-all transform hover:scale-105 shadow-lg"
              >
                {t('features.cta.contact')}
              </a>
            </div>
            <div className="h-64 lg:h-auto relative hidden lg:block">
              <img 
                src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Happy%20family%20in%20new%20home%2C%20smiling%20and%20relaxing%20in%20living%20room&sign=24fd5c26d6d07193e86212f3573fac18" 
                alt={t('features.cta.ready')} 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}