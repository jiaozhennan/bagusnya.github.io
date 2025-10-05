import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/translate';

export default function AboutSection() {
  const { t } = useTranslation();
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Professional%20real%20estate%20team%20in%20modern%20office%2C%20smiling%20and%20confident&sign=a448bc99d72b6c2ea09f5bcf2fdc5c1e" 
                  alt={t('about.title')} 
                  className="w-full h-auto"
                />
              </div>
              
              {/* Stats Card */}
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-lg max-w-xs">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mr-4">
                    <i className="fa-solid fa-trophy text-xl"></i>
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">{t('about.stats.leading')}</div>
                    <div className="text-sm text-gray-500">{t('about.stats.experience')}</div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-blue-900">98%</div>
                    <div className="text-xs text-gray-500">{t('about.stats.satisfaction')}</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-900">500+</div>
                    <div className="text-xs text-gray-500">{t('about.stats.transactions')}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">{t('about.title')}</h2>
            
            <p className="text-gray-600 mb-6">
              {t('about.desc1')}
            </p>
            
            <p className="text-gray-600 mb-8">
              {t('about.desc2')}
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                t('about.advantages.team'),
                t('about.advantages.projects'),
                t('about.advantages.service'),
                t('about.advantages.integrity')
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="mt-1 mr-3 text-amber-600">
                    <i className="fa-solid fa-check-circle"></i>
                  </div>
                  <div className="text-gray-600">{item}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105 shadow-md"
              >
                {t('about.cta.learn_more')}
              </a>
              <a 
                href="#properties" 
                className="bg-white border border-gray-300 hover:border-blue-900 text-gray-700 px-8 py-3 rounded-full font-medium transition-all"
              >
                {t('about.cta.view_projects')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}