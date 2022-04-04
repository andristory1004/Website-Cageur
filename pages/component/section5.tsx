import Link from "next/link"
import Image from "next/image"
import PlayStore from '../../asset/images/playStore.png'
import ApleStore from '../../asset/images/apleStore.png'
import Snap from '../../asset/images/icon/snap.png'
import Tick from '../../asset/images/icon/tick.png'
import Smile from '../../asset/images/icon/smile.png'
import Phone from '../../asset/images/phone.png'

export default function Section5(){
    return(
        <div className='py-10 text-center'>
          <div>
            <h2 className="font-bold text-2xl lg:text-5xl">
              If you love simplicity, you’ll simply<br></br>
              love <Link href=""><a className="font-bold text-2xl lg:text-5xl text-green">Cageur App</a></Link><br></br>
            </h2>
            <p className='lg:text-2xl lg:mt-5'>
              Silahkan download aplikasi nya di bawah ini
            </p>
          </div>
          <div className='py-5 space-x-5 flex justify-center text-center'>
            <Link href="">
              <a className='hover:scale-110 hover:transition hover:duration-300 transition duration-300' >
                <Image src={PlayStore} width={200} height={80} alt="Play Store"></Image>
              </a>
            </Link>

            <Link href="">
              <a className='hover:scale-110 hover:transition hover:duration-300 transition duration-300'>
                <Image src={ApleStore} width={200} height={80} alt="Play Store"></Image>
              </a>
            </Link>
          </div>

          <div className='space-y-5'>

            <div className='lg:flex justify-center lg:space-x-5 space-y-5 lg:space-y-0 '>
              <div className='block justify-center bg-gray lg:w-5/12 lg:h-72 h-56 w-11/12 rounded-2xl px-10 lg:py-10 py-5 mx-auto'>
                <Image src={Snap} width={100} height={100} alt="Play Store"></Image>
                <h3 className='font-bold text-2xl'>
                  Simple
                </h3>
                <p className=''>
                  Cageur di design dengan sangat simple untuk mudah di akses oleh semua lapisan masayarakat
                </p>
              </div>
              <div className='block bg-gray lg:w-5/12 lg:h-72 h-56 w-11/12 rounded-2xl px-10 lg:py-10 py-5 mx-auto'>
                <Image src={Smile} width={100} height={100} alt="Play Store"></Image>
                <h3 className='font-bold text-2xl'>
                  user Freindly
                </h3>
                <p className=''>
                  cageur memberikan tampilan yang mudah digunakan
                </p>
              </div>
            </div>
            <div className='lg:flex justify-center text-center lg:space-x-5 space-y-5 lg:space-y-0'>
              <div className='block bg-gray lg:w-5/12 lg:h-72 h-56 w-11/12 rounded-2xl px-10 lg:py-10 py-5 mx-auto'>
                <Image src={Tick} width={100} height={100} alt="Play Store"></Image>
                <h3 className='font-bold text-2xl'>
                  Terstruktur
                </h3>
                <p className=''>
                  Lorem ipsum dolor sit amet. Velit officia lorem ipsum dolor consequat duis enim velit mollit
                </p>
              </div>
              <div className='block bg-gray lg:w-5/12 lg:h-72 h-56 w-11/12 rounded-2xl px-10 lg:py-10 py-5 mx-auto'>
                <Image src={Phone} width={70} height={100} alt="Play Store"></Image>
                <h3 className='font-bold text-2xl'>
                  mobile apps
                </h3>
                <p className=''>
                  Lorem ipsum dolor sit amet. Velit officia lorem ipsum dolor consequat duis enim velit mollit.
                </p>
              </div>
            </div>


          </div>
        </div>
    )
}