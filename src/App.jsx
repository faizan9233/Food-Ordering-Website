import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Food from "./Components/Food";
import HeadlineCards from "./Components/HeadlineCards";
import Menu from "./Components/Menu";
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards/>
      <Food/>
      <Menu/>

      

    </div>
  );
}

export default App;
