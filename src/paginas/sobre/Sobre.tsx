import freud from '../../assets/freud.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import alan2 from '../../assets/alan2.jpg'
import alan5 from '../../assets/alan5.png'
import alan11 from '../../assets/alan11.jpg'
import alan15 from '../../assets/alan15.jpg'
import alan14 from '../../assets/alan14.jpg'

function Sobre() {

  const imagens = [
    { imagem: alan2 },
    { imagem: alan5 },
    { imagem: alan11 },
    { imagem: alan15 },
    { imagem: alan14 },
  ]
  return (

    <>
      <h2 className='font-bold text-3xl text-center xl:text-left py-3 bg-cor4 md:bg-inherit text-white md:text-slate-600 font-corpo2 md:pl-2'>Sobre mim</h2>
      <div className="justify-around py-1 text-slate-600">

        <div className="justify-around font-corpo2 text-xl">

          <div className='px-3'>
            <p className="text-justify py-2 ">
              Meu nome é Alan C. S. Ribeiro, sou Psicólogo (CRP 05/60417), formado pela Universidade Estácio de Sá em 2019. Atuo com abordagem psicanalítica e dedico meu trabalho a ajudar você a compreender os aspectos mais profundos da sua mente. Acredito que, por meio da escuta atenta e da análise individualizada, é possível ressignificar experiências, fortalecer recursos internos e promover um verdadeiro processo de transformação.</p>

            <p className='py-2 text-justify'>
              Meu compromisso é oferecer um espaço seguro e acolhedor, onde você possa explorar suas emoções, identificar padrões inconscientes e desenvolver um maior autoconhecimento.                        </p>

            <p className='py-2 text-justify'>
              Além da minha atuação profissional, sou um amante da natureza, apaixonado por livros e música. Esses interesses também refletem minha visão sobre a importância do equilíbrio e do bem-estar na vida.                        </p>

            <p className='py-2 text-justify'>
              Se você deseja iniciar uma jornada de autoconhecimento e crescimento pessoal, estou aqui para acompanhá-lo. Agende uma consulta e dê o primeiro passo para essa mudança!                        </p>
          </div>

        </div>
        <div className='text-white bg-gradient-to-tl from-blue-500 to-blue-300 md:bg-none flex flex-col md:flex md:flex-row justify-center items-center py-2 my-4 border-4 border-blue-200 border-x-transparent rounded-xl md:border-0 '>
          <p className='md:bg-gradient-to-tl from-blue-500 to-blue-300 italic text-center font-corpo2 m-1 px-2 md:w-[45vh] text-3xl md:border-x-2 md:border-blue-200 my-4 md:shadow-2xl rounded-2xl '>
            "
            <span className="text-xl text-center">
              Nenhum ser humano é capaz de esconder um segredo. </span>
              <br />
            <span className='text-xl pl-10 md:pl-0 text-center'> Se a boca se cala, falam as pontas dos dedos.</span>
            "
          </p>
          <div className='flex flex-col md:grid-flow-col p-4 items-center md:text-slate-600 justify-center font-medium font-corpo2 italic text-lg'>
            <img src={freud} alt='' className='hidden md:block rounded-full w-auto md:h-28 shadow-2xl border-2' />
            <p className='text-center border-t-4 border-blue-200 pt-2 md:border-t-0'>Sigmund Freud</p>
            <p className='text-center'>Neurologista e Psicanalista</p>
          </div>
        </div>
        <div className='flex justify-center w-full h-full'>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 4,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            className="bg-inherit w-full max-w-8xl"
          >
            {imagens.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center m-10 mx-5 h-auto text-center">
                  <img src={slide.imagem} alt={`Slide ${index + 1}`} className="shadow-full  bg-cover bg-center h-80 w-auto rounded-3xl object-cover  flex justify-center items-center" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Sobre