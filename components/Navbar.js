"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
    const pathname = usePathname()
    const showNavbar = ["/","/genrate"].includes(window.location.pathname)

    return (<>{showNavbar && <nav className='bg-white fixed w-[80vw] justify-between absolute flex top-10 right-[10vw]  rounded-full p-5 px-7'>
            <div className="logo flex gap-20 items-center">
                <Link href={"/"}>
                <img className='h-7' src="linktreeimg.svg" alt="linktreeimage" />
                </Link>
                <ul className='flex gap-20'>
                    <Link href="/"><li>Products</li></Link>
                    <Link href="/"><li>Templates</li></Link>
                    <Link href="/"><li>Marketplace</li></Link>
                    <Link href="/"><li>Learn</li></Link>                   
                    <Link href="/"><li>Pricing</li></Link>
                </ul>
            </div>
            <div className='flex gap-4'>
                <button className='login bg-[#eff0ec] p-4  font-bold rounded-lg' >Log in</button>
                <button className='signup p-4 rounded-full font-bold text-white bg-[#1e2330]'>Signup  free</button>
            </div>
        </nav>}
        
     </>
    )
}

export default Navbar