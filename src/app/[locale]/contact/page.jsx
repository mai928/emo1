import initTranslations from '@/app/i18n'
import Form from '@/components/Form'
import Image from 'next/image'
import Link from 'next/link'
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

const Contact = async({params}) => {
  const i18nNamespaces = ["home"];
    const {locale}=params
    const {t}=await initTranslations(locale ,i18nNamespaces)

  return (
    <section className='bg-white h-full  w-full'>
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
        {t("Contact Us")}
      </h1>
    </div>

      <div className='pt-10 pb-24  px-5 lg:px-32'>



        <div className=' block lg:flex gap-10 items-center  '>
          {/* contact info */}


          <Form/>

          <div className='w-full ps-10 lg:ps-20 lg:w-1/3'>
            {/* phone */}
            <div className='flex items-center gap-5'>
              
              <svg xmlns="http://www.w3.org/2000/svg" width={35} height={35} className='fill-secondary_color ' viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" /></svg>
              <div className='border-l-[1px] border-solid border-gray-700 h-14' />

              <div className='text-slate-800'>
                <p className='font-semibold'>{t("Address")}</p>
                <p className='text-slate-600 text-sm  font-semibold py-2'>2 El-Obour St., Salah Salem Road, Nasr City, Cairo. P.Code # 11371.
                </p>
              </div>
            </div>

            <div className='flex items-center gap-5 mt-10'>
              <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} className='fill-secondary_color' viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" /></svg>
              <div className='border-l-[1px] border-solid border-gray-700 h-14' />

              <div className='text-slate-800'>
              <p className='font-semibold'>{t("Email")}</p>
                <p className='text-slate-600 text-sm  font-semibold py-2'>emoco@emocoegypt.com</p>
              </div>

            </div>

            <div className='flex items-center gap-5 mt-10'>
              <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} className='fill-secondary_color' viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64L80 64l0 320 224 0 0-320z" /></svg>
              <div className='border-l-[1px] border-solid border-gray-700 h-14' />
              <div className='text-slate-800'>
              <p className='font-semibold'>{t("Phone")}</p>
                <p className='text-slate-600 text-sm  font-semibold py-2'>+202 22612118 </p>
              </div>

            </div>

          </div>

      
        </div>

        <div className='py-10'>
          <div><iframe loading='lazy' className='w-[100%] h-[600px] m-auto' src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=4%20El-Obour%20St.,%20Salah%20Salem%20Road,%20Nasr%20City,%20Cairo.+(Emoco%20Egypt)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe></div>
        </div>
      </div>


    </section>
  )
}

export default Contact