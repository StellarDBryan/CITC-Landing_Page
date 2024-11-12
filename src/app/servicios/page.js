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
            'content_3': '¡Sé parte de eventos que transforman la industria IT!\n Desde conferencias hasta hackathones, fomentamos el aprendizaje, la innovación y el crecimiento en cada encuentro. \n Por medio de nuestras redes sociales y el Living Lab, promocionamos distintos eventos empresariales y de innovación, y ofrecemos nuestro espacio como sede para que estas iniciativas. \n ¡Contáctanos y conoce muchos más eventos en nuestras redes sociales!', 
            'button_3': 'Ver eventos en redes',
        }
    }

    const services = [
        {
            title: 'CITC', 
            content: (
                <>
                    <div className="flex flex-row flex-wrap items-center justify-center">
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
                        <CITC_Card title={text.citc.title_1} content={text.citc.content_1} button_text={text.citc.button_1}/>
                        <CITC_Card title={text.citc.title_2} content={text.citc.content_2} button_text={text.citc.button_2}/>
                        <CITC_Card title={text.citc.title_3} content={text.citc.content_3} button_text={text.citc.button_3}/>
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
            <section className="w-full h-[700px] flex flex-col items-center justify-center lg:mt-24 dark:text-gray-clear-citc">
                <Tabs tabs={services} tabClassName={'bg-transparent'} />
            </section>
        </>
    );
}