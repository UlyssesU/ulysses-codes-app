import React from 'react'
import Image from 'next/image'
import UlyssesLogo from '../public/assets/ulyssesLogo.png'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaCodepen } from 'react-icons/fa'
import { useState } from 'react';


const Navbar = (darkMode) => {
    const [nav, setNav] = useState(false);
    const dark = (darkMode.dark);
    const handleNav = () => {
        setNav(!nav)
    }
    const handleDark = () => {
        setDark(!dark)
    }
    if (darkMode === true) {
        handleDark
    }

  return (
    <div className={dark ? "fixed w-full h-20 shadow-xl z-50 bg-slate-800 text-white" : 'fixed w-full h-20 shadow-xl z-50 bg-gray-50'}> {/* ulysses__Navbar */}
        {/* ulysses__Navbar-main */}
        <div className='flex justify-between items-center w-full h-full px-2 lg:px-8 xl:px-16'>
            <Image src={UlyssesLogo} alt="/" width={200} height="auto" />
            <div> {/* ulysses__Navbar-menu */}
                <ul className='hidden md:flex'> {/* ulysses__Navbar-menu-links */}
                    <Link href={'/#home'}>
                        <li className='ml-1 py-2 px-2 lg:px-4 hover:bg-gray-100 hover:font-bold hover:scale-105 ease-in duration-100 rounded'>Home</li>
                    </Link>
                    <Link href={'/#aboutMe'}>
                        <li className='ml-1 py-2 px-2 lg:px-4 hover:bg-gray-100 hover:font-bold hover:scale-105 ease-in duration-100 rounded'>About Me</li>
                    </Link>
                    <Link href={'/#skills'}>
                        <li className='ml-1 py-2 px-2 lg:px-4 hover:bg-gray-100 hover:font-bold hover:scale-105 ease-in duration-100 rounded'>Skills</li>
                    </Link>
                    <Link href={'/#projects'}>
                        <li className='ml-1 py-2 px-2 lg:px-4 hover:bg-gray-100 hover:font-bold hover:scale-105 ease-in duration-100 rounded'>Projects</li>
                    </Link>
                    <Link href={'/#certifications'}>
                        <li className='ml-1 py-2 px-2 lg:px-4 hover:bg-gray-100 hover:font-bold hover:scale-105 ease-in duration-100 rounded'>Certifications</li>
                    </Link>
                    <Link href={'/#contactMe'}>
                        <li className='ml-1 py-2 px-2 lg:(px-4) hover:bg-gray-100 hover:font-bold hover:scale-105 ease-in duration-100 rounded'>Contact Me</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'> {/* ulysses__Navbar-menu-icon */} 
                    <AiOutlineMenu size={28}className='rounded shadow-lg shadow-gray-400' />
                </div>
            </div>
        </div>
        {/* ulysses__Navbar-mobile-shadow */}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen backdrop-blur-sm bg-black/30 touch-none' : '' }> 
            {/* ulysses__Navbar-mobile-exit-layer */}
            <div onClick={handleNav} className={nav ? 'md:hidden fixed right-0 top-0 w-[25%] sm:w-[40%] md:w-[55%] h-screen touch-none' : '' }> </div>
            {/* ulysses__Navbar-mobile-sidebar */}
            <div className={nav ? dark ? 'overflow-auto touch-auto fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-800 p-10 ease-in duration-100' : 'overflow-auto touch-auto fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-50 p-10 ease-in duration-100' : 'hidden' }>
                <div>
                    {/* ulysses__Navbar-mobile-logo&exit */}
                    <div className='flex w-full items-center justify-between'>
                        <Image src={UlyssesLogo} alt="/" width={120} height="auto" />
                        <div onClick={handleNav} className='rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    {/* ulysses__Navbar-mobile-title */}
                    <div className='border-b border-gray-400 my-4'> 
                        <p className='w-[85%] py-4'>Let&apos;s build together</p>
                    </div>
                </div>
                {/* ulysses__Navbar-mobile-menulinks */}
                <div className='py-4 flex flex-col '>
                    <ul>
                        <Link onClick={handleNav} href={'/#home'}>
                            <li className='py-4 cursor-pointer hover:border-b border-gray-400'>Home</li>
                        </Link>
                        <Link onClick={handleNav} href={'/#aboutMe'}>
                            <li className='py-4 cursor-pointer hover:border-b border-gray-400'>About Me</li>
                        </Link>
                        <Link onClick={handleNav} href={'/#skills'}>
                            <li className='py-4 cursor-pointer hover:border-b border-gray-400'>Skills</li>
                        </Link>
                        <Link onClick={handleNav} href={'/#projects'}>
                            <li className='py-4 cursor-pointer hover:border-b border-gray-400'>Projects</li>
                        </Link>
                        <Link onClick={handleNav} href={'/#certifications'}>
                            <li className='py-4 cursor-pointer hover:border-b border-gray-400'>Certifications</li>
                        </Link>
                        <Link onClick={handleNav} href={'/#contactMe'}>
                            <li className='py-4 cursor-pointer hover:border-b border-gray-400'>Contact Me</li>
                        </Link>
                    </ul>
                    <div className='pt-24'>
                        <p className='tracking-widest text-blue-800'>Let&apos;s Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <a href="https://www.linkedin.com/in/ulyssesuribe/">
                                <div className='rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                                    <BsLinkedin />
                                </div>
                            </a>
                            <a href="https://github.com/UlyssesU/">
                                <div className='rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                                    <BsGithub />
                                </div>
                            </a>
                            <a href="https://codepen.io/ulyssesu/pen/Yzeqzvq">
                                <div className='rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                                    <FaCodepen />
                                </div>
                            </a>
                            <a href="mailto:ulysses.uribe@gmail.com">
                                <div className='rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                                    <AiOutlineMail />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar