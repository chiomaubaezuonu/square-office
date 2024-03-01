import Image from 'next/image'
import logo from "./the-square-logo.png"
import Link from 'next/link'
import arrow from "./right-arrow.svg"


const Navbar = () => {
  return (
    <div>
      <nav className='bg-black py-3 px-24'>
        <div className='flex justify-between px-7 items-center'>
          <div className='flex'>
            <Image src={logo} alt='logo' width={150} height={130} />
            <div>
              <p>The</p>
              <p>Square</p>
            </div>
          </div>
          <div>
            <ul className="flex items-center text-white gap-4 font-semibold text-base mr-7">
              <li><Link href="/"> Home</Link></li>
              <li><Link href="/"> About Us</Link></li>
              <li className='text-yellow-500'><Link href="/">Services</Link></li>
              <li><Link href="/"> Plans & Pricing</Link></li>
              <li className='bg-yellow-500 hover:bg-yellow-400 py-2  px-3 text-black'><Link className='flex' href="/"> Book A Tour <Image src={arrow} className='ml-2' width={15} alt="arrow" /></Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar