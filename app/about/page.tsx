import React from 'react'
import aboutImg from "./aboutImg.jpg"
import Image from 'next/image'

const About = () => {
    return (
        <div className=' text-white pb-24'>
            {/* <div className="w-full h-72 py-8 bg-stone-200 relative top-14 bg-bottom bg-[length:700px_350px] flex items-center bg-[url('https://thesquareoffices.com/storage/images/about-the-square.jpg')]" > */}
            <div className='bg-[length:700px_350px] bg-stone-800 h-72 top-14'>
                <div className='aboutBgImg'>
                    <h1 className='absolute top-36 text-white left-96 text-4xl md:text-5xl'>About The Square</h1>
                </div>
            </div>
            <div className='text-black flex mx-36 gap-8'>
                <div className='mt-10'>
                    <div className='mb-12'>
                        <h2 className='text-gray-800 font-semibold text-3xl mb-4'>Our Vision</h2>
                        <p className='text-lg text-gray-700'>The Square is a premium serviced office provider, offering a range of tailored solutions designed to cater to the needs of small and medium sized enterprises (SMES). Recognizing the dynamic nature of business, we provide flexible terms that can adapt to your specific needs, ensuring that your workspace aligns seamlessly with the evolving demands of your business.</p>
                    </div>
                    <div>
                        <h2 className='text-gray-800 font-semibold text-3xl mb-4'>Our Mission</h2>
                        <p className='text-lg text-gray-700'>Our mission is to empower businesses by providing them with a professional and dynamic workspace that fosters innovation, collaboration, and productivity.</p>
                    </div>
                </div>
                <div>
                    <Image className='hidden lg:block mt-24' src={aboutImg} alt="about image" />
                </div>
            </div>
        </div>
    )
}

export default About