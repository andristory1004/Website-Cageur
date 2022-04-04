import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Phone from '../../asset/images/phone.png'
import sectionImage from '../../asset/images/sectionImage.png'

export default function section4() {
    return (
        <div>
            <div className='bg-green'>
                <div className='bg-gray lg:flex justify-center items-center'>
                    <div className='bg-green w-full px-5 py-5 text-center'>
                        <Image src={sectionImage} alt="SectionImage"></Image>
                    </div>
                    <div className='w-full px-5 py-5 lg:space-y-10 space-y-5'>
                        <motion.div
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
                            <h2 className="font-bold text-2xl lg:text-5xl text-center lg:text-left">
                                Mau mendaftarkan keluarga yang sakit tapi anda lagi diluar rumah pakai Saja <Link href=""><a className="font-bold text-2xl lg:text-5xl text-green">Cageur App</a></Link> Saja.
                            </h2>
                        </motion.div>
                        <motion.div
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
                            <p>
                                bagi anda yang lagi sibuk di kantor atau kebetulan lagi diluar rumah, namun dapat berita keluarga anda sakit dan harus diperiksa ke klinik segera namun takut ga keburu daftar antrian, tenang saja kini apps cageur siap memberikan layanan maks untuk kebutuhan pendaftaran antrian ke klinik terdekat.
                            </p>
                        </motion.div>

                    </div>
                </div>
                <div className='bg-gray lg:flex justify-center items-center'>
                    <div className='bg-green w-full px-5 py-5 lg:hidden text-center'>
                        <Image src={Phone} alt="Phone" height={370} width={200}></Image>
                    </div>
                    <div className='w-full px-5 py-5 lg:space-y-10 space-y-5'>
                        <h2 className="font-bold text-2xl lg:text-5xl text-center lg:text-left">
                            Kemudahan mencari Klinik. Disekitaran anda
                        </h2>
                        <p>
                            Selain anda mendapat kemudahan untuk membuat antrian Cageur juga memberikan informasi atau fasilitas yang ada pada klinik atau rumah sakit yang akan anda tuju serta staff medis siapa saja yang praktek di klinik atau rumah sakit tersebut pada hari yang sama
                        </p>
                    </div>
                    <div className='bg-green w-full px-5 py-5 hidden lg:block text-center'>
                        <Image src={Phone} alt="Phone" height={540} width={300}></Image>
                    </div>
                </div>
            </div>
        </div>
    )
}