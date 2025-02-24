import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import alan1 from '../../assets/alan1.png'
import terapia from '../../assets/terapia.jpg'




function Servicos() {
    const servicos = [
        {
            imagem: terapia,
            titulo: "Terapia Individual",
            descricao:
                "A terapia individualizada é um processo único, adaptado às necessidades e objetivos de cada cliente. Utilizo diversas abordagens para ajudar você a enfrentar desafios emocionais, desenvolver autoconhecimento e promover o bem-estar mental.",
        },
        {
            imagem: alan1,
            titulo: "Atendimento Online",
            descricao:
                "Realizo atendimentos psicológicos online, proporcionando um espaço seguro e acolhedor para explorar questões emocionais e pessoais. Essa modalidade oferece flexibilidade e conveniência, permitindo que você cuide da sua saúde mental no conforto da sua casa."
        },
        {
            imagem: alan1,
            titulo: "Terapia de Sessão Única",
            descricao:
                "A terapia de sessão única é uma opção eficaz para quem busca resolver questões específicas em um tempo reduzido. Nessa abordagem, um único encontro pode trazer insights significativos e estratégias práticas para lidar com problemas pontuais, oferecendo suporte imediato."
        },
        {
            imagem: alan1,
            titulo: "Palestras",
            descricao:
                "Ministro palestras que abordam temas relevantes da psicologia, oferecendo informações valiosas e promovendo a reflexão. Com conhecimento no assunto, busco inspirar e educar o público, promovendo o entendimento sobre saúde mental e bem-estar emocional."
        },
        {
            imagem: alan1,
            titulo: "Orientação Profissional",
            descricao: "Ofereço suporte psicológico para quem busca clareza e direção em sua vida profissional. Ajudo você a identificar seus pontos fortes, explorar suas opções de carreira e tomar decisões mais assertivas em relação ao futuro profissional."
        }
    ];

    return (
        <>
            <div className="text-4xl font-corpo font-bold text-white md:text-slate-600 p-3 text-center bg-cor4 md:bg-white xl:text-left">
                Serviços
            </div>
            <div className="bg-white font-corpo text-center text-4xl px-2 py-1 text-slate-600 md:pb-2">
                Comece agora a priorizar sua saúde mental
            </div>

            <div className="border-2 border-green-600">
                <div className="block md:hidden">
                    <Swiper spaceBetween={10}
                        slidesPerView={1}
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 8000 }}
                        className="w-full max-w-8xl center py-2"
                    >
                        {servicos.map((servicos) => (
                            <SwiperSlide key={servicos.titulo}>
                                <div className="items-center justify-center border-2 rounded-3xl m-4 text-center">
                                    <img
                                        src={servicos.imagem}
                                        alt=""
                                        className="container rounded-2xl w-full justify-center items-center object-contain h-72"
                                    />
                                    <div className="text-cor3">
                                        <p className="text-center font-bold font-corpo text-xl py-2">
                                            {servicos.titulo}
                                        </p>
                                        <p className="font-corpo px-3 text-slate-600 font-semibold text-justify text-lg">
                                            {servicos.descricao}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Use grid layout for larger screens */}
                <div className="hidden md:block ">
                    <div className="md:grid md:grid-cols-2">
                        {servicos.map((servicos) => (
                            <div className="flex items-center justify-start border-2 rounded-3xl m-4 text-center" key={servicos.titulo}>
                                <img
                                    src={servicos.imagem}
                                    alt=""
                                    className="container rounded-2xl w-full justify-center items-center object-contain h-72"
                                />
                                <div className="text-cor3">
                                    <p className="text-center font-bold font-corpo text-xl py-2">
                                        {servicos.titulo}
                                    </p>
                                    <p className="font-corpo px-3 text-slate-600 font-semibold text-justify text-lg">
                                        {servicos.descricao}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Servicos;
