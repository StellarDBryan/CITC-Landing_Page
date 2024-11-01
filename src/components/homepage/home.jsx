import Image from "next/image";
import { SolutionCard, ServiceCard } from "@/components/ui/cards.jsx";
import { InfiniteMovingCards } from "../ui/infinite_moving_cards";
import Link from "next/link";

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
    'services': {
        'intro': 'Descubre todo lo que tenemos por ofrecer',
        'services': {
            'intro': '¡Ven a conocernos en nuestras instalaciones!', 
            'go_to': 'Ir a Servicios →',
            'description': 'Conoce nuestras instalaciones y apoyos que ofrecemos para el impulso tecnológico en Chihuahua',
            'bg_img': '/images/photos/LivingLabCUU_01.jpg', 
            'bg_alt': 'Living Lab CUU',
            'icon': '/images/icons/service_white.png',
            'icon_alt': 'Service Icon',
        }, 
        'news': {
            'intro': '¡Entérate de nuestras ultimas tendencias!', 
            'go_to': 'Ir a Noticias →',
            'description': 'Mantente al día con las novedades, eventos y logros que impulsan la tecnología en Chihuahua',
            'bg_img': '/images/photos/news_img_01.jpeg', 
            'bg_alt': 'Conference on Living Lab CUU',
            'icon': '/images/icons/news_white.png',
            'icon_alt': 'News Icon',
        }, 
        'contact': {
            'intro': '¡Conéctate con nosotros y apoya el ecosistema tecnológico!', 
            'go_to': 'Ir a Contacto →',
            'description': 'Contáctanos y descubre cómo podemos impulsar juntos la innovación ',
            'bg_img': '/images/photos/contact_img_01.jpeg', 
            'bg_alt': 'Cluster members in Living Lab CUU',
            'icon': '/images/icons/contact_white.png',
            'icon_alt': 'Contact Icon',
        }, 
    }
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
                <div className="bg-light-gradient h-full flex flex-col justify-center items-center space-y-10">
                    <h4 className="font-semibold text-blue-dark-citc text-h4">{text.solutions.text}</h4>
                    <div className="w-auto h-auto flex flex-wrap space-x-10">
                        <SolutionCard 
                            img_src={'/images/icons/networking_gray.png'}
                            img_alt={'Networking Icon'}
                            img_w={199}
                            img_h={194}
                            solution_text={text.solutions.s1}
                            redirection_url={'/contacto'}
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
            <section className="w-full h-[800px]">
                <div className="w-full h-full flex flex-col items-center space-y-5">
                    <h4 className="text-h4 font-semibold text-blue-dark-citc">{text.services.intro}</h4>
                    <div className="w-full h-auto flex flex-row flex-wrap items'center justify-center space-x-10">
                        <Link href="/servicios" className="w-auto h-auto">
                            <ServiceCard 
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
                        <Link href="/noticias" className="w-auto h-auto">
                            <ServiceCard 
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
                        <Link href="/contacto" className="w-auto h-auto">
                            <ServiceCard 
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

export function Associates(){

    const associate_logos_1 = [
        {
            name: '360Solutions', 
            image: '/images/associates/360Solutions_black.png', 
        },
        {
            name: 'AdNConsulting', 
            image: '/images/associates/AdNConsulting_black.png', 
        }, 
        {
            name: 'BuildBinder', 
            image: '/images/associates/BuildBinder_black.png', 
        }, 
        {
            name: 'AutoZone', 
            image: '/images/associates/DataZone_black.png', 
        }, 
        {
            name: 'IntegralVending', 
            image: '/images/associates/IntegralVending_black.png', 
        }, 
        {
            name: 'Intelectix', 
            image: '/images/associates/Intelectix_black.png', 
        }, 
        {
            name: 'JobSistemas', 
            image: '/images/associates/JobSistemas_black.png', 
        }, 
        {
            name: 'LeadingTech', 
            image: '/images/associates/LeadingTech_black.png', 
        }, 
    ];

    const associate_logos_2 = [
        {
            name: 'Madata', 
            image: '/images/associates/madata_black.png', 
        }, 
        {
            name: 'Pax', 
            image: '/images/associates/pax_black.png', 
        }, 
        {
            name: 'PIDElectronics', 
            image: '/images/associates/PIDElectronics.jpg', 
        }, 
        {
            name: 'PPAPManger', 
            image: '/images/associates/PPAPManger.jpg', 
        },
        {
            name: 'Resideo', 
            image: '/images/associates/resideo.jpg', 
        }, 
        {
            name: 'Sitek', 
            image: '/images/associates/Sitek.jpg', 
        }, 
        {
            name: 'TGC', 
            image: '/images/associates/TGC.jpg', 
        }, 
        {
            name: 'Tisco', 
            image: '/images/associates/Tisco.jpg', 
        },
    ]

    return (
        <>
            <section className="w-full h-[800px]">
                <InfiniteMovingCards items={associate_logos_1} direction="right" />
                <InfiniteMovingCards items={associate_logos_2} direction="left" />
            </section>
        </>
    );
}