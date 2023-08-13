import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { FaCodepen } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'

const Contact = () => {
  return (
    <div id='contactMe' className='w-full h-full flex items-center'>
        <div className='max-w-[1240px] w-2/3 h-full pt-2 m-auto flex flex-col'>
            <h2 className='tracking-widest text-blue-800 text-center'>Let&apos;s Connect</h2>
            <div className='flex items-center justify-between my-4 py-2 w-full'>
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
  )
}

export default Contact