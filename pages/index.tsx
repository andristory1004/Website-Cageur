/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import sectionImage from '../asset/images/sectionImage.png'
import { motion } from 'framer-motion'
import Jumbotron from '../component/jumbotron'
import Section3 from '../component/section3'
import Section4 from '../component/section4'
import Section5 from '../component/section5'
import Section6 from '../component/section6'
import Section7 from '../component/section7'
import Footer from '../component/Footer'
import Logo from '../asset/images/Logo.png'
import Phone from '../asset/images/phone.png'
import People from '../asset/images/people.png'
import LinkedIn from '../asset/images/icon/linkedin.png'
import IG from '../asset/images/icon/instagram.png'
import Youtube from '../asset/images/icon/youtube.png'
import Twitter from '../asset/images/icon/twitter.png'
import PlayStore from '../asset/images/playStore.png'
import ApleStore from '../asset/images/apleStore.png'
import Snap from '../asset/images/icon/snap.png'
import Tick from '../asset/images/icon/tick.png'
import Smile from '../asset/images/icon/smile.png'
import Heart from '../asset/images/icon/heart.png'
import Info from '../asset/images/icon/info.png'
import Easy from '../asset/images/icon/easy.png'
import Blog from '../asset/images/icon/blog.png'




const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Head>
        <title>Cageur</title>
        <link rel="shortcut icon" href="../asset/images/favicon.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Boogaloo&display=swap" rel="stylesheet"></link>

      </Head>
      <section id="Navbar">
        <nav className="bg-gray pt-3 pb-3 lg:pb-0">
          <div className="flex-col text-green lg:flex-row lg:flex font-bold justify-between px-5 lg:px-20">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/"><a>
                  <Image src={Logo} alt="Logo" width={40} height={40}></Image>
                </a></Link>
              </div>
              <div>
                <button onClick={() => setOpen(!open)} className="lg:hidden hover:text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path className={`${!open ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    <path className={`${open ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={`${open ? 'block' : 'hidden'} lg:space-x-5 lg:text-xl flex-col py-3 lg:py-0 lg:flex-row lg:flex`}>
              <Link href=""><a className="block hover:text-black transition hover:transition">Home</a></Link>
              <Link href=""><a className="block hover:text-black transition hover:transition">Feature</a></Link>
              <Link href=""><a className="block hover:text-black transition hover:transition">About</a></Link>
              <Link href=""><a className="block hover:text-black transition hover:transition">Contact</a></Link>
            </div>
            <div className={`${open ? 'block' : 'hidden'} lg:block `}>
              <button
                className="bg-green px-2 py-1 rounded-3xl font-bold 
                text-white hover:text-green-500 hover:bg-white 
                hover:border-2 hover:border-green hover:text-green transition hover:transition">
                <Link href=""><a>Get Started</a></Link>
              </button>
            </div>
          </div>
        </nav>
      </section>
      <section id='jumbotron'>
        <Jumbotron></Jumbotron>
      </section>
      <section id='section3'>
        <Section3></Section3>
      </section>
      <section id='section4'>
        <Section4></Section4>
      </section>
      <section id='section5'>
        <Section5></Section5>
      </section>
      <section id='section6'>
        <Section6></Section6>
      </section>
      <section id="section7">
        <Section7></Section7>
      </section>

      <section id='footer'>
        <Footer></Footer>
      </section>

      
    
    </div>
    
  )
}

export default Home
