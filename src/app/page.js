import About from "@/components/About/About";
import Action from "@/components/Action/Action";
import ContactForm from "@/components/Contact/Contact";
import FAQ from "@/components/FAQ/FAQ";
import HealthMatters from "@/components/HealthMatters/HealthMatters";
import Healthy from "@/components/Healthy/Healthy";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Offers from "@/components/Offers/Offers";
import Pricing from "@/components/Pricing/Pricing";
import Statement from "@/components/Statement/Statement";
import Testimonials from "@/components/Testimonials/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HealthMatters />
      <HowItWorks />
      <Action />
      <WhyChooseUs />
      <Offers />
      <FAQ />
      <Statement />
      <Testimonials />
     <Healthy/>
     <Pricing/>
     <ContactForm/>
    </>
  );
}
