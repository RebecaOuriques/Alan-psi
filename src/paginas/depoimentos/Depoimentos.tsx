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
            <h2 className='font-bold text-3xl text-center xl:text-left py-3 bg-cor4 md:bg-inherit text-white md:text-slate-600 font-corpo md:pl-2'>
                Depoimentos
            </h2>
            <div className="justify-around py-1 text-slate-600">

                <div className="justify-around font-nome text-xl">

                </div>
                <div className='flex justify-center h-full px-2 mx-2'>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
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
                        className="bg-inherit w-full max-w-8xl center mx-4"
                    >
                        {depoimento.map((slide, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex flex-col items-center justify-start mb-15 mx-5 h-auto text-center px-3">
                                    <img src={slide.imagem} alt={`Slide ${index + 1}`} className="shadow-full  bg-cover bg-center h-52 w-auto rounded-2xl object-cover  flex justify-center items-center" />
                                </div>
                                <div>
                                    <p className="text-center"> {slide.nome}</p>
                                    <p className="text-justify text-xl p-2"> {slide.descricao}</p>
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