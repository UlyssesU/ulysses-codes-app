import Head from 'next/head'

import { Inter } from '@next/font/google'
import Navbar from '@/components/Navbar'
import Intro from '@/components/Intro'
import Contact from '@/components/Contact'
import About from '@/components/About'
import Certifications from '@/components/Certifications'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
// import styles from '@/styles/Home.module.css'
import { useState } from 'react'
import { MdOutlineDarkMode } from "react-icons/md";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    const [dark , setDark] = useState(false);
    const handleDark = () => {
        setDark(!dark)
    }
  return (
    <div className={dark ? "bg-slate-800 text-white" : "bg-gray-50 text-black"}>
      <Head>
        <title>Ulysses Uribe</title>
        <meta name="description" content="My name is Ulysses Uribe, I am a frontend developer, this is my website where I show what I can do." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/uIcon.png" />
      </Head>
      <Navbar dark={dark}/>
      <Intro />
      <div className='fixed top-24 right-2 lg:right-8 xl:right-16 flex items-end'>
            <MdOutlineDarkMode onClick={handleDark} className='cursor-pointer text-3xl rounded-full shadow-lg shadow-gray-400'/>
        </div>
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Analytics />
      <SpeedInsights/>
    </div>
  )
}

  