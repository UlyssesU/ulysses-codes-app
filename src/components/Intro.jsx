import React from 'react'
import Image from 'next/image'
import ProfilePic from '../public/assets/heroshot2.jpg'
import { MdOutlineDarkMode } from "react-icons/md";

const Intro = () => {
  return (
    <div id='home' className='w-full min-h-screen items-center'>
        {/*ulysses__Intro-container */}
        <div className='pt-32 max-w-[1240px] w-2/3 h-full mx-auto flex flex-col justify-center'>
            {/* <div className='flex items-end'>
                <MdOutlineDarkMode onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-3xl'/>
            </div> */}
            <div className='w-full h-1/3'>
                <h1>Welcome, I&apos;m Ulysses.</h1>
                <h2>Software Developer</h2>
                <h3>with a focus on Front End Development</h3>
            </div>
            <div className='pt-4 w-full h-full'>
                <Image className='rounded-full w-full h-full mx-auto' src={ProfilePic} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Intro
