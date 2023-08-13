import React from 'react'
import Image from 'next/image'
import UlyssesLogo from '../public/assets/ulyssesLogo.png'
import Link from 'next/link'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaCodepen } from 'react-icons/fa'
import { useState } from 'react';


const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100] bg-white/90'> {/* ulysses__Navbar */}
        {/* ulysses__Navbar-main */}
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src={UlyssesLogo} alt="/" width={200} height={71} />
            <div> {/* ulysses__Navbar-menu */}
                <ul className='hidden md:flex'> {/* ulysses__Navbar-menu-links */}
                    <Link href={'/#home'}>
                        <li className='cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100'>Home</li>
                    </Link>
                    <Link href={'/#aboutMe'}>
                        <li className='ml-10 cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100'>About Me</li>
                    </Link>
                    <Link href={'/#skills'}>
                        <li className='ml-10 cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100'>Skills</li>
                    </Link>
                    <Link href={'/#projects'}>
                        <li className='ml-10 cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100'>Projects</li>
                    </Link>
                    <Link href={'/#contactMe'}>
                        <li className='ml-10 cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100'>Contact Me</li>
                    </Link>
                </ul>
                <div onClick={handleNav} className='md:hidden'> {/* ulysses__Navbar-menu-icon */} 
                    <AiOutlineMenu size={21} />
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen backdrop-blur-sm bg-black/30' : '' }> {/* ulysses__Navbar-mobile-shadow */}
            {/* ulysses__Navbar-mobile-sidebar */}
            <div className={nav ? 'hover:overflow-auto fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-gray-50 p-10 ease-in duration-100' : 'hidden' }>{/* ulysses__Navbar-mobile-sidebar */}
                <div>{/* ulysses__Navbar-mobile-logo&exit */}
                    <div className='flex w-full items-center justify-between'>
                        <Image src={UlyssesLogo} alt="/" width={120} height={43} />
                        <div onClick={handleNav} className='rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                            <AiOutlineClose />
                        </div>
                    </div>
                    <div className='border-b border-gray-400 my-4'> {/* ulysses__Navbar-mobile-title */}
                        <p className='w-[85%] py-4'>Let&apos;s build together</p>
                    </div>
                </div>
                <div className='py-4 flex flex-col '>{/* ulysses__Navbar-mobile-menulinks */}
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
                        <Link onClick={handleNav} href={'/#contactMe'}>
                            <li className='py-4 cursor-pointer hover:border-b border-gray-400'>Contact Me</li>
                        </Link>
                    </ul>
                    <div className='pt-24'>
                        <p className='tracking-widest text-blue-800'>Let&apos;s Connect</p>
                        <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            <a href="https://www.linkedin.com/in/ulyssesuribe/">
                                <div className='rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-100'>
                                    <BsLinkedin color='blue' />
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