import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import HeaderSection from '../components/HeaderSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Features from '../components/Features';
import Technologies from '../components/Technologies';
import Portfolio from '../components/Portfolio';
import WhyChooseJsys from '../components/WhyChooseJsys';
import TrustedPartners from '../components/TrustedPartners';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import CEOMessage from '@/components/CEO-Message';
import StateSections from '@/components/StateSections';
import WhoWeAre from '@/components/WhoWeAre';
import { OurServices2, Technologies2, TestimonialsSection, WhyWeChoose } from '@/components';
import TeamSpeaksSection from '@/components/TeamSpeaksSection';
import CallToActionSection from '@/components/CallToActionSection';

export default function HomePage() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || 'en';

  return (
    <>
      <Helmet>
        <html lang={currentLang} />
        <title>Jsys Technologies</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={currentLang === 'ja' ? 'ja_JP' : 'en_US'} />
        <link rel="canonical" href={`https://jsystech.com/${currentLang}`} />
        <link rel="alternate" hrefLang="en" href="https://jsystech.com/en" />
        <link rel="alternate" hrefLang="ja" href="https://jsystech.com/ja" />
        <link rel="alternate" hrefLang="x-default" href="https://jsystech.com/en" />
      </Helmet>
      
      
      <main>
        <HeaderSection /> 
        <StateSections />
        <WhoWeAre />
        <OurServices2 />
        <Technologies2 />
        <WhyWeChoose />
        <TestimonialsSection />
        {/* <Services /> */}
        {/* <AboutUs /> */}
       
        {/* <Features /> */}
        {/* <Technologies /> */}
        <Portfolio />
        {/* <WhyChooseJsys /> */}
        {/* <TrustedPartners /> */}
        {/* <CEOMessage /> */}
        <TeamSpeaksSection />
        {/* <Testimonial /> */}
        <CallToActionSection />
        {/* <CTA /> */}
      </main>
      <Footer />
    </>
  );
}