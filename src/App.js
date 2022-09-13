import { useEffect, useState } from "react";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { Cover } from "./components/cover/Cover";
import { About } from "./components/about/About";
import { Info } from "./components/info/Info";
import { Footer } from "./components/footer/Footer";

function App() {
  // función de estado donde guardaremos donde es la posición de nuestro scroll.
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollHeight(position);
  };

  // Para que cada vez que hagamos scroll se actualice la Navbar:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
