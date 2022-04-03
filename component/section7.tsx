import Link from "next/link"
import Image from "next/image"
import People from '../asset/images/people.png'

export default function Section7(){
    return(
        <div className='pt-10 bg-gray'>
          <div className='px-5 lg:px-10'>
            <h2 className="font-bold text-2xl lg:text-5xl text-center">
              Masyarakat Menyukai <Link href=""><a className="font-bold text-2xl lg:text-5xl text-green">Cageur App</a></Link><br></br>Sekarang Giliran Anda
            </h2>
          </div>
          <div className='bg-green lg:mt-16 flex py-10 items-center  mt-5'>
            <div className='w-full text-center pl-5 lg:pl-0'>
              <div className='w-36 h-full lg:w-full lg:h-full '>
                <Image className='rounded-3xl' src={People} alt="People"></Image>
              </div>
            </div>
            <div className='lg:w-full px-5 '>
              <h3 className='lg:text-3xl text-center font-aku font-semibold text-white'>

                &quot; Stunning app! I use it everyday since I discovered it and love it every since. It really makes newsreading a pleasure. I enjoy all the customization options available, super highly recommended! &quot;
              </h3>
            </div>
          </div>
        </div>
    )
}