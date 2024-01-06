import React from 'react'
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaGithub  } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";


const Skills = () => {
  return (
    <div id='skills' className='w-full min-h-min flex items-center'>
        <div className='max-w-[1240px] w-2/3 h-full py-24 m-auto flex flex-col'>
            <h2 className='tracking-widest text-blue-800 text-left'>Skills</h2>
            <div className='pt-6 grid grid-cols-4 gap-6'>
                <div className='flex flex-row items-center'>
                    <FaPython /> Python
                </div>
                <div className='flex flex-row items-center'>
                    <IoLogoJavascript /> JavaScipt
                </div>
                <div className='flex flex-row items-center'>
                    <FaReact /> React
                </div>
                <div className='flex flex-row items-center'>
                    <FaHtml5  /> HTML
                </div>
                <div className='flex flex-row items-center'>
                    <FaCss3Alt /> CSS    
                </div>
                <div className='flex flex-row items-center'>
                    <FaGithub /> Git
                </div>
                <div className='flex flex-row items-center'>
                    Agile
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills