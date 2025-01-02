import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";
import StarsCanvass from "./components/Inteface/starbackground";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-transparent'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <StarsCanvass/>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;