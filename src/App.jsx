import "./App.css";
import About from "./Component/About/About";
import Campus from "./Component/Campus/Campus";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import Programs from "./Component/Programs/Programs";
import Testimonial from "./Component/Testimonial/Testimonial";
import Title from "./Component/Title/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Programs' title='What we offer'/>
        <Programs />
        <About/>
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonial/>
        <Title subtitle='Contact us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
