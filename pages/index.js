import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>Taller básico de Next para T3</title>
        <meta
          name="description"
          content="Taller básico de Next.js + Tailwind CSS + Stackblitz + Vercel"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Actividades"
        title="Actividades como profesora">
        Algunas de mis principales actividades como profesora.
      </SectionTitle>
      <Benefits data={benefitOne} />
      
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;