import React from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

const Footer = () => {
  const { t } = useLanguage();
  return (
    <section className='bg-sky-950'>
      <p className='text-white text-center py-2 text-xs'>{t('footer.copyright')}</p>
    </section>
  )
}

export default Footer
