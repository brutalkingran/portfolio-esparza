import Navbar from "./components/Navbar";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    if (window.innerWidth < 768) {
      alert("Esta web sigue en construcción para móviles. Cambia tu vista a modo escritorio si es posible!")
    }
  }, [])

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
