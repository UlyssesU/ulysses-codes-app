import React from 'react'
import { SiCredly, SiFreecodecamp } from "react-icons/si";

const Certifications = () => {
  return (
    <div id='certifications' className='w-full min-h-min flex items-center'>
        <div className='max-w-[1240px] w-2/3 h-full py-24 m-auto flex flex-col'>
            <h2 className='tracking-widest text-blue-800 text-center'>Certifications</h2>
            <a href="https://www.credly.com/badges/9dfc41a1-4302-455f-859a-86a3b5f96bf6/public_url ">
                <div className='pt-4 flex flex-row underline cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100'> IBM Web Development Fundamentals 2023 <SiCredly size={28} />
                </div>  
            </a>
            <a href="https://www.credly.com/badges/9dfc41a1-4302-455f-859a-86a3b5f96bf6/public_url ">
                <div className='pt-4 flex flex-row underline cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100'> FreeCodeCamp Responsive Web Design 2022 <SiFreecodecamp size={28} />
                </div>  
            </a>
            <a href="https://www.credly.com/badges/9dfc41a1-4302-455f-859a-86a3b5f96bf6/public_url ">
                <div className='pt-4 flex flex-row underline cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100'> FreeCodeCamp JavaScript Algorithms and Data Structures 2022 <SiFreecodecamp size={28} />
                </div>  
            </a>
        </div>
    </div>
  )
}

export default Certifications