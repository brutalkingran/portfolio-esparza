import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Introduction />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
