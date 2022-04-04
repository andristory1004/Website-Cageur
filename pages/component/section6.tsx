import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Phone from '../../asset/images/phone.png'

export default function Section6(){
    return(
        <div className="bg-gray justify-around items-center px-5 lg:flex lg:px-32 lg:py-14 pb-5">
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
              Get started today.
              <Link href=""><a className="pl-2 lg:pl-4 font-bold text-2xl lg:text-5xl text-green">Try free</a></Link> Untuk Anda Pengusaha Klinik dan Rumah sakit Kami siap bermitra dengan Anda, Dashboard Cukup memakai HP Admin saja.
            </h2>
            <div className='text-center lg:flex lg:space-x-5 space-y-3 lg:space-y-0 mt-20'>
              <div>
                <input className='px-5 rounded-3xl h-12 w-72' placeholder='Your phone Number' type="text" />
              </div>
              <button className="h-12 w-36 bg-green px-2 py-1 rounded-3xl font-bold text-white hover:text-green-500 hover:bg-white hover:border-2 hover:border-green hover:text-green">
                <Link href=""><a className='text-xl'>Get Started</a></Link>
              </button>
            </div>


          </motion.div>
          <motion.div
            className='text-center hidden lg:block w-full'
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