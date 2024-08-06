import Image from 'next/image'
import React from 'react'




export async function generateMetadata({ params }) {
  const { locale } = params

  return {
      title: locale === 'ar' ? 'المقالات | دكتور خالد النمرسي' : locale === 'en' ? "Blogs | Dr Khaled Elnomrosy" : locale === 'fr' ? 'french':'language',
      description:  locale === 'ar' ? 'المقالات | دكتور خالد النمرسي' : locale === 'en' ? "Blogs | Dr Khaled Elnomrosy" : locale === 'fr' ? 'french':'language',
      other: {
          title: locale === 'ar' ? 'المقالات | دكتور خالد النمرسي' : locale === 'en' ? "Blogs | Dr Khaled Elnomrosy" : locale === 'fr' ? 'french':'language',
      }

  }
}

const ServiceDetails = async({params}) => {
  const i18nNamespaces = ["home"];
    const {locale}=params
    const {t}=await initTranslations(locale ,i18nNamespaces)

  return (
    <section>
         <div className='relative w-full h-[55vh] lg:h-[60vh] '>
    <Image
        src='/assets/web2.jpg'
        alt='img'
        layout='fill'
        objectFit='cover'
        quality={100}
        className='w-full h-full'
        sizes="(max-width: 600px) 150vw,
               (max-width: 1200px) 50vw,
               "
      />
      <h1 className='absolute left-7 bottom-20 lg:bottom-32 lg:start-96 text-3xl lg:text-5xl text-white font-semibold'>
        {t("services details")}
      </h1>
    </div>
    </section>
  )
}

export default ServiceDetails