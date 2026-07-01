"use client"
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Services from "./components/services";
import CaseStudies from "./components/casestudies";
import Process from "./components/process";
import PricingPreview from "./components/pricingpreview";
import Testimonial from "./components/testtimonial";
import Faq from "./components/faq";
import CTA from "./components/cta";
import Footer from "./components/footer";
export default function home(){
  return(
    <div>
      <Navbar />
      <Hero />
      <Services />
      <CaseStudies />
      <Process />
      <PricingPreview />
      <Testimonial />
      <Faq />
      <CTA />
      <Footer />
    </div>
  )
}
  