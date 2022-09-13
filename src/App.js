import { useEffect, useState } from "react";
import "./App.css";
import { Cover } from "./components/cover/Cover";
import { Navbar } from "./components/navbar/Navbar";

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
    </div>
  );
}

export default App;
