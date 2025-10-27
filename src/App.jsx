import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero'
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import AppStore from './components/AppStore/AppStore';
import Testimoni from './components/Testimoni/Testimoni';
import Footer from './components/Footer/footer';
import CalorieCalculator from './components/CalorieCalculator/CalorieCalculator';

const App = () => {
  return (
    <>
    <div className='bg white dark:'>
      <Navbar />
      <Hero />
      <Services />
      <Banner />
      <AppStore />
      <CalorieCalculator />
      <Testimoni />
      <Footer />
      </div>
    </>
  )
}

export default App