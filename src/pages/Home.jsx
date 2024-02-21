import React from 'react';

import NavBar from '../components/Home/NavBar';
import Header from '../components/Home/Header';
import Advantages from '../components/Home/Advantages';
import Hotoffers from '../components/Home/Hotoffers';
import About from '../components/Home/About';
import Map from '../components/Home/Map';
import Footer from '../components/Home/Footer';
import Logoslider from '../components/Home/Logoslider';
import Payment from '../components/Home/Payment';

export default function Home() {
  return (
    <>
    <NavBar/>
    <Header/>
    <Advantages/>
    <Hotoffers/>
    <About/>
    <Payment/>
    <Logoslider/>
    <Map/>
    <Footer/>

    </>
  )
}
