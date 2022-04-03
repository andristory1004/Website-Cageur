import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Phone from '../asset/images/phone.png'

export default function Jumbotron() {
  return (
    <div className="bg-gray justify-around items-center px-5 lg:flex lg:px-32 lg:py-10">
          <motion.div
            className='text-center lg:hidden'
            initial='hidden'
            animate='visible'
            variants={{
              hidden: {
                scale: 0.5,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  duration: 1.5
                }
              }
            }}>
            <Image className="lg:mr-100" src={Phone} width={220} height={450} alt="Dokter"></Image>
          </motion.div>
          <motion.div
            className='lg:text-left lg:mr-5'
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                x: -100,
                opacity: 0,
              },
              visible: {
                x: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  duration: 1.5
                }
              }
            }}>
            <h2 className="text-center lg:text-left font-bold text-2xl lg:text-5xl">
              Kini Daftar ke Klinik atau Rumah sakit ga usah Antri lagi, Tingal pesan saja di apps
              <Link href=""><a className="pl-2 lg:pl-4 font-bold text-2xl lg:text-5xl text-green">Cageur App</a></Link>
            </h2>
            <div className='text-center lg:flex lg:space-x-5 space-y-3 lg:space-y-0 mt-20'>
              <div>
                <input className='px-5 rounded-3xl h-12 w-72' placeholder='Your phone Number' type="text" />
              </div>
              <button className="h-12 w-36 bg-green px-2 py-1 rounded-3xl font-bold text-white hover:text-green-500 hover:bg-white hover:border-2 hover:border-green hover:text-green">
                <Link href=""><a className='text-xl'>Get Started</a></Link>
              </button>
            </div>
            <div className='mt-5 space-y-2' >
              <div className='flex space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-green h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className=''>
                  kemudahan untuk membuat antrian klinik <br></br>
                </p>
              </div>
              <div className='flex space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-green h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className=''>
                  tidak usah antri lama <br></br>
                </p>
              </div>
              <div className='flex space-x-3'>
                <svg xmlns="http://www.w3.org/2000/svg" className="text-green h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className=''>
                  tidak usah antri lama <br></br>
                </p>
              </div>
            </div>

          </motion.div>
          <motion.div
            className='text-center hidden lg:block'
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                x: 100,
                opacity: 0,
              },
              visible: {
                x: 1,
                opacity: 1,
                transition: {
                  delay: 0.2,
                  duration: 1.5
                }
              }
            }}>
            <Image className="lg:mr-100" src={Phone} width={700} height={1350} alt="Dokter"></Image>
          </motion.div>
        </div>
    
  )
}