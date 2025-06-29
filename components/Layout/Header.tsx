'use client'
import React from 'react'
import Button from '../Button'
import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
  return (
    <header className="px-4 py-6 md:px-6 lg:px-8">
      <nav className="flex items-center justify-between gap-4 wrapper ">
        {/* Logo */}
        <div className="relative !w-[160px] !h-[56px] my-auto cursor-pointer"
        >
          <Image src={"/images/Logo/brand_logo.png"} layout='fill' objectFit='cover'
            className=""
            alt="vlcc" />
        </div>

        {/* Navigation */}
        <div className="hidden md:flex items-center justify-between w-[500px] gap-12 bg-bgGray px-[40px] py-[18px] rounded-[50px] text-[#3D3D3D] font-medium ">
          <Link href="/" className=" hover:text-logo">
            Home
          </Link>
          <Link href="#about" className=" hover:text-logo">
            About us
          </Link>
          <Link href="#services" className=" hover:text-logo">
            Services
          </Link>
          <Link href="#work" className=" hover:text-logo">
            Work
          </Link>
        </div>

        <div>
          <Link href="/contactus" className=" hover:text-logo">
            <Button onClick={() => { }}
              className='font-medium'
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header