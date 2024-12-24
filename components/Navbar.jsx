import React, { useRef } from 'react'
import { BiMenu } from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa'


const Navbar = () => {

const navRef = useRef()

const showMenu = () => {
    navRef.current.classList.add("responsive_nav")
}

const selected = () => {
    navRef.current.classList.remove("responsive_nav")
}
  return (
    
    <header className='w-full py-3 px-4 lg:px-10 bg-white flex flex-row items-center justify-between font-Roboto overflow-hidden  ' > 
        <img src="https://res.cloudinary.com/dwedz2laa/image/upload/v1734697716/Group_328_bsouo8.svg" alt="" className='w-28' />


<div className='flex flex-row items-center justify-between gap-5' >


        <nav ref={navRef} className='hidden lg:block   '  >
            <ul className='flex flex-row items-center justify-center gap-2 ' >
                <li className='mx-4 text-[#1D1D1D] text-lg font-[500] cursor-pointer '  onClick={selected} >Home</li>
                <li className='mx-4 text-[#1D1D1D] text-lg font-[500] cursor-pointer'   onClick={selected} >About Us</li>
                <li className='mx-4 text-[#1D1D1D] text-lg font-[500] cursor-pointer'   onClick={selected} >Courses</li>
                <li className='mx-4 text-[#1D1D1D] text-lg font-[500] cursor-pointer'   onClick={selected} >Our Service</li>
                <li className='mx-4 text-[#1D1D1D] text-lg font-[500] cursor-pointer'   onClick={selected}>Contact Us</li>
            </ul>
            <FaTimes
            className='absolute top-[10%] right-[10%] text-3xl text-white '
            onClick={selected}
            />
        </nav>

        <button className='bg-[#4D2C5E] text-white px-5 py-3 rounded-[218px] min-w-[130px] text-md ' >Sign in</button>
        <button className='text-4xl block lg:hidden sm:block md:block'  onClick={showMenu} >
            <BiMenu />
            </button>
        </div>

       
    </header>
  )
}

export default Navbar