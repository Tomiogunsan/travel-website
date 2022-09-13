import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Destinations from './component/Destinations';
import Search from './component/Search';
import Select from './component/Select';
import Carousel from './component/Carousel';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Hero />
    <Destinations />
    <Search />
    <Select />
    <Carousel />
    <Footer />
    </div>
  );
}

export default App;
