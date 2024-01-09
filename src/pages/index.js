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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ulysses Uribe</title>
        <meta name="description" content="My name is Ulysses Uribe, I am a frontend developer, this is my website where I show what I can do." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/uIcon.png" />
      </Head>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  )
}

  