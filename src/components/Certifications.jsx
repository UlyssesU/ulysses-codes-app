import React from 'react'
import { SiCredly, SiFreecodecamp, SiEdx } from "react-icons/si";

const Certifications = () => {
  return (
    <div id='certifications' className='w-full min-h-min flex items-center'>
        <div className='max-w-[1240px] w-4/5 lg:w-2/3 h-full py-12 m-auto flex flex-col'>
            <h2 className='tracking-widest text-blue-800 text-left'>Certifications</h2>
            <div className='mt-4 p-4 shadow-lg rounded-lg lg:pr-32 xl:pr-80'>
                <a href="https://tinyurl.com/5cckr39u ">
                    <div className='pt-4 flex flex-row underline cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100 items-center justify-between'> EdX Prompt Engineering and Advanced ChatGPT 2024 <SiEdx  size={28} />
                    </div>  
                </a>
                <a href="https://www.credly.com/badges/9dfc41a1-4302-455f-859a-86a3b5f96bf6/public_url ">
                    <div className='pt-4 flex flex-row underline cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100 items-center justify-between'> IBM Web Development Fundamentals 2023 <SiCredly size={28} />
                    </div>  
                </a>
                <a href="https://freecodecamp.org/certification/ulyssesu/responsive-web-design ">
                    <div className='pt-4 flex flex-row underline cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100 items-center justify-between'> FreeCodeCamp Responsive Web Design 2022 <SiFreecodecamp size={28} />
                    </div>  
                </a>
                <a href="https://www.freecodecamp.org/certification/ulyssesu/javascript-algorithms-and-data-structures ">
                    <div className='pt-4 flex flex-row underline cursor-pointer hover:font-bold hover:scale-105 ease-in duration-100 items-center justify-between'> FreeCodeCamp JavaScript Algorithms and Data Structures 2022 <SiFreecodecamp size={28} />
                    </div>  
                </a>
            </div>
        </div>
    </div>
  )
}

export default Certifications