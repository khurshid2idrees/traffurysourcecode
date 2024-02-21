import React from 'react';

import { useMediaQuery } from 'react-responsive';



// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';





import product1 from '../../assets/images/product-1.jpg'

import Penirun from '../../assets/images/hotoffers/penirun.png';
import Bigboss from '../../assets/images/hotoffers/bigboss.png';
import mottoketo from '../../assets/images/hotoffers/mottoketo.png';
import aveda from '../../assets/images/hotoffers/aveda.png';
import longnights from '../../assets/images/hotoffers/longnights.png';
import fat2fit from '../../assets/images/hotoffers/fat2fit.png';
import diafix from '../../assets/images/hotoffers/diafix.png';
import sexup from '../../assets/images/hotoffers/sexup.png';

import massherb from '../../assets/images/hotoffers/massherb.png'
import cardiomax from '../../assets/images/hotoffers/cardiomax.png'
import slimQ5 from '../../assets/images/hotoffers/slimQ5.png'
import strongfoot from '../../assets/images/hotoffers/strongfoot.png'
import goodbyecarbs from '../../assets/images/hotoffers/goodbyecarbs.png'
import enerflex from '../../assets/images/hotoffers/enerflex.png'
import justherbs from '../../assets/images/hotoffers/justherbs.png'




const products = [


    {
      id: 1,
      name: 'Massherb',
      href: 'https://wonderforhealth.com/massherb-bd-sl1/',
      imageSrc: massherb,
      imageAlt: "Massherb",
      price: '2521 BDT',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Cardio Max',
      href: 'https://wonderforhealth.com/cardiomax-bd-sl1/',
      imageSrc: cardiomax,
      imageAlt: "Cardio maxx",
      price: '2399 BDT',
      color: 'Black',
    },
    {
      id: 3,
      name: 'SlimQ5',
      href: 'https://wonderforhealth.com/slimq5-za-sl1/',
      imageSrc: slimQ5,
      imageAlt: "slimq5",
      price: '640 ZAR',
      color: 'Black',
    },
    {
      id: 4,
      name: 'Justherbs',
      href: 'https://wonderforhealth.com/justherbs-bd-sl1/',
      imageSrc: justherbs,
      imageAlt: "justherbs",
      price: '2399 BDT',
      color: 'Black',
    },
    {
      id: 5,
      name: 'Strong Foot',
      href: 'https://wonderforhealth.com/strongfoot-ar-sl1/',
      imageSrc: strongfoot,
      imageAlt: "strong foot",
      price: '19490 ARS',
      color: 'Black',
    },
    {
      id: 6,
      name: 'Goodbye Carbs',
      href: 'https://wonderforhealth.com/goodbye-ar-sl1/',
      imageSrc: goodbyecarbs,
      imageAlt: "goodbye carbs",
      price: '19490 ARS',
      color: 'Black',
    },
    {
      id: 7,
      name: 'Enerflex',
      href: 'https://wonderforhealth.com/enerflex-bo-sl1/',
      imageSrc: enerflex,
      imageAlt: "enerflex",
      price: '280 BS',
      color: 'Black',
    },
    {
      id: 8,
      name: 'Sex Up',
      href: 'https://wonderforhealth.com/sexup-ar-sl1/',
      imageSrc: sexup,
      imageAlt: "Sex UP",
      price: '15990 ARS',
      color: 'Black',
    },
    // More products...
  ]

export default function Hotoffers() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return (
   <>

   {isMobile?(
   <div className="bg-white " id="hotoffers">
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
      <h1 className='text-center text-5xl font-bold font-gotham  py-4'>Hot Offers</h1>
      <h2 className="text-xl font-semibold  text-center mt-4 text-gray-500 font-gotham">Available 300+ offers in 5 countries.</h2>

      <Swiper
        slidesPerView={isMobile?1:4}
        spaceBetween={30}
        autoplay ={true} 
        loop={true}
        speed={1800}
        
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}

        modules={[Autoplay]}
    
        className="mySwiper"
      >

{products.map((product) => (
<SwiperSlide> 

        <div className="mt-6" >
         
            <div key={product.id} className="group relative" >
              <div style={{widthL:'30rem'}} className=" w-full overflow-hidden rounded-md bg-gray-200  group-hover:opacity-75 ">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          
        </div>



        </SwiperSlide>


))}
      </Swiper>
      </div>
    </div>):(
      
      <div className="bg-white " id="hotoffers">  
      <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
      <h1 className='text-center text-5xl font-bold font-gotham  py-4'>Hot Offers</h1>
      <h2 className="text-xl font-semibold  text-center mt-4 text-gray-500 font-gotham">Available 300+ offers in 5 countries.</h2>


        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                 
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>)}
              
   </>
  )
}
