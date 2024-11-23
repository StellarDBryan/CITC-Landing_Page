"use client";

import { useState, useEffect } from 'react';
import { Tabs } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';
import { CITC_Card } from "@/components/ui/cards";
import { ServiceButton } from "@/components/ui/buttons";
import { CITCMovingCards } from "@/components/ui/infinite_moving_cards";
import { FeaturesSectionDemo } from '@/components/ui/feature_section';

const text = {
    'citc': {
        'title': 'Servicios',
        'intro': 'Explora y descubre nuestros servicios que impulsan el desarrollo tecnológico en Chihuahua y conecta al sector IT ',
        'subtitle_1': 'Conexión', 
        'associates': 'Nuestros socios',
        'universities': 'Universidades con las que contactamos',
        'content_1': '¡Establece conexiones clave!\n Acércate con empresas líderes del sector de TI y universidades. Facilitamos relaciones estratégicas que potencian tu crecimiento profesional y empresarial. \n Contactamos con distintas instituciones con las que tenemos convenio para que nuestros socios tengan más cercanía y contacto directo con la comunidad estudiantil y empresarial. \n Empieza por contactarnos en el apartado de Contacto. ',
        'button_11': 'Contactar',
        'button_12': 'Ver todos los aliados',
        'subtitle_2': 'Espacio', 
        'button_2': 'Ver Living Lab CUU',
        'content_2': '¡Trabaja y colabora en el corazón del Networking de Chihuahua!\n Nuestro Living Lab CUU es más que un espacio de coworking; es un hub de innovación donde las ideas florecen y las oportunidades surgen. \nNuestras instalaciones cuentan con distintos planes de servicio de renta por el espacio, desde tener una oficina exclusiva para ti, como hasta usar nuestro auditorio y el espacio de cowork. \nCheca cada servicio en el apartado de Living Lab CUU. ', 
        'subtitle_3': 'Eventos', 
        'content_3': '¡Sé parte de eventos que transforman la industria IT!\n Desde conferencias hasta hackathones, fomentamos el aprendizaje, la innovación y el crecimiento en cada encuentro. \n Por medio de nuestras redes sociales y el Living Lab, promocionamos distintos eventos empresariales y de innovación, y ofrecemos nuestro espacio como sede para estas iniciativas. \n ¡Contáctanos y conoce muchos más eventos en nuestras redes sociales!', 
        'button_3': 'Ver eventos en redes',
    }, 
    'livingLab': {
        'title': 'Living Lab CUU', 
        'intro': 'El Laboratorio de Innovación Tecnológica de Chihuahua. Un espacio donde la tecnología y la creatividad se unen para impulsar proyectos y fomentar la colaboración', 
        'officialSite': 'Sitio Oficial',
        'button': 'Ir al ', 
        'closing': 'Tenemos distintos planes para el acceso a distintos servicios que ofrecemos en Living Lab CUU. Ve precios, disponibilidad y todos lo detalles en su ',
        features: [
            {
                title: "Espacio de Trabajo",
                description: "Ofrecemos un entorno colaborativo exclusivo y equipado con tecnología de punta para que empresas y emprendedores desarrollen sus proyectos y trabajen en equipo de manera eficiente y productiva."
            },
            {
                title: "Salas de reuniones",
                description: "Disponemos de un auditorio y salas equipadas con las herramientas necesarias para llevar a cabo reuniones estratégicas, presentaciones y sesiones de trabajo en un ambiente profesional y cómodo."
            },
            {
                title: "Eventos",
                description: "Somos sede de distintos eventos donde se abordan temas relevantes del sector tecnológico, innovación y emprendimiento, tales como conferencias y talleres, con el objetivo de fomentar el aprendizaje continuo, la actualización profesional y el networking entre los participantes."
            },
            {
                title: "Cursos",
                description: "En nuestras instalaciones ofrecemos distintos cursos relacionados con desarrollo tecnológico, validados y apoyados por instituciones como CENALTEC, con el fin de ofrecer formación y capacitación de calidad en nuestra región."
            },
            {
                title: "Impresión 3D",
                description: "Descubre un medio de fabricación con nuestras 6 impresoras 3D. En el Living Lab CUU, ponemos la innovación al alcance de la comunidad, permitiendo la creación de prototipos, piezas personalizadas y mucho más. ¡Imagina, diseña e imprime con nosotros!"
            },
            {
                title: "Cowork",
                description: "Brindamos un espacio de trabajo para la comunidad, en el cual se podrá hacer networking con más empresas. Un espacio diseñado para inspirar colaboración, innovación y crecimiento. Conéctate con empresas y profesionales, amplía tu red de contactos, y trabaja en un ambiente que impulsa tu éxito."
            }
        ]
    }
}

export default function Servicios(){

    const workspaceImg = [
        '/images/photos/workspace/LivingLabCUU_01.jpg', 
        '/images/photos/workspace/LivingLabCUU_02.JPG', 
        '/images/photos/workspace/LivingLabCUU_03.JPG', 
        '/images/photos/workspace/LivingLabCUU_04.JPG', 
        '/images/photos/workspace/LivingLabCUU_05.jpg', 
        '/images/photos/workspace/LivingLabCUU_06.JPG', 
        '/images/photos/workspace/LivingLabCUU_07.JPG', 
        '/images/photos/workspace/LivingLabCUU_08.JPG', 
        '/images/photos/workspace/LivingLabCUU_09.JPG', 
        '/images/photos/workspace/LivingLabCUU_10.JPG', 
    ]; 

    const eventsImg = [
        '/images/photos/events/events_01.jpg', 
        '/images/photos/events/events_02.jpeg', 
        '/images/photos/events/events_03.jpeg', 
        '/images/photos/events/events_04.jpeg', 
        '/images/photos/events/events_05.JPG', 
        '/images/photos/events/events_06.jpeg', 
        '/images/photos/events/events_07.jpeg', 
        '/images/photos/events/events_08.jpeg', 
        '/images/photos/events/events_09.jpeg', 
    ];

    const livingLabIcons = [
        <svg key="0" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zM1 21V11l7-5l7 5v10h-5v-6H6v6zm16 0V10l-7-5.05V3h13v18z"/></svg>, 
        <svg key="1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M8 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 16v6H3V10a3 3 0 0 1 5.106-2.137l2.374 2.243l2.313-2.313l1.414 1.414l-3.687 3.687L9 11.46V22H7v-6zm5-11h9v9h-9v2h4.365l2.824 6h2.21l-2.823-6H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H10z"/></svg>, 
        <svg key="2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M21 17V8H7v9zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zM3 21h14v2H3a2 2 0 0 1-2-2V9h2zm16-6h-4v-4h4z"/></svg>, 
        <svg key="3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><path fill="currentColor" d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4z"/><path stroke-linecap="round" d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"/></g></svg>, 
        <svg key="4" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M2.976.922S2.007.747 2.007 2.11s.23 18.06.23 18.06s.394.666.542.635c.147-.032 2.647-.36 2.68-.364l.017-.003l.014-4.015l.028-9.2l4.412.013l-.004-.32l-4.407-.055l.006-1.62l5.224.108l.012-.338l-5.235-.152l.003-.878s-.06-.675.368-.675c.427 0 11.286.378 11.286.378s.356.012.368.258v.687l-1.107.115l-.01.439l-4.37-.134l-.006.328l4.391.09l-.005 1.508l-2.452-.01l-.003.282l2.471.007l.003.206h1.09c.004 2.57.008 5.445.006 7.727c.563.157 1.439.435 1.439.435l-1.459.21c0 .224.003.574.005.926l-.966-.35l-.68.083l1.648.59l.002.368l2.155-.292l-.008-14.8s.012-.549-.586-.566C18.512 1.774 2.976.922 2.976.922M9.484 4.32l-.005.553l1.354.031l-.03.872l-.823-.02l.023 1.804l.295-.03l.008.351l1.006.03v.568q.015 0 .024.01t.011.024v.013l.248.12a.03.03 0 0 1 .016.014a.03.03 0 0 1 .002.02l-.002.006l.433.121l-.021-2.054l.017-.018c.022 0 1.805-.008 1.805-.018l.002-.95l-1.867.012l.031-1.335zm4.36 2.482l-1.683.017l.02 1.916l1.662-.045zm-2.532 1.71l-.163.158l.218.21l.213-.204l-.268-.13zm2.522 5.695c-.03 0-8.185.899-8.185.899l3.324 1.723l9.934-1.212s-5.043-1.41-5.073-1.41m-8.237.928l.01.496l.225.114l.643.02l2.206 1.168l-.268.185l.428.29l1.36-.114l.343-.186l6.543-.795l.374.062l-.032-.517l-8.491 1.044zm.674 1.286l-.733.02l-.01 4.014l.872-.176l-.038-.935l3.406 2.495s-.027.454.032.873c.059.418.637.372.637.372l1.344-.28l.209-.242l8.272-1.529l.219.207l1.205-.248c.123-.026.22-.201.283-.315c.065-.114-.025-1.808-.005-2.34c.017-.446-.082-.426-.134-.439l-.787.135s-.217.056-.326.01c-.181-.077-.161-.207-.161-.207s.01-.222-.07-.47s-.267-.211-.267-.211l-7.362.996s-.386.058-.722.141l-1.873-.993l-.043.023a.034.033 0 0 1-.015.004l-.546.047l2.097 1.068c-.003.006-.038.008-.038.015c-.102.885-.21.992-.482 1.033l-1.44.196l-3.202-2.117z"/></svg>, 
        <svg key="5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M14.754 10c.966 0 1.75.784 1.75 1.75v4.749a4.501 4.501 0 0 1-9.002 0V11.75c0-.966.783-1.75 1.75-1.75zm-7.623 0a2.7 2.7 0 0 0-.62 1.53l-.01.22v4.749c0 .847.192 1.649.534 2.365Q6.539 18.999 6 19a4 4 0 0 1-4-4.001V11.75a1.75 1.75 0 0 1 1.606-1.744L3.75 10zm9.744 0h3.375c.966 0 1.75.784 1.75 1.75V15a4 4 0 0 1-5.03 3.866c.3-.628.484-1.32.525-2.052l.009-.315V11.75c0-.665-.236-1.275-.63-1.75M12 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6m6.5 1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"/></svg>, 
    ];

    return(
        <>
            <section className="w-full lg:h-auto space-y-5 flex flex-col items-center justify-center dark:text-gray-clear-citc">
                <div className='relative flex items-center w-full lg:h-[70vh]'>
                    <Image 
                        src="/images/photos/events/events_01.jpg"
                        alt="Events Image"
                        fill
                        objectFit='cover'
                        className='[mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)]'
                        style={{ objectPosition: '0% 45%', opacity: 1}}
                    />
                    <div className='flex flex-col lg:w-[50vw] lg:pl-20 h-full justify-center p-5 z-20 bg-gradient-to-r from-gray-clear-citc from-50% rounded-lg'>
                        <h3 className='text-h1 text-blue-dark-citc font-bold items-center justify-center'>{text.citc.title}</h3>
                        <h6 className='text-h6 text-regular-dark font-semibold lg:w-9/12'>{text.citc.intro}</h6>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <CITC_Card id="Conection" title={text.citc.subtitle_1} content={text.citc.content_1} 
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
                                <path fill="currentColor" 
                                    d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"/>
                            </svg>
                        }
                        buttons={
                            <>
                                <Link href={'/contact'} className='w-auto h-auto'>
                                    <ServiceButton>
                                        {text.citc.button_11}
                                    </ServiceButton>
                                </Link>
                                <ServiceButton>
                                    {text.citc.button_12}
                                </ServiceButton>
                            </>
                        }
                        visuals={<Conections />}
                    />
                    <CITC_Card id="Workspace" title={text.citc.subtitle_2} content={text.citc.content_2} 
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
                                <path fill="currentColor" 
                                    d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zM1 21V11l7-5l7 5v10h-5v-6H6v6zm16 0V10l-7-5.05V3h13v18z"/>
                            </svg>
                        }
                        buttons={
                            <Link href={'#LivingLabCUU'} className='w-auto h-auto'>
                                <ServiceButton>
                                    {text.citc.button_2}
                                </ServiceButton>
                            </Link>
                        }
                        visuals={<ServiceCarousel images={workspaceImg} />}
                    />
                    <CITC_Card id="Events" title={text.citc.subtitle_3} content={text.citc.content_3} 
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 36 36">
                                <path fill="currentColor" 
                                    d="M10 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-solid clr-i-solid-path-1"/>
                            <path fill="currentColor" d="M26 10a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1" class="clr-i-solid clr-i-solid-path-2"/><path fill="currentColor" d="M32.25 6h-4v3a2.2 2.2 0 0 1-4.4 0V6H12.2v3a2.2 2.2 0 0 1-4.4 0V6h-4A1.78 1.78 0 0 0 2 7.81v22.38A1.78 1.78 0 0 0 3.75 32h28.5A1.78 1.78 0 0 0 34 30.19V7.81A1.78 1.78 0 0 0 32.25 6m-6.31 10.58l-9.67 9.67L11 20.94A1.36 1.36 0 0 1 12.9 19l3.38 3.38L24 14.66a1.36 1.36 0 1 1 1.93 1.93Z" class="clr-i-solid clr-i-solid-path-3"/><path fill="none" d="M0 0h36v36H0z"/></svg>
                        }
                        buttons={
                            <a href='https://www.facebook.com/ChihITCluster/?locale=es_LA' target="_blank" rel="noopener noreferrer">
                                <ServiceButton>
                                    {text.citc.button_3}
                                </ServiceButton>
                            </a>
                        }
                        visuals={<ServiceCarousel images={eventsImg} />}
                    />
                </div>
                <div id='LivingLabCUU' className='relative flex items-center w-full lg:h-[70vh] '>
                    <Image 
                        src="/images/photos/workspace/LivingLabCUU_01.jpg"
                        alt="LivingLabCUU Image"
                        fill
                        objectFit='cover'
                        className='[mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)]'
                        style={{ objectPosition: 'center left', opacity: 1}}
                    />
                    <div className='flex flex-col lg:w-[50vw] lg:pl-20 lg:space-y-5 h-full justify-center p-5 z-20 bg-gradient-to-r from-gray-clear-citc from-70% rounded-lg'>
                        <Image 
                            src="/images/logos/citc/LivingLabCUU_logo.png"
                            alt="Living Lab CUU Logo"
                            width={500}
                            height={500}
                        />
                        <h6 className='text-h6 text-regular-dark font-semibold lg:w-9/12'>{text.livingLab.intro}</h6>
                        <a href='https://livinglab.io/home?&v=latest' target="_blank" rel="noopener noreferrer" className="inline-block max-w-[27%] rounded-full">
                            <ServiceButton>
                                {text.livingLab.button}{text.livingLab.officialSite}
                            </ServiceButton>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-around space-y-3 w-auto h-auto pb-5'>
                    <FeaturesSectionDemo features={text.livingLab.features} icons={livingLabIcons} />
                    <p className='text-regular text-center font-medium p-5 max-w-[80%]'>
                        {text.livingLab.closing}
                        <a href='https://livinglab.io/home?&v=latest' target="_blank" rel="noopener noreferrer" className='underline underline-offset-2 hover:text-blue-dark-citc hover:font-bold'>
                            {text.livingLab.officialSite}
                        </a>
                    </p>
                </div>
            </section>
        </>
    );
}

export function Conections(){

    const associates = [
        {
            name: '360Solutions', 
            image: '/images/logos/associates/360Solutions_edited.png', 
        },
        {
            name: 'AdNConsulting', 
            image: '/images/logos/associates/AdNConsulting.png', 
        }, 
        {
            name: 'BuildBinder', 
            image: '/images/logos/associates/BuildBinder_edited.png', 
        }, 
        {
            name: 'AutoZone', 
            image: '/images/logos/associates/DataZone_edited.png', 
        }, 
        {
            name: 'IntegralVending', 
            image: '/images/logos/associates/IntegralVending_edited.png', 
        }, 
        {
            name: 'Intelectix', 
            image: '/images/logos/associates/Intelectix_edited.png', 
        }, 
        {
            name: 'JobSistemas', 
            image: '/images/logos/associates/JobSistemas_edited.png', 
        }, 
        {
            name: 'LeadingTech', 
            image: '/images/logos/associates/LeadingTech_edited.png', 
        }, 
        {
            name: 'Madata', 
            image: '/images/logos/associates/madata_edited.png', 
        }, 
        {
            name: 'Pax', 
            image: '/images/logos/associates/pax_edited.png', 
        }, 
        {
            name: 'PIDElectronics', 
            image: '/images/logos/associates/PIDElectronics_edited.png', 
        }, 
        {
            name: 'PPAPManger', 
            image: '/images/logos/associates/PPAPManger_edited.png', 
        },
        {
            name: 'Resideo', 
            image: '/images/logos/associates/resideo_edited.png', 
        }, 
        {
            name: 'Sitek', 
            image: '/images/logos/associates/Sitek_edited.png', 
        }, 
        {
            name: 'TGC', 
            image: '/images/logos/associates/TGC_edited.png', 
        }, 
        {
            name: 'Tisco', 
            image: '/images/logos/associates/Tisco_edited.png', 
        },
    ];
    const universities = [
        {
            name: 'ITCHII', 
            image: '/images/logos/universities/ITCHII.png', 
        }, 
        {
            name: 'Tec Milenio CUU', 
            image: '/images/logos/universities/TecMilenio.png', 
        }, 
        {
            name: 'ULSA CUU', 
            image: '/images/logos/universities/ULSA.png', 
        }, 
    ];

    return(
        <>
            <div className="lg:max-w-[45vw] flex flex-col h-full overflow-hidden">
                <h5 className="w-full text-center text-h5 font-semibold text-blue-dark-citc">{text.citc.associates}</h5>
                <motion.div 
                    initial={{scale: 0.8}}
                    className="w-auto h-auto max-h-52"
                >
                    <CITCMovingCards items={associates} direction="right" speed='slow' />
                </motion.div>
                <h5 className="w-full text-center text-h5 font-semibold text-blue-dark-citc">{text.citc.universities}</h5>
                <motion.div 
                    initial={{scale: 0.8}}
                    className="w-auto h-auto max-h-52"
                >
                    <CITCMovingCards items={universities} direction="left" speed='normal' />
                </motion.div>
            </div>
        </>
    );
}

function wrap(min, max, value) {
    // Asegúrate de que el valor esté dentro del rango
    return ((value - min) % (max - min + 1) + (max - min + 1)) % (max - min + 1) + min;
}

export function ServiceCarousel({ images }){

    const variants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1,
        },
        exit: (direction) => {
          return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
          };
        }
      };
      
      /**
       * Experimenting with distilling swipe offset and velocity into a single variable, so the
       * less distance a user has swiped, the more velocity they need to register as a swipe.
       * Should accomodate longer swipes and short flicks without having binary checks on
       * just distance thresholds and velocity > 0.
       */
      const swipeConfidenceThreshold = 10000;
      const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
      };
    
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, images.length, page);
  
    const paginate = (newDirection) => {
        const newPage = page + newDirection; 
        if(newPage >= 0 && newPage < images.length)
            setPage([page + newDirection, newDirection]);
        else if(newPage < 0)
            setPage([images.length-1], newDirection);
        else if(newPage >= images.length)
            setPage([newPage-images.length], newDirection);
    };

    const MotionImage = motion(Image);
  
    return (
        <div className='lg:w-[50vw] lg:h-[60vh] overflow-hidden flex flex-row items-center justify-center lg:space-x-3'>
            <button className="btn btn-outline group rounded-full hover:text-gray-clear-citc hover:bg-blue-dark-citc text-regular-dark hover:border-blue-dark-citc" onClick={() => {paginate(-1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" className='rotate-180'>
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"/>
                </svg>
            </button>
            <div className='relative lg:w-[75%] lg:h-full rounded-lg overflow-hidden'>
                <MotionImage 
                    key={page}
                    src={images[imageIndex]}
                    alt={`Image ${images[imageIndex]}`}
                    fill
                    objectFit="cover"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
        
                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                    }}
                />
            </div>
            <button className="btn btn-outline group rounded-full hover:text-gray-clear-citc hover:bg-blue-dark-citc text-regular-dark hover:border-blue-dark-citc" onClick={() => {paginate(1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"/>
                </svg>
            </button>
        </div>
    );
}