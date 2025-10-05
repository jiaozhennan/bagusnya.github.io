import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from '@/lib/translate';

// 房产数据 - 多语言版本
const properties = [
  {
    id: 1,
    title: {
      zh: "海景豪华公寓",
      en: "Seaview Luxury Apartment",
      id: "Apartemen Mewah Pemandangan Laut"
    },
    location: {
      zh: "滨海新区",
      en: "Binhai New Area",
      id: "Kawasan Baru Binhai"
    },
    price: {
      zh: "1,200万",
      en: "¥12M",
      id: "¥12M"
    },
    area: "180㎡",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Luxury%20apartment%20with%20ocean%20view%2C%20modern%20interior%20design&sign=e0ebcbf16395731283a9660023d223f2",
    featured: true
  },
  {
    id: 2,
    title: {
      zh: "城市中心复式",
      en: "City Center Duplex",
      id: "Duplex Pusat Kota"
    },
    location: {
      zh: "市中心",
      en: "City Center",
      id: "Pusat Kota"
    },
    price: {
      zh: "850万",
      en: "¥8.5M",
      id: "¥8.5M"
    },
    area: "150㎡",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Modern%20duplex%20apartment%20in%20city%20center%2C%20high%20ceiling&sign=7b3da0c5107641780655f4047cbe973f",
    featured: true
  },
  {
    id: 3,
    title: {
      zh: "花园洋房",
      en: "Garden Villa",
      id: "Villa Taman"
    },
    location: {
      zh: "高新区",
      en: "High-tech Zone",
      id: "Zona Teknologi Tinggi"
    },
    price: {
      zh: "980万",
      en: "¥9.8M",
      id: "¥9.8M"
    },
    area: "220㎡",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape_16_9&prompt=Garden%20villa%20with%20private%20yard%2C%20modern%20architecture&sign=b41b7f665cfb146ba7892ea653caa7a1",
    featured: false
  }
];

export default function PropertyShowcase() {
  const [activeProperty, setActiveProperty] = useState(properties[0]);
  const { t, language } = useTranslation();
  
  // 获取多语言属性值
  const getPropertyValue = (property: any, field: string) => {
    const value = property[field];
    return typeof value === 'object' && value !== null && value[language] 
      ? value[language] 
      : value;
  };
  
  return (
    <section id="properties" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">{t('property.showcase.title')}</h2>
          <p className="text-gray-600">{t('property.showcase.subtitle')}</p>
        </div>
        
        {/* Property Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Property Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src={activeProperty.image} 
              alt={getPropertyValue(activeProperty, 'title')} 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {activeProperty.featured && (
              <div className="absolute top-4 left-4 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-full">{t('property.featured')}</div>
            )}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <h3 className="text-2xl font-bold text-white">{getPropertyValue(activeProperty, 'title')}</h3>
              <p className="text-gray-200 flex items-center mt-1">
                <i className="fa-solid fa-map-marker-alt mr-2"></i> {getPropertyValue(activeProperty, 'location')}
              </p>
            </div>
          </div>
          
          {/* Property Details */}
          <div>
            <div className="flex space-x-4 mb-8 overflow-x-auto pb-2 scrollbar-hide">
              {properties.map((property) => (
                <button
                  key={property.id}
                  onClick={() => setActiveProperty(property)}
                  className={`flex-shrink-0 px-6 py-3 rounded-full transition-all ${
                    activeProperty.id === property.id
                      ? 'bg-blue-900 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {getPropertyValue(property, 'title')}
                </button>
              ))}
            </div>
            
            <div className="mb-8">
              <div className="text-3xl font-bold text-blue-900 mb-2">{getPropertyValue(activeProperty, 'price')}</div>
              <div className="text-gray-600">{t('property.price.from')}</div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
              <div className="bg-gray-50 p-4 rounded-xl">
                <i className="fa-solid fa-ruler-combined text-amber-600 text-xl mb-2"></i>
                <div className="font-medium">{activeProperty.area}</div>
                <div className="text-xs text-gray-500">{t('property.area')}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <i className="fa-solid fa-bed text-amber-600 text-xl mb-2"></i>
                <div className="font-medium">{activeProperty.bedrooms}</div>
                <div className="text-xs text-gray-500">{t('property.bedrooms')}</div>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl">
                <i className="fa-solid fa-bath text-amber-600 text-xl mb-2"></i>
                <div className="font-medium">{activeProperty.bathrooms}</div>
                <div className="text-xs text-gray-500">{t('property.bathrooms')}</div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              {t('property.description', { 
                location: getPropertyValue(activeProperty, 'location') 
              })}
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                t('property.features.smart_home'),
                t('property.features.security'),
                t('property.features.gym'),
                t('property.features.pool'),
                t('property.features.playground'),
                t('property.features.metro')
              ].map((feature, index) => (
                <span key={index} className="inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">
                  <i className="fa-solid fa-check-circle mr-1 text-amber-600"></i>
                  {feature}
                </span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium text-center transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                {t('property.cta.viewing')}
              </a>
              <button className="bg-white border border-gray-300 hover:border-blue-900 text-gray-700 px-8 py-3 rounded-full font-medium text-center transition-all flex items-center justify-center">
                <i className="fa-solid fa-share-alt mr-2"></i> {t('common.share')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}