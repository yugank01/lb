import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Mission from "./components/Mission";
import CTA from "./components/CTA";
import FaqSection from "./components/FaqSection";
import Footer from "./components/Footer";
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Content/>
      <Mission/>
      <CTA/>
      <FaqSection/>
      <Footer/> 
    </div>
  )
}
