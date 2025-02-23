import alan from '../../assets/alan1.png'
import Depoimentos from '../depoimentos/Depoimentos';
import Sobre from '../sobre/Sobre';

function Home() {
    const calendar = `https://calendar.app.google/1yfoC2DBV5Vb5mE99`;
    return (
        <>
            <section id="home" className=" w-full h-full md:h-screen flex md:flex-col items-center pt-16 md:py-12 px-2 mx-0 justify-center overflow-y-hidden">
                <div className="container h-full flex-row md:flex items-center justify-between px-2 md:px-6 ">
                    <div className=" flex flex-col place-items-center justify-evenly w-full h-full text-center">
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


                    <div className='pt-2  container relative mx-auto w-[40vh] h-[50vh] md:h-[80vh] md:w-[100vh] mb-[-2.0rem] overflow-y-hidden'>
                        <img src={alan} alt="" className='h-full md:h-auto rounded-se-full rounded-ss-full flex justify-start md:mt-0 items-start' />
                    </div>
                </div>

            </section>

            <section id="sobre" className='pt-12 md:pt-0'>
                <Sobre />
            </section>
            <section id="depoimentos" className='bg-cor1 pt-12 md:pt-0'>
                <Depoimentos />
            </section>
            <section id="contato" className='pt-12 md:pt-0'>
            </section>
            <section id="razoes" className='pt-11 md:pt-3'>
            </section>
        </>
    )
}

export default Home