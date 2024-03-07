import "./App.css"
import Image from 'next/image'
import React from 'react'
import arrow from "./images/down-arrow.svg"
import Link from 'next/link'
import rightArrow from "./Navbar/right-arrow.svg"
import featureImg from "./images/feature-img.jpg"
import cardData from "./cardData"
import picture1 from "./images/picture1.png"
import picture2 from "./images/Picture2.jpg"
import picture3 from "./images/picture3.jpg"
import picture4 from "./images/picture4.png"
import picture5 from "./images/Picture5.png"
import picture6 from "./images/Picture6.jpg"
import picture7 from "./images/Picture7.jpg"
import picture8 from "./images/Picture8.jpg"
import cyber from "./images/cyber234.jpg"
import digit from "./images/9thdigit.png"
import aart from "./images/aart.png"
import sycamore from "./images/sycamore.png"
// import lsetf from "../../../public/lsetf.png"
import lsetf from "../public/lsetf.png"


type FeatureCard = {
  id: number,
  text: string,
  number: string,
  gain: string
}

const Home = () => {
  return (
    <div className="relative">
      <div className='landingPage bg-cover bg-black text-white flex flex-col items-center justify-center p-28 '>
        <main className='py-20'>
          <h1 className='text-4xl md:text-6xl text-center font-bold font-serif'> Welcome To The Square</h1>
          <p className='md:text-xl mt-2 text-center'>Elevate your workspace, amplify your success.</p>
          <Link href="#"> <Image className='hover:animate-bounce mx-auto mt-32' src={arrow} alt="arrow" /></Link>
        </main>
      </div>

      {/* featured */}
      <div className='grid grid-cols-3 px-32 gap-6 bg-white text-black'>
        <div>
          <Image src={rightArrow} alt="right-arrow" />
          <p className='text-yellow-600'>Featured</p>
          <h2>We offer
            <br />
            Creative
            <br /> Environment</h2>
          <p>We provide modern coworking spaces with essential amenities for professionals and businesses, fostering productivity and collaboration.</p>
          <Image src={featureImg} alt="Person-image" />
        </div>
        <div className='bg-pink-500 grid grid-rows-2 gap-3 '>
          {cardData.map((card) => {
            return (
              <div>
                <p>{card.text}</p>
                <p>{card.number}</p>
                <p>{card.gain}</p>
              </div>

            )
          })}
        </div>

      </div>
      {/* Gallery section */}
      <div className='flex items-center justify-end pr-36'>
        <Image src={rightArrow} width={15} alt='right-arrow' />
        <p>View All</p>
      </div>
      <div className="mt-6 mb-12 w-full">
        <div className='flex gap-2 justify-center'>
          <div className='bg-stone-900 text-white flex items-center'><h2 className='font-semibold -rotate-90 text-3xl px-4'>Gallery</h2></div>
          <div className='flex flex-col'>
            <div className='flex gap-2 h-[198.5px] mb-2'>
              <Image className="w-full h-full  object-contain" src={picture1} alt='gallery-picture1' />
              <Image className="w-full h-full object-contain" src={picture2} alt='gallery-picture2' />
              <Image className="w-full h-full object-contain" src={picture3} alt='gallery-picture3' />
              <Image className="w-full h-full object-contain" src={picture4} alt='gallery-picture4' />
            </div>
            <div className='flex gap-2 h-[198.5px]'>
              <Image className="w-full h-full object-contain" src={picture5} alt='gallery-picture5' />
              <Image className="w-full h-full object-contain" src={picture6} alt='gallery-picture6' />
              <Image className="w-full h-full object-contain" src={picture7} alt='gallery-picture7' />
              <Image className="w-full h-full object-contain" src={picture8} alt='gallery-picture8' />
            </div>
          </div>
        </div>
      </div>

      {/* partner-Section */}
      <div className="p-4 mt-6 shadow">
        <p className='text-center mt-10 text-lg font-semibold'>Our Members</p>
        <div className='flex justify-around w-full mx-auto'>
          <Image className="w-36 object-contain" src={cyber} alt='cyber234' />
          <Image className="w-36 object-contain" src={digit} alt="9thdigit" />
          <Image className="w-36 object-contain" src={aart} alt='arrt' />
          <Image className="w-36 object-contain" src={sycamore} alt='sycamore' />
        </div>
        <p className='text-center mb-0'> Our Partner</p>
        <Image src={lsetf} alt="lsetf" className='mx-auto mt-1 pt-1 w-36' />
      </div>
    </div>
  )
}

export default Home