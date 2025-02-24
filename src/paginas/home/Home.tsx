import alan from '../../assets/alan1.png'
import Depoimentos from '../depoimentos/Depoimentos';
import Psicanalise from '../psicanalise/Psicanalise';
import Sobre from '../sobre/Sobre';

function Home() {
    const calendar = `https://calendar.app.google/1yfoC2DBV5Vb5mE99`;
    return (
        <>
            <section id="home" className="w-full  flex justify-end  items-end  pt-16 px-2 mx-0 md:h-screen md:flex-col md:items-start md:justify-start md:overflow-y-hidden">
                <div className=" container h-full flex-row md:flex md:items-center items-end justify-end md:justify-start px-2 md:px-6 mb-[-3rem] overflow-y-hidden ">
                    <div className=" flex flex-col place-items-center justify-evenly w-full h-full space-y-2 text-center">
                        <div>
                            <h1 className=" h-auto flex justify-evenly text-4xl text-cor3  md:text-5xl lg:text-6xl/none">
                                <p className='font-nome5 py-2 text-5xl md:text-6xl'>Alan Cristofher Ribeiro</p>
                            </h1>
                        </div>
                        <div className="h-auto flex justify-center items-center w-full ">
                            <p className='py-3 text-cor4 text-2xl md:text-3xl font-nome w-full md:w-[75vh]'>Aqui, você encontra um espaço seguro para ser ouvido.
                            </p>
                        </div>

                        <div className="h-auto md:space-x-1 py-2 flex justify-center items-center">

                            <a
                                href={calendar}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-cor3 text-white border-3 rounded-lg p-2  md:m-2 font-nome text-2xl animate-pulse"
                            >
                                Agende sua consulta
                            </a>

                        </div>
                    </div>


                    <div className='container flex justify-center mx-auto w-[40vh] h-[50vh] md:h-[70vh] md:w-auto'>
                        <img src={alan} alt="" className='h-full md:h-auto rounded-se-full rounded-ss-full flex justify-end md:mt-0 items-end' />
                    </div>
                </div>

            </section>

            <section id="sobre" className='pt-12 md:pt-0'>
                <Sobre />
            </section>
            <section id="servicos" className='bg-cor1 pt-12 md:pt-0'>
                <Psicanalise />
            </section>
            <section id="depoimentos" className='bg-inherit pt-12 md:pt-0'>
                <Depoimentos />
            </section>
            <section id="contato" className=''>
            </section>
            <section id="razoes" className=''>
            </section>
        </>
    )
}

export default Home