import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import alan1 from '../../assets/alan1.png'
import alan2 from '../../assets/alan2.png'
import alan3 from '../../assets/alan3.png'
import alan5 from '../../assets/alan5.png'
import alan6 from '../../assets/alan6.png'
import alan7 from '../../assets/alan7.png'
import alan8 from '../../assets/alan8.png'





function Sobre() {

    const imagens = [
        {imagem: alan1},
        {imagem: alan2},
        {imagem: alan3},
        {imagem: alan5},
        {imagem: alan6},
        {imagem: alan7},
        {imagem: alan8},
    ]
    return (

        <>
            <h2 className='font-bold text-3xl text-center xl:text-left py-3 bg-cor4 md:bg-inherit text-white md:text-slate-600 font-corpo md:pl-2'>Sobre mim</h2>
            <div className="justify-around py-1 text-slate-600">

                <div className="justify-around font-nome text-xl">


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
        className="bg-inherit w-full max-w-8xl center"
      >
        {imagens.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-start   mb-12 mx-5 h-auto text-center">
              <img src={slide.imagem} alt={`Slide ${index + 1}`} className="shadow-xl  bg-cover bg-center h-72 w-auto rounded-2xl object-cover  flex justify-center items-center" />
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