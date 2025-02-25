import { SVGProps } from 'react';
import terapia from '../../assets/terapia.jpg'

function Contato() {
    return (
        <>
            <div className='grid'>
                <h2 className='font-bold font-corpo2 text-3xl text-center xl:text-left py-3 bg-cor4 md:bg-inherit text-white md:text-slate-600 md:pl-2'>Contato</h2>

                <div className="p-4 text-center text-2xl font-corpo2"> Realizo atendimentos online
                    <p className='py-2'>Entre em contato e agende sua consulta </p>
                </div>

                <div className='grid md:grid-cols-6'>
                    <div className="md:col-span-3 space-y-4 pl-4 flex flex-col justify-center items-start">
                        <div className="flex items-center gap-2">
                            <PhoneIcon className="h-5 w-5 text-muted-foreground " />
                            <p className="text-muted-foreground font font-corpo2 text-xl "> +55 (21) 97461-1141 </p>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <MailIcon className="h-5 w-5 text-muted-foreground" />
                            <p className="text-muted-foreground font font-corpo2 text-xl">alan.cristofher@outlook.com</p>
                        </div>
                    </div>
                    <div className='md:col-span-3'>
                        <img src={terapia} alt="" className='mr-10 rounded-2xl flex justify-center object-contain p-2 md:h-72' />
                    </div>
                </div>
            </div>
        </>
    )
}


function PhoneIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
    )
}


function MailIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}

export default Contato