import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import avatar from '../../assets/avatar.png'

function Depoimentos() {


    const depoimento = [
        {
            imagem: avatar,
            nome: "M. J. P.",
            faixa: "40 a 50 anos",
            descricao: "A experiência com o Alan foi transformadora. [...] A cada sessão, senti uma melhora na minha percepção sobre mim mesma e sobre os outros. Ele me ajudou a entender e enfrentar questões de autossabotagem que estavam me impedindo de viver plenamente."
        },
        {
            imagem: avatar,
            nome: "R. S. L.",
            faixa: "20 a 30 anos",
            descricao: "Eu estava passando por uma fase difícil e foi a terapia com o Alan que me deu ferramentas para lidar melhor com a ansiedade e os desafios diários. Hoje me sinto mais confiante e em paz comigo mesma."
        },
        {
            imagem: avatar,
            nome: "L. M. C.",
            faixa: "50 a 60 anos",
            descricao: "Cheguei ao Alan em um momento de crise, sem saber como resolver meus problemas. [...] Com o acompanhamento dele, consegui não só entender melhor as causas dos meus sentimentos, mas também encontrar soluções práticas para melhorar meu dia a dia."
        },
        {
            imagem: avatar,
            nome: "A. F. S.",
            faixa: "30 a 40 anos",
            descricao: "O trabalho realizado com o Alan tem sido essencial para o meu desenvolvimento pessoal. Aprendi a lidar com minhas emoções e agora tenho mais controle sobre minhas reações, o que trouxe mais equilíbrio para minha vida."
        },

    ]
    return (

        <>
            <div className="bg-cor1">
                <h2 className='font-bold font-corpo2 text-3xl text-center xl:text-left py-3 bg-cor4 md:bg-inherit text-white md:text-slate-600 md:pl-2'>
                    Depoimentos
                </h2>


                <div className='flex flex-col justify-center items-center  h-full w-full'>
                    <div className="p-4 text-center text-2xl font-corpo2">Aqui alguns depoimentos de pacientes</div>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={40}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1280: {
                                slidesPerView: 3,
                            },
                        }}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000 }}
                        className=" w-full flex items-center justify-center max-w-7xl mx-5"
                    >
                        {depoimento.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className=" flex flex-col items-center justify-start h-auto text-center px-2 shadow-2xl rounded-3xl my-2 md:px-1">
                                    <img src={slide.imagem} alt={`Slide ${index + 1}`} className=" bg-cover bg-center h-32 w-auto rounded-2xl object-cover  flex justify-center items-center" />

                                    <div className=" px-2 pt-3 ">
                                        <p className="text-center py-2 text-2xl font-corpo2"> {slide.nome}</p>
                                        <p className="text-center py-2 text-xl font-corpo2"> {slide.faixa}</p>
                                        <p className="text-justify text-lg py-3 mb-10 mx-6 font-corpo2 h-[25vh] md:h-[35vh]"> {slide.descricao}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default Depoimentos