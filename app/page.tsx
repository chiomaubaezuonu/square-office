
import Image from 'next/image'
import React from 'react'
import arrow from "./down-arrow.svg"
import Link from 'next/link'

const Home = () => {
  return (
    <div className='bg-black text-white flex flex-col items-center justify-center p-36 '>
      <main>
        <h1 className='text-4xl md:text-6xl text-center font-bold font-serif'> Welcome To The Square</h1>
        <p className='md:text-xl mt-2 text-center'>Elevate your workspace, amplify your success.</p>
       <Link href="#"> <Image className='hover:animate-bounce mx-auto mt-32' src={arrow} alt = "arrow" /></Link>
      </main>
    </div>
  )
}

export default Home