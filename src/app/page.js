import Banner from "./components/banner/page";
import Features from "./components/features/page";
import Projects from "./components/projects/page";
import Resume from "./components/resume/page";
import Testimonial from "./components/testimonial/page";
import Contact from "./components/contact/page";
import Footer from "./components/footer/page";
import FooterBottom from "./components/footer/FooterBottom";

import Navbar from "./components/navbar/Navbar";
import "slick-carousel/slick/slick.css";

export default function Home() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-8">
      {/* <div className="w-full h-auto bg-white text-black px-8"> */}
      {/* <Navbar /> */}
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial />
        <Contact />
        <Footer />
        <FooterBottom />
      </div>
    </div>
  );
}
