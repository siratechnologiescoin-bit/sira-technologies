import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import MRHealthPreview from "../components/home/MRHealthPreview";
import AboutPreview from "../components/home/AboutPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import ContactCTA from "../components/home/ContactCTA";

const Home = () => {
  return (
    <>
      <Hero />

      <ServicesPreview />

      <MRHealthPreview />

      <AboutPreview />

      <WhyChooseUs />

      <ContactCTA />
    </>
  );
};

export default Home;