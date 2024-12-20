"use client";

import Image from "next/image";
import { SolutionCard, ServiceCardLP } from "@/components/ui/cards.jsx";
import { motion } from 'framer-motion';
import Link from "next/link";

const text = {
    'heroSectionIntro': 'Asociación de empresas tecnológicas impulsando la innovación en Chihuahua',
    'solutions': {
        'text': 'Impulsamos el crecimiento tecnológico', 
        's1': 'Conexión con empresas', 
        's2': 'Eventos del Sector de TI e Innovación', 
        's3': 'Espacio de trabajo y cowork', 
        'button': 'Ver más',
    },
    'services': {
        'intro': 'Descubre todo lo que tenemos por ofrecer',
        'services': {
            'title': 'Servicios',
            'intro': '¡Ven a conocernos en nuestras instalaciones!', 
            'go_to': 'Ir a ',
            'description': 'Conoce nuestras instalaciones y apoyos que ofrecemos para el impulso tecnológico en Chihuahua',
            'bg_img': '/images/photos/workspace/LivingLabCUU_01.jpg', 
            'bg_alt': 'Living Lab CUU',
            'icon': '/images/icons/service_white.png',
            'icon_alt': 'Service Icon',
        },  
        'news': {
            'title': 'Noticias',
            'intro': '¡Entérate de nuestras ultimas tendencias!', 
            'go_to': 'Ir a ',
            'description': 'Mantente al día con las novedades, eventos y logros que impulsan la tecnología en Chihuahua',
            'bg_img': '/images/photos/events/events_03.jpeg', 
            'bg_alt': 'Conference on Living Lab CUU',
            'icon': '/images/icons/news_white.png',
            'icon_alt': 'News Icon',
        }, 
        'about': {
            'title': 'Nosotros',
            'intro': '¿Quiénes somos y que proponemos?', 
            'go_to': 'Ir a ', 
            'description': '¡Conóce acerca de nosotros y descubre el alcance de nuestra iniciativa en Chihuahua!',
            'bg_img': '/images/photos/events/events_06.jpeg', 
            'bg_alt': 'Presidente del CITC',
            'icon': '/images/icons/about_icon.png',
            'icon_alt': 'About Icon', 
        }, 
        'contact': {
            'title': 'Contacto',
            'intro': '¡Conéctate con nosotros y apoya el ecosistema tecnológico!', 
            'go_to': 'Ir a ',
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
            <section className="relative flex items-start  h-screen">
                <div className=" w-auto h-auto">
                    <div className="absolute w-full h-full z-40 bg-gradient-to-b from-transparent from-70% to-gray-clear-citc"/>
                    <div className="absolute w-full sm:w-10/12 h-[100vh] sm:h-full z-10 bg-gradient-to-b sm:bg-gradient-to-r from-regular-dark to-transparent"/>
                    <Image 
                        src="/images/backgrounds/cuu_2.jpg"
                        alt="CUU Image"
                        fill
                        className="w-full h-full object-cover"
                    />
                </div>
                <motion.div 
                    initial={{translateX:-50, opacity:0}}
                    animate={{translateX: 0, opacity: 1}}
                    transition={{type:"spring", duration:1.8, delay:0.2}}
                    className="flex flex-col mt-16 sm:mt-0 lg:ml-14 z-20 space-y-3 sm:space-y-0 items-center sm:items-start justify-center sm:h-5/6 sm:w-3/4 bg-inherit">
                        <Image src="/images/logos/citc/CITC_horiz-04.png"
                            alt="CITC Logo"
                            width={600}
                            height={250}
                            className="lg:h-auto lg:w-auto md:w-[450px] sm:w-[400px] sm:inline hidden" />
                        <Image 
                            src="/images/logos/citc/CITC_Vert-04.png" 
                            alt="CITC Logo"
                            width={250}
                            height={200}
                            className="inline sm:hidden"
                        />
                        <h2 className="font-semibold text-center sm:text-start text-h6 md:text-h5 lg:text-h4 text-gray-clear-citc w-full sm:w-5/6 lg:w-2/3">
                            {text.heroSectionIntro}
                        </h2>
                </motion.div>
            </section>
        </>
    );
}

export function Solutions(){

    return (
        <>
            <section className=" bg-[url('/images/backgrounds/LP_02.jpg')] bg-cover bg-center lg:my-10 lg:items-center lg:h-[600px] ">
                <div className="bg-light-gradient h-full px-5 flex flex-col items-center gap-5 lg:gap-10">
                    <h4 className="font-bold text-blue-dark-citc text-h5 text-center lg:text-h4">{text.solutions.text}</h4> 
                    <div className="w-full sm:w-auto h-auto flex flex-col md:flex-row items-center justify-around lg:justify-center flex-wrap gap-3 lg:gap-10"> 
                        <SolutionCard 
                            img_src="/images/photos/events/events_01.jpg" 
                            img_alt="Conections Image"
                            solution_text={text.solutions.s1}
                        />
                        <SolutionCard 
                            img_src="/images/photos/events/events_03.jpeg"
                            img_alt="Events Image"
                            solution_text={text.solutions.s2}
                        />
                        <SolutionCard
                            img_src="/images/photos/workspace/LivingLabCUU_01.jpg"
                            img_alt="Workspace Image" 
                            solution_text={text.solutions.s3}
                            img_position={'75% 95%'}
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
            <section className="w-full h-[600px] overflow-hidden">
                <div className="w-full h-full flex flex-col items-center space-y-5">
                    <h4 className="text-h4 font-semibold text-blue-dark-citc">{text.services.intro}</h4>
                    <div className="w-full h-auto flex flex-row flex-wrap items'center justify-center space-x-10">
                        <Link href="/services" className="w-auto h-auto">
                            <ServiceCardLP 
                                title={text.services.services.title}
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
                        <Link href="/about" className="w-auto h-auto">
                            <ServiceCardLP 
                                title={text.services.about.title}
                                text_intro={text.services.about.intro}
                                go_to_text={text.services.about.go_to}
                                text_description={text.services.about.description}
                                bg_img={text.services.about.bg_img}
                                bg_alt={text.services.about.bg_alt}
                                icon={text.services.about.icon}
                                icon_alt={text.services.about.icon_alt}
                                icon_className={'filter invert'}
                                img_position={'60% 80%'}
                            />
                        </Link>
                        <Link href="/contact" className="w-auto h-auto">
                            <ServiceCardLP 
                                title={text.services.contact.title}
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