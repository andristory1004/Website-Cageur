import Link from "next/link"
import Image from "next/image"
import LinkedIn from '../asset/images/icon/linkedin.png'
import IG from '../asset/images/icon/instagram.png'
import Youtube from '../asset/images/icon/youtube.png'
import Twitter from '../asset/images/icon/twitter.png'
import Logo from '../asset/images/Logo.png'

export default function Footer(){
    return(
        <div>
          <div className='lg:flex lg:px-10 lg:py-10 py-5 justify-center bg-gray px-5 lg:pb-20 pb-5'>
            <div className='lg:w-4/12 lg:px-2 space-y-5'>
              <div className='text-center'>
                <Link href="/">
                  <a>
                    <Image src={Logo} width={120} height={120} alt="Linked"></Image>
                  </a>
                </Link>
              </div>
              <div>
                <p>
                  Dapatkan semua kemudahan anda dalam
                  mengakses fasilitas kesehatan yang terdekat
                  disekitaran anda
                </p>
              </div>
              <div className='space-y-2'>
                <h5 className='text-xl font-bold text-center lg:text-left'>
                  Follow Us
                </h5>
                <div className='flex space-x-3 justify-center lg:justify-start items-center w-full'>
                  <Link href="">
                    <a className='hover:scale-150 hover:transition hover:duration-300 transition duration-300 '>
                      <Image className='' src={LinkedIn} width={20} height={20} alt="Linked"></Image>
                    </a>
                  </Link>
                  <Link href="">
                    <a className='hover:scale-150 hover:transition hover:duration-300 transition duration-300'>
                      <Image src={IG} width={20} height={20} alt="IG"></Image>
                    </a>
                  </Link>
                  <Link href="">
                    <a className='hover:scale-150 hover:transition hover:duration-300 transition duration-300'>
                      <Image src={Youtube} width={25} height={25} alt="Yt"></Image>
                    </a>
                  </Link>
                  <Link href="">
                    <a className='hover:scale-150 hover:transition hover:duration-300 transition duration-300'>
                      <Image src={Twitter} width={25} height={25} alt="Tw"></Image>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex justify-center lg:w-6/12'>
              <div className=' w-1/2 lg:w-3/12 lg:px-2 mt-5 lg:mt-0 text-center lg:text-left space-y-1'>
                <h5 className='text-xl font-bold pb-3'>
                  Product
                </h5>
                <Link href="">
                  <a className=' block hover:text-green hover:font-bold transition hover:transition hover:scale-105'>
                    Home
                  </a>
                </Link>
                <Link href="">
                  <a className='block hover:text-green hover:font-bold transition hover:transition hover:scale-105'>
                    About
                  </a>
                </Link>
                <Link href="">
                  <a className='block hover:text-green hover:font-bold transition hover:transition hover:scale-105'>
                    Feature
                  </a>
                </Link>
                <Link href="">
                  <a className='block hover:text-green hover:font-bold transition hover:transition hover:scale-105'>
                    Blog
                  </a>
                </Link>
                <Link href="">
                  <a className='block hover:text-green hover:font-bold transition hover:transition hover:scale-105'>
                    Pricing
                  </a>
                </Link>
              </div>

              <div className='w-1/2 lg:w-3/12 lg:px-2 mt-5 lg:mt-0 text-center lg:text-left space-y-1'>
                <h5 className='text-xl font-bold pb-3'>
                  Resources
                </h5>
                <Link href="">
                  <a className='block hover:text-green hover:font-bold transition hover:transition hover:scale-105'>
                    Feed Cageur App
                  </a>
                </Link>
                <Link href="">
                  <a className='block hover:text-green hover:font-bold transition hover:transition hover:scale-105'>
                    Download Cageur
                  </a>
                </Link>
                <Link href="">
                  <a className='block hover:text-green hover:font-bold transition hover:transition hover:scale-105'>
                    Mail browser app
                  </a>
                </Link>
                <Link href="">
                  <a className='block hover:text-green hover:font-bold transition hover:transition hover:scale-105'>
                    iOS Version
                  </a>
                </Link>
                <Link href="">
                  <a className='block hover:text-green hover:font-bold transition hover:transition hover:scale-105'>
                    Android Version
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
    )
}