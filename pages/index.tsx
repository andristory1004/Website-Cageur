/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import 'tailwindcss/tailwind.css'
import Logo from '../asset/images/Logo.png'
import Footer from './component/Footer'
import Jumbotron from './component/jumbotron'
import Section3 from './component/section3'
import Section4 from './component/section4'
import Section5 from './component/section5'
import Section6 from './component/section6'
import Section7 from './component/section7'




const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <Head>
        <title>Cageur</title>
        <link rel="shortcut icon" href="../asset/images/favicon.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css2?family=Boogaloo&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/index.min.css" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>

      </Head>
      <section id="Navbar">
        <nav className="bg-gray pt-3 pb-3 lg:pb-0 fixed-top">
          <div className="flex-col text-green lg:flex-row lg:flex font-bold justify-between px-5 lg:px-20">
            <div className="flex justify-between items-center">
              <div>
                <Link href="/"><a>
                  <Image src={Logo} alt="Logo" width={40} height={40}></Image>
                </a></Link>
              </div>
              <div className='dropdown relative'>
                <button onClick={() => setOpen(!open)}
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className="lg:hidden hover:text-black dropdown-toggle transition items-center
          duration-500
          ease-in-out
          flex">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path className={`${!open ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    <path className={`${open ? 'block' : 'hidden'}`} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div 
              aria-labelledby="dropdownMenuButton1"
              className={`${open ? 'block' : 'hidden'} lg:space-x-5 lg:text-xl flex-col py-3 lg:py-0 lg:flex-row lg:flex dropdown-menu absolute lg:relative float-left px-5 lg:px-0 space-y-2 lg:space-y-0 bg-black bg-opacity-50 lg:bg-transparent rounded-xl`}>
              <Link href=""><a className="dropdown-item block hover:text-black transition hover:transition">Home</a></Link>
              <Link href=""><a className="dropdown-item block hover:text-black transition hover:transition">Feature</a></Link>
              <Link href=""><a className="dropdown-item block hover:text-black transition hover:transition">About</a></Link>
              <Link href=""><a className="dropdown-item block hover:text-black transition hover:transition">Contact</a></Link>
              <button type="button" className="dropdown-item lg:hidden inline-block px-6 py-2 border-2 border-green text-green font-extrabold text-xs leading-tight uppercase rounded-full hover:bg-green hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
                <Link href=""><a>Get Started</a></Link>
              </button>
            </div>
            <div className='hidden lg:block'>
              <button type="button" className="inline-block px-6 py-2 border-2 border-green text-green font-extrabold text-xs leading-tight uppercase rounded-full hover:bg-green hover:text-black focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
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
