import Link from "next/link"
import Image from "next/image"
import RSNurhayati from '../../asset/images/RSNurhayati.jpg'
import RSIntanHusada from '../../asset/images/RSIntanHusada.jpg'

export default function Section7() {
  return (
    <div className='pt-10 bg-gray'>
      <div className='px-5 lg:px-10'>
        <h2 className="font-bold text-2xl lg:text-5xl text-center">
          Rumah Sakit Yang Telah Bergabung<br></br>
          Menjadi Mitra
          <Link href=""><a className="font-bold text-2xl lg:text-5xl text-green"> Cageur App</a></Link>

        </h2>
      </div>

      <div
        id="carouselDarkVariant"
        className="carousel slide carousel-fade carousel-light relative mt-5"
        data-bs-ride="carousel"
      >

        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="1"
            aria-label="Slide 1"
          ></button>
          <button
            data-bs-target="#carouselDarkVariant"
            data-bs-slide-to="2"
            aria-label="Slide 1"
          ></button>
        </div>


        <div className="carousel-inner relative w-full overflow-hidden">

        <div className="carousel-item active relative float-left w-full">
      <img
        src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(19).webp"
        className="block w-full"
        alt="Motorbike Smoke"
      />
      <div className="carousel-caption hidden md:block absolute text-center">
        <h5 className="text-xl">First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>


          <div className="carousel-item relative float-left w-full">
            <div className="block w-full justify-center text-center">
            <Image
              src={RSIntanHusada}
              alt="RSIntanHusada"
            ></Image>
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl font-bold text-white ">RS Intan Husada Garut</h5>
              <p className='text-white'>
                Resmi Bergabung menjadi Mitra Cageur App
              </p>
            </div>
          </div>


          <div className="carousel-item relative float-left w-full">
            <div className="block w-full justify-center text-center">
            <Image
              src={RSNurhayati}
              alt="RS Nurhayati"
            ></Image>
            </div>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl font-bold text-white">RS Nurhayati Garut</h5>
              <p className='text-white'>
                Some representative placeholder content for the second slide.
              </p>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselDarkVariant"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </div>
  )
}