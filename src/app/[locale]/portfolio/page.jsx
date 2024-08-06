import initTranslations from '@/app/i18n'
import ModelPortfolio from '@/components/ModelPortfolio'
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

const OurPortfolio = async({params}) => {
    const i18nNamespaces = ["home"];
    const {locale}=params
    const {t}=await initTranslations(locale ,i18nNamespaces)



    return (
        <section className='h-full relative  w-full'>
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
                    {t("Our Portfolio")}
                </h1>
            </div>


            <div className='block lg:flex justify-between gap-20 px-5 lg:px-28 py-20'>
                <Image width={500} height={600} className='bg_img' alt='img' src='/assets/about.jpg' />
                <div>
                    <h2 className='text-4xl font-bold  '>
                        We Are Swimming Pool Builders and Swimming Pool Service Experts
                    </h2>
                    <p className='text-gray-600 py-10'>“EMOCO” as its presently known was established in 2000, however it’s considered a more developed generation of the former individual enterprise “The Electromechanical Office for Engineering Works – EMO”which was founded and managed by Eng. Mamdouh El-Saied in1995 but was later terminated by the end of year 2000 when EMOCO emerged. Since its foundation.
                        EMOCO has met the growing needs of the Egyptian market and has become the leader in its field. It has successfully gained its customer respect and trust, known for its high level of technical capability, professionalism & flexible pricing policy.
                        <br />
                        EMOCO has get use of the long accumulated and extensive experiences and know how gained from over 25 years of extensive working experiences in the market. We do believe that the well planned and good engineered projects -if supervised with experienced and professional project management- should meet the best execution performance, the optimum cost effectiveness and accordingly customer satisfaction and success on the long term. Based on this concept, EMOCO has invested both financial and human resources to build a back-bone of technical know-how and supporting engineering facilities to fulfill this part of our commitments towards our customers.</p>
                </div>
            </div>
            <ModelPortfolio/>

        </section>
    )
}

export default OurPortfolio