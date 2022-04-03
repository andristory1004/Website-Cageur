import { motion } from "framer-motion";
import Link from "next/link";
import { AnimateSharedLayout } from "framer-motion";
import { Component } from "react";
import Image from "next/image";
import Heart from '../asset/images/icon/heart.png'
import Info from '../asset/images/icon/info.png'
import Easy from '../asset/images/icon/easy.png'
import Blog from '../asset/images/icon/blog.png'

export default function Section3() {
  return (
    <div className='bg-white pb-10'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e5e7eb" d="M0,160L26.7,149.3C53.3,139,107,117,160,96C213.3,75,267,53,320,58.7C373.3,64,427,96,480,112C533.3,128,587,128,640,122.7C693.3,117,747,107,800,117.3C853.3,128,907,160,960,181.3C1013.3,203,1067,213,1120,186.7C1173.3,160,1227,96,1280,80C1333.3,64,1387,96,1413,112L1440,128L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
          <motion.div
            className="lg:px-20"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                scale: 0.5
              },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 1.0
                }
              }
            }}>
            <h2 className="text-center font-bold text-2xl lg:text-5xl">
              Mudah <Link href=""><a className="font-bold text-2xl lg:text-5xl text-green">Konsultasi & Membuat Janji</a></Link> Dengan Tim medis di Klinik/Rumah Sakit terdekat
            </h2>
          </motion.div>

          <div className='lg:flex justify-center mt-10 lg:mb-24 lg:mt-20 lg:space-x-10 space-y-24 lg:space-y-0 mb-20'>
            <div className='flex justify-around  lg:space-x-10'>
              <motion.div
                className='w-52 h-52 justify-center text-center space-y-3'
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.5
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 0.5,
                      duration: 1.0
                    }
                  }
                }}>
                <Image src={Easy} width={100} height={100} alt="Heart"></Image>
                <h4 className='font-bold text-xl'>
                  Mudah
                </h4>
                <p className='font-semibold'>
                  Kini anda mudah untuk mendaftar di klinik atau rumah sakit terdekat tanpa antri yang panjang
                </p>
                <div>
                  <Link href="">
                    <a className='text-xl font-bold text-green hover:text-black transition hover:transition'>
                      Get started {`>`}
                    </a>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className=' w-52 h-52 justify-cente text-center space-y-3'
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.5
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 1.0,
                      duration: 1.0
                    }
                  }
                }}>
                <Image src={Heart} width={100} height={100} alt="Heart"></Image>
                <h4 className='font-bold text-xl'>
                  Terjamin
                </h4>
                <p className='font-semibold'>
                  Rahasia data base anda dan keluarga terjamin dan tidak bisa disebarluaskan
                </p>
                <div>
                  <Link href="">
                    <a className='text-xl font-bold text-green hover:text-black transition hover:transition'>
                      See how {`>`}
                    </a>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className='flex justify-around lg:space-x-10'>
              <motion.div
                className=' w-52 h-52 justify-center text-center space-y-3 '
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.5
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 1.5,
                      duration: 1.0
                    }
                  }
                }}>
                <Image src={Info} width={100} height={100} alt="Heart"></Image>
                <h4 className='font-bold text-xl'>
                  Info Terkini
                </h4>
                <p className='font-semibold'>
                  anda akan mendapatkan informasi terkini tentang layanan dan fasilitas melalui emai
                </p>
                <div>
                  <Link href="">
                    <a className='text-xl font-bold text-green hover:text-black transition hover:transition'>
                      Learn more {`>`}
                    </a>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className=' w-52 h-52 justify-center text-center space-y-3'
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.5
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 2.0,
                      duration: 1.0
                    }
                  }
                }}>
                <Image src={Blog} width={100} height={100} alt="Heart"></Image>
                <h4 className='font-bold text-xl'>
                  Blog Kesehatan
                </h4>
                <p className='font-semibold'>
                  selain mendapatkan kemudahan membuat antrian klinik anda juga bisa menambah wawasan seputar kesehatan
                </p>
                <div>
                  <Link href="">
                    <a className='text-xl font-bold text-green hover:text-black transition hover:transition'>
                      Learn more {`>`}
                    </a>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
  );
}