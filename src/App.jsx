import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Appbar from './components/Appbar';
import Landingpage from './components/Landingpage';
import Services from './components/Services';
import Contact from './components/Contact';
import Coaches from './components/Coaches';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Mission from './components/Mission';
function App() {
 

  return (
    <>
    <Appbar/>
    <Landingpage/>


<div id="services">
  <Services />
</div>

<div id="coaches">
  <Coaches />
</div>

<div id="achievements">
  <Achievements />
</div>


<div id="pricing">
  <Pricing />
</div>
<div id="gallery">
  <Gallery />
</div>
<div id="mission">
  <Mission />
</div>

<div id="contact">
  <Contact />
</div>

<Footer />


    </>
  )
}

export default App;
