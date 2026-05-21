import About from "./components/About";
import BrandCards from "./components/BrandCards";
import ContactForm from "./components/ContactForm";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";

export default function App() {
  return (
    <div className="overflow-x-clip bg-ivory text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <BrandCards />
        <Services />
        <Portfolio />
        <About />
        <WhyUs />
        <CTA />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
