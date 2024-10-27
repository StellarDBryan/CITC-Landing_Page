import Image from "next/image";
import Link from "next/link";
import { Button, ButtonGroup } from "@nextui-org/button";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/card";

const text = {
    'about': {
        'title': '¿Quiénes somos?', 
        'description': 'Somos un grupo de empresas dedicadas a las TICs que trabajamos y colaboramos estratégicamente para la obtención de beneficios mutuos con los cuales brindamos a nuestros asociados oportunidades enfocadas a mejoras en sus procesos, certificaciones, capacidades, recursos; con la intención de alcanzar proyecciones a nivel local, nacional e internacional en beneficio de la comunidad Chihuahuense.'
    },
    'solutions': {
        'text': 'Impulso al crecimiento tecnológico', 
        's1': 'Conexión con empresas', 
        's2': 'Eventos del Sector de TI e Innovación', 
        's3': 'Espacio de trabajo y cowork',
        'button': 'Ver más',
    },
}

export default function Home(){

    return (
        <>
            <section className="relative bg-gray-700 bg-[url('/images/backgrounds/cuu_2.jpg')] bg-cover bg-center h-screen">
                <div className="flex items-center h-full w-3/4 bg-gradient-to-r from-regular-dark to-transparent to-100% bg-opacity-10">
                    <div className="lg:m-10 lg:h-2/3">
                        <Image src="/images/citc_logos/CITC_horiz-04.png"
                            alt="CITC Logo"
                            width={600}
                            height={250}/>
                        <h2 className="font-medium text-h4 text-gray-clear-citc">
                            Colaboración y Evolución Tecnológica <br /> en el corazón de Chihuahua
                        </h2>
                    </div>
                </div>
            </section>
        </>
    );
}

export function About(){

    return (
        <>
            <section className="relative bg-[url('/images/backgrounds/LP_01.jpg')] bg-cover bg-center lg:my-10 lg:items-center lg:h-auto text-gray-dark-citc">
                <div className="p-10 w-full h-full bg-light-gradient flex flex-row items-center justify-center space-x-30">
                    <div className="rounded-3xl p-3 lg:mx-10 space-y-5 lg:w-5/12 bg-gray-clear-citc bg-opacity-50">
                        <h2 className="text-h1 font-semibold text-blue-dark-citc">{text.about.title}</h2>
                        <p className="text-regular font-semibold text-justify">{text.about.description}</p>
                    </div>
                    <Image 
                        src="/images/citc_logos/CITC_Vert_Mesa_1.png"
                        alt="Chihuahua IT Cluster Logo"
                        width={432}
                        height={460}
                        className="opacity-60"
                    />
                </div>
            </section>
        </>
    );
}

export function Solutions(){

    return (
        <>
            <section className=" bg-[url('/images/backgrounds/LP_02.jpg')] bg-cover bg-center lg:my-10 lg:items-center lg:h-[600px] text-gray-dark-citc">
                <div className="bg-light-gradient h-full flex flex-col items-center">
                    <h4 className="font-semibold text-blue-dark-citc text-h4">{text.solutions.text}</h4>
                    <div className="w-auto h-auto flex flex-wrap space-x-5">
                        <Solution_Card 
                            img_src={'/images/icons/networking_gray.png'}
                            img_alt={'Networking Icon'}
                            img_w={199}
                            img_h={194}
                            solution_text={text.solutions.s1}
                            redirection_url={'/contacto'}
                        />
                        <Solution_Card 
                            img_src={'/images/icons/calendar_gray.png'}
                            img_alt={'Calendar Icon'}
                            img_w={199}
                            img_h={194}
                            solution_text={text.solutions.s2}
                            redirection_url={'https://www.facebook.com/ChihITCluster/?locale=es_LA'}
                        />
                        <Solution_Card 
                            img_src={'/images/icons/cowork_gray.png'}
                            img_alt={'Cowork Icon'}
                            img_w={199}
                            img_h={194}
                            solution_text={text.solutions.s3}
                            redirection_url={'https://livinglab.io/home?&v=latest'}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

function Solution_Card({ img_src, img_alt, img_w, img_h, solution_text, redirection_url}){

    return (
        <>
            <Card className="bg-white-darker w-[300px] h-full max-h-[400px] p-5 flex flex-col justify-center rounded-3xl">
                <CardBody className="w-auto space-y-5 flex flex-col items-center">
                    <Image 
                        src={img_src}
                        alt={img_alt}
                        width={img_w}
                        height={img_h}
                    />
                    <p className="font-semibold text-regular w-auto text-center max-h-10">{solution_text}</p>
                </CardBody>
                <CardFooter className="flex flex-col justify-center h-full items-end w-auto max-h-[60px]">
                    <a href={redirection_url} className="w-full" target="_blank" rel="noopener noreferrer">
                        <Button
                            fullWidth
                            endContent={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            }
                            className="bg-gray-clear-citc p-2 flex flex-row justify-center rounded-full space-x-3 overflow-hidden hover:drop-shadow-md"
                        >
                            <p className="font-semibold text-regular">{text.solutions.button}</p>
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </>
    );
}