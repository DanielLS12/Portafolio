import { Link } from 'react-router-dom';
import ContactIcons from "@components/ContactIcons";
import photo from '@assets/myphoto/myphoto1.png'

function Introduction() {
  return (
    <section className="max-[1024px]:container xl:container mx-auto flex flex-col justify-between gap-12 lg:gap-4 lg:flex-row items-center px-3 lg:px-10">
        <div className="flex flex-col gap-3 text-gray-200 saturate-200">     
          <span className="text-4xl min-[345px]:text-4xl min-[456px]:text-5xl 2xl:text-6xl text-center sm:text-left text-orange-100">
            Hola amigo 
          </span>
          <span className="text-5xl min-[345px]:text-6xl min-[456px]:text-6xl 2xl:text-7xl text-center sm:text-left min-[456px]:font-semibold">
            Me llamo <h2 className='inline-block'>Daniel Luna</h2>
          </span>
          <div className="flex flex-col gap-2 min-[525px]:flex-row justify-start min-[525px]:justify-between min-[525px]:items-center">
            <h3 className="text-orange-200 text-[1.3em] min-[345px]:text-[1.7em] min-[456px]:text-3xl 2xl:text-4xl text-center">
              Desarrollador Front end 👨‍💻
            </h3>
            <ContactIcons className="custom_contact_icons"/>
          </div>
          <div className="lg:max-w-2xl 2xl:max-w-3xl">
            <p className="leading-8 2xl:leading-relaxed text-left text-lg 2xl:text-xl">
              Dedicado a brindar servicios digitales con diferentes tecnologías, en busca de oportunidades para afrontar nuevos retos y resolver problemas del mundo real en código, apasionado por la programación 💻, la música 🎵 y las películas de ciencia ficción y sobrenatural 🎬.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 justify-between sm:justify-around py-2">
            <button className="p-4 text-xl tracking-wider sm:p-3 bg-gray-700 rounded-md shadow-gray-500 shadow-[5px_5px_2px_-2px_rgba(0,0,0,0.3)] sm:hover:scale-105 transition duration-300 ease-out">Ver curriculum</button>
            <Link to="/Proyectos" className="p-4 text-xl tracking-wider sm:p-3 bg-[#8F1300] rounded-md shadow-orange-500  shadow-[5px_5px_2px_-2px_rgba(0,0,0,0.3)] sm:hover:scale-105 transition duration-300 ease-out text-center">Ver proyectos</Link>
          </div>
        </div>
        <div className="px-5 saturate-150 lg:px-0 contrast-125 brightness-90 hidden lg:block">
          <img
            className="mx-auto rounded-full filter_shadow_orange"
            src={photo}
            width="493px"
            height="507px"
            alt="myphoto"
            loading='lazy'
            decoding='async'
          />
        </div>
    </section>
  )
}

export default Introduction