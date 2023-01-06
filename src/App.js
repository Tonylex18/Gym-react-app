import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Join from "./components/join/Join";
import PLans from "./components/Plans/PLans";
import Program from "./components/programs/Program";
import Reasons from "./components/Reasons/Reasons";
import Testtimonials from "./components/Testimonials/Testtimonials";

function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reasons />
      <PLans />
      <Testtimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
