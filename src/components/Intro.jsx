import React from 'react'
import Image from 'next/image'
import ProfilePic from '../public/assets/websitepic.png'

const Intro = () => {
  return (
    <div id='home' className='w-full min-h-screen text-center'>
        <div className='absolute pt-48 w-full h-full mx-auto flex flex-col justify-center'>{/*ulysses__Intro-container */}
            <div className='w-full h-full'>
                <h1>Welcome, I&apos;m Ulysses.</h1>
                <h2>Software Developer</h2>
                <h3>with a focus on Front End Development</h3>
            </div>
            <div className='py-2 w-full h-full px-12'>
                <Image className='rounded-lg w-auto h-full mx-auto' src={ProfilePic} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Intro
{/* <div id='home' className='w-full h-screen text-center'> */}
{/* <div id='home' className='w-full h-screen flex items-center text-center'></div> */}
{/* <div className='absolute hover:overflow-auto pt-48 w-full h-full m-auto flex justify-center'> */}
