import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import avatar from '../../assets/avatar.png'

function Depoimentos() {


    const depoimento = [
        {
            imagem: avatar,
            nome: "E. L. T.",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            imagem: avatar,
            nome: "R. B. D.",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            imagem: avatar,
            nome: "V. V. G.",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            imagem: avatar,
            nome: "A. A. D.",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },
        {
            imagem: avatar,
            nome: "L. M. F.",
            descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        },

    ]
    return (

        <>
            <div className="bg-cor1">
                <h2 className='font-bold text-3xl text-center xl:text-left py-3 bg-cor4 md:bg-inherit text-white md:text-slate-600 font-corpo md:pl-2'>
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
                                        <p className="text-justify text-xl py-3 mb-10 mx-6 font-corpo2"> {slide.descricao}</p>
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