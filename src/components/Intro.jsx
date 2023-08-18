import React from 'react'
import Image from 'next/image'
import ProfilePic from '../public/assets/websitepic.png'

const Intro = () => {
  return (
    <div id='home' className='w-full min-h-screen text-center'>
        {/*ulysses__Intro-container */}
        <div className='absolute pt-48 w-full h-full mx-auto flex flex-col justify-center'>
            <div className='w-full h-full'>
                <h1>Welcome, I&apos;m Ulysses.</h1>
                <h2>Software Developer</h2>
                <h3>with a focus on Front End Development</h3>
            </div>
            <div className='py-2 w-full h-full'>
                <Image className='rounded-lg w-auto max-h-[100%] mx-auto' src={ProfilePic} alt="/" />
            </div>
        </div>
    </div>
  )
}

export default Intro
