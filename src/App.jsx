import React from 'react'
import Navbar from '../src/components/Navbar'
import Hero from './components/Hero';
import Business from './components/Business'
import Stats from './components/Stats'
import Billing from './components/Billing';
import CardDeal from './components/CardDeal';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import Cta from './components/Cta';
import Footer from './components/Footer';
const App = () => {
  return (
    <div className='bg-primary h-full w-full overflow-hidden'>
        <div className='sm:px-16 px-6 flex justify-center items-center'>
            <div className='xl:max-w-[1280px] w-full'>
               <Navbar/>
            </div>
            
        </div>
        <div className='bg-primary flex justify-center items-center'>
            <div className='xl:max-w-[1280px] w-full'>
               <Hero/>
            </div>
            
        </div>
        <div className='bg-primary sm:px-16 px-6 flex justify-center items-center'>
            <div className='xl:max-w-[1280px] w-full'>
              <Stats/>
               <Business/>
               <Billing/>
               <CardDeal/>
               <Testimonials/>
               <Clients/>
               <Cta/>
               <Footer/>
            </div>
            
        </div>
        
    </div>
  )
}

export default App