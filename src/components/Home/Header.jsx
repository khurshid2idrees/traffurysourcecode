import React from 'react';
import tfbanner from '../../assets/images/tf-banner.jpg';
import mottoketo from '../../assets/images/headerimg/giphy.gif'
import bannermobile from '../../assets/images/headerimg/bannermobile .jpg';
import { useMediaQuery } from 'react-responsive';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';



export default function Header() {

  const isMobile = useMediaQuery({maxWidth:767});

    const links = [


        { name: 'Open roles', href: '#' },
        { name: 'Internship program', href: '#' },
        { name: 'Our values', href: '#' },
        { name: 'Meet our leadership', href: '#' },
      ]
      const stats = [
      
      
        { name: 'Offices worldwide', value: '12' },
        { name: 'Full-time colleagues', value: '300+' },
        { name: 'Hours per week', value: '40' },
        { name: 'Paid time off', value: 'Unlimited' },
      ]


  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 z-0" id="header">
      <img
      src={isMobile?bannermobile:tfbanner}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* <h2 className="md:text-6xl text-2xl font-bold tracking-tight text-black ">Direct Nutra {isMobile?null:<br/>} Advertiser</h2> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-between">

        <div>
          <h2 className="md:text-6xl text-2xl font-bold tracking-tight text-black ">Direct Nutra {isMobile?null:<br/>} Advertiser</h2>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="mt-6 md:text-xl text-base md:leading-8 leading-5 text-black">
           Your trusted partner in CPA field with <br /> only in-house offers!
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

<a href="#contactus">
<button class="group relative h-8 w-28 md:h-12 md:w-44 overflow-hidden rounded-3xl bg-redbtn text-lg font-bold text-white">
    Join Now
    {/* <div class="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div> */}
  </button>
  </a>
  </div>

  </div>

  <div className='z-10 mr-36 mt-16'>
    
    <img src={isMobile?null:mottoketo} alt="" width={300} />
  </div>

        
      </div>
    </div>
  )
}
