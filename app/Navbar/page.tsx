import Image from 'next/image'
import logo from "./the-square-logo.png"
import Link from 'next/link'


const Navbar = () => {
  return (
    <div>
      <nav className='bg-black p-3'>
        <div className='flex'>
          <Image src={logo} alt='logo' width={130} height={100} />
          <div>
            <p>The</p>
            <p>Square</p>
          </div>
        </div>
        <div className="right-nav-links">
          <ul>
            <li><Link href="/"> Home</Link></li>
            <li><Link href="/"> About Us</Link></li>
            <li><Link href="/"> Services</Link></li>
            <li><Link href="/"> Plans & Pricing</Link></li>
            <li><Link href="/"> Book A Tour</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar