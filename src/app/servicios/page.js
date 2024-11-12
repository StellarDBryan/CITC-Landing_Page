"use client";

import { Tabs } from "@/components/ui/tabs";
import { CITC_Card } from "@/components/ui/cards";

export default function Servicios(){

    const text = {
        'citc': {
            'title_1': 'Conexión', 
            'content_1': '¡Establece conexiones clave!\n Acércate con empresas líderes del sector de TI y universidades. Facilitamos relaciones estratégicas que potencian tu crecimiento profesional y empresarial. \n Contactamos con distintas instituciones con las que tenemos convenio para que nuestros socios tengan más cercanía y contacto directo con la comunidad estudiantil y empresarial. \n Empieza por contactarnos en el apartado de Contacto. ',
            'button_1': 'Contactar',
            'title_2': 'Espacio', 
            'button_2': 'Ver Living Lab CUU',
            'content_2': '¡Trabaja y colabora en el corazón del Networking de Chihuahua!\n Nuestro Living Lab CUU es más que un espacio de coworking; es un hub de innovación donde las ideas florecen y las oportunidades surgen. \nNuestras instalaciones cuentan con distintos planes de servicio de renta por el espacio, desde tener una oficina exclusiva para ti, como hasta usar nuestro auditorio y el espacio de cowork. \nCheca cada servicio en el apartado de Living Lab CUU. ', 
            'title_3': 'Eventos', 
            'content_3': '¡Sé parte de eventos que transforman la industria IT!\n Desde conferencias hasta hackathones, fomentamos el aprendizaje, la innovación y el crecimiento en cada encuentro. \n Por medio de nuestras redes sociales y el Living Lab, promocionamos distintos eventos empresariales y de innovación, y ofrecemos nuestro espacio como sede para estas iniciativas. \n ¡Contáctanos y conoce muchos más eventos en nuestras redes sociales!', 
            'button_3': 'Ver eventos en redes',
        }
    }

    const services = [
        {
            title: 'CITC', 
            content: (
                <>
                    <div className="flex flex-col flex-wrap items-center justify-center">
                        {/* <Card
                            isPressable
                            isHoverable
                            className="relative group shadow-2xl rounded-none w-[250px] h-[500px] overflow-hidden text-regular-dark"
                        >
                            <CardBody className=" h-full w-full flex space-y-5 items-center justify-center">
                                <h5 className="font-semibold text-h5">{text.citc.title_1}</h5>
                                <p className="text-h6 font-medium">{text.citc.content_1}</p>
                                
                            </CardBody>
                        </Card> */}
                        <CITC_Card title={text.citc.title_1} content={text.citc.content_1} button_text={text.citc.button_1}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
                                    <path fill="currentColor" 
                                        d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"/>
                                </svg>
                            }
                        />
                        <CITC_Card title={text.citc.title_2} content={text.citc.content_2} button_text={text.citc.button_2}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
                                    <path fill="currentColor" 
                                        d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zM1 21V11l7-5l7 5v10h-5v-6H6v6zm16 0V10l-7-5.05V3h13v18z"/>
                                </svg>
                            }
                        />
                        <CITC_Card title={text.citc.title_3} content={text.citc.content_3} button_text={text.citc.button_3}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 36 36">
                                    <path fill="currentColor" 
                                        d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-solid clr-i-solid-path-1"/>
                                <path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-solid clr-i-solid-path-2"/><path fill="currentColor" d="M32.25 6h-4v3a2.2 2.2 0 0 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6m-6.31 10.58l-9.67 9.67L11 20.94A1.36 1.36 0 0 1 12.9 19l3.38 3.38L24 14.66a1.36 1.36 0 1 1 1.93 1.93Z" class="clr-i-solid clr-i-solid-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                            }
                        />
                    </div>
                </>
            ),
        }, 
        {
            title: 'Living Lab CUU'
        }
    ]

    return(
        <>
            <section className="w-full lg:h-[2000px] flex flex-col items-center justify-center lg:pt-28 dark:text-gray-clear-citc">
                <Tabs tabs={services} tabClassName={'bg-transparent'} contentClassName={'h-auto'} />
            </section>
        </>
    );
}