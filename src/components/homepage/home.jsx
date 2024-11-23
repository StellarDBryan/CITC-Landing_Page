"use client";

import Image from "next/image";
import { SolutionCard, ServiceCardLP } from "@/components/ui/cards.jsx";
import { motion } from 'framer-motion';
import Link from "next/link";

const text = {
    'solutions': {
        'text': 'Impulso al crecimiento tecnológico', 
        's1': 'Conexión con empresas', 
        's2': 'Eventos del Sector de TI e Innovación', 
        's3': 'Espacio de trabajo y cowork', 
        'button': 'Ver más',
    },
    'services': {
        'intro': 'Descubre todo lo que tenemos por ofrecer',
        'services': {
            'intro': '¡Ven a conocernos en nuestras instalaciones!', 
            'go_to': 'Ir a Servicios →',
            'description': 'Conoce nuestras instalaciones y apoyos que ofrecemos para el impulso tecnológico en Chihuahua',
            'bg_img': '/images/photos/workspace/LivingLabCUU_01.jpg', 
            'bg_alt': 'Living Lab CUU',
            'icon': '/images/icons/service_white.png',
            'icon_alt': 'Service Icon',
        }, 
        'news': {
            'intro': '¡Entérate de nuestras ultimas tendencias!', 
            'go_to': 'Ir a Noticias →',
            'description': 'Mantente al día con las novedades, eventos y logros que impulsan la tecnología en Chihuahua',
            'bg_img': '/images/photos/events/events_03.jpeg', 
            'bg_alt': 'Conference on Living Lab CUU',
            'icon': '/images/icons/news_white.png',
            'icon_alt': 'News Icon',
        }, 
        'contact': {
            'intro': '¡Conéctate con nosotros y apoya el ecosistema tecnológico!', 
            'go_to': 'Ir a Contacto →',
            'description': 'Contáctanos y descubre cómo podemos impulsar juntos la innovación ',
            'bg_img': '/images/photos/events/events_02.jpeg', 
            'bg_alt': 'Cluster members in Living Lab CUU',
            'icon': '/images/icons/contact_white.png',
            'icon_alt': 'Contact Icon',
        }, 
    }, 
}

export default function Home(){ 

    return (
        <>
            <section className="relative bg-gray-700 bg-[url('/images/backgrounds/cuu_2.jpg')] bg-cover bg-center h-screen">
                <div className="flex items-center h-full w-3/4 bg-gradient-to-r from-regular-dark to-transparent to-100% bg-opacity-10">
                    <motion.div 
                        initial={{translateX:-50, opacity:0}}
                        animate={{translateX: 0, opacity: 1}}
                        transition={{type:"spring", duration:1.8, delay:0.2}}
                        className="lg:m-10 lg:h-2/3"
                    >
                        <Image src="/images/logos/citc/CITC_horiz-04.png"
                            alt="CITC Logo"
                            width={600}
                            height={250}/>
                        <h2 className="font-medium text-h4 text-gray-clear-citc">
                            Colaboración y Evolución Tecnológica <br /> en el corazón de Chihuahua
                        </h2>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

export function Solutions(){

    return (
        <>
            <section className=" bg-[url('/images/backgrounds/LP_02.jpg')] bg-cover bg-center lg:my-10 lg:items-center lg:h-[600px] text-gray-dark-citc">
                <div className="bg-light-gradient h-full flex flex-col justify-center items-center space-y-10">
                    <h4 className="font-semibold text-blue-dark-citc text-h4">{text.solutions.text}</h4>
                    <div className="w-auto h-auto flex flex-wrap space-x-10">
                        <SolutionCard 
                            img_src={'/images/icons/networking_gray.png'}
                            img_alt={'Networking Icon'}
                            img_w={199}
                            img_h={194}
                            solution_text={text.solutions.s1}
                            redirection_url={'/contact'}
                            button_text={text.solutions.button}
                        />
                        <SolutionCard 
                            img_src={'/images/icons/calendar_gray.png'}
                            img_alt={'Calendar Icon'}
                            img_w={199}
                            img_h={194}
                            solution_text={text.solutions.s2}
                            redirection_url={'https://www.facebook.com/ChihITCluster/?locale=es_LA'}
                            button_text={text.solutions.button}
                        />
                        <SolutionCard 
                            img_src={'/images/icons/cowork_gray.png'}
                            img_alt={'Cowork Icon'}
                            img_w={199}
                            img_h={194}
                            solution_text={text.solutions.s3}
                            redirection_url={'https://livinglab.io/home?&v=latest'}
                            button_text={text.solutions.button}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export function Services(){

    return (
        <>
            <section className="w-full h-[600px]">
                <div className="w-full h-full flex flex-col items-center space-y-5">
                    <h4 className="text-h4 font-semibold text-blue-dark-citc">{text.services.intro}</h4>
                    <div className="w-full h-auto flex flex-row flex-wrap items'center justify-center space-x-10">
                        <Link href="/services" className="w-auto h-auto">
                            <ServiceCardLP 
                                text_intro={text.services.services.intro}
                                go_to_text={text.services.services.go_to}
                                text_description={text.services.services.description}
                                bg_img={text.services.services.bg_img}
                                bg_alt={text.services.services.bg_alt}
                                icon={text.services.services.icon}
                                icon_alt={text.services.services.icon_alt}
                                img_position={'73% 95%'}
                            />
                        </Link>
                        <Link href="/news" className="w-auto h-auto">
                            <ServiceCardLP 
                                text_intro={text.services.news.intro}
                                go_to_text={text.services.news.go_to}
                                text_description={text.services.news.description}
                                bg_img={text.services.news.bg_img}
                                bg_alt={text.services.news.bg_alt}
                                icon={text.services.news.icon}
                                icon_alt={text.services.news.icon_alt}
                                img_position={'50% 80%'}
                            />
                        </Link>
                        <Link href="/contact" className="w-auto h-auto">
                            <ServiceCardLP 
                                text_intro={text.services.contact.intro}
                                go_to_text={text.services.contact.go_to}
                                text_description={text.services.contact.description}
                                bg_img={text.services.contact.bg_img}
                                bg_alt={text.services.contact.bg_alt}
                                icon={text.services.contact.icon}
                                icon_alt={text.services.contact.icon_alt}
                                img_position={'35% 75%'}
                            />
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}