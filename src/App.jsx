import "./App.css";
import Hero from "./Component/Hero/Hero";
import Navbar from "./Component/Navbar/Navbar";
import Programs from "./Component/Programs/Programs";
import Title from "./Component/Title/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Programs' title='What we offer'/>
        <Programs />
      </div>
    </div>
  );
}

export default App;
