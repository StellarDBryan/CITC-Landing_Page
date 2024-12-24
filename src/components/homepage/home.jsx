"use client";

import Image from "next/image";
import { SolutionCard, ServiceCardLP, ActionAreaCard } from "@/components/ui/cards.jsx";
import { easeInOut, motion } from 'framer-motion';
import Link from "next/link";
import { useState } from "react";

const text = {
    'heroSectionIntro': 'Asociación de empresas tecnológicas impulsando la innovación en Chihuahua',
    'solutions': {
        'text': 'Impulsamos el crecimiento tecnológico', 
        's1': 'Conexión con empresas', 
        's2': 'Eventos del Sector de TI e Innovación', 
        's3': 'Espacio de trabajo y cowork', 
        'button': 'Ver más',
    },
    actionAreas: {
        actionText: 'Clic para ver más →', 
        taletDevelopment: 'Talent Development', 
        businessDevelopment: 'Business Development', 
        livingLab: 'Living Lab'
    },
    'services': {
        'intro': '¡Explora y descubre cada una de nuestras iniciativas!',
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
                    <div className="w-full sm:w-auto h-auto flex flex-col md:flex-row items-center justify-around lg:justify-center flex-wrap gap-3 lg:gap-8"> 
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
            <section className="w-full h-auto py-5">
                <div className="w-full h-full flex flex-col items-center space-y-5">
                    <h4 className="text-[1.3rem] w-4/5 sm:w-auto sm:text-h5 lg:text-h4 text-center font-bold text-blue-dark-citc">{text.services.intro}</h4>
                    <div className="w-full h-auto flex flex-row flex-wrap items-center justify-center gap-5 md:gap-x-3 lg:gap-x-8">
                        <ActionAreaCard 
                            visuals={
                                <div className="relative flex justify-center text-gray-clear-citc overflow-hidden ">
                                    <Image 
                                        src="/images/icons/user_icon.png"
                                        alt="random alt"
                                        width={500}
                                        height={500}
                                        className="w-[150px] absolute z-10 bottom-9 sm:bottom-4 md:bottom-1 lg:bottom-0 transform scale-[0.63] sm:scale-[0.67] md:scale-75 lg:scale-100"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 32 32" className="transform scale-[1.1] sm:scale-[0.7] md:scale-100 transition-transform duration-1000 ease-in-out animate-none group-hover:rotate-[360deg] ">
                                        <path fill="currentColor" d="m16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"/>
                                    </svg>
                                </div>
                            }
                            bgColor={'#92d050'}
                            departmentName={text.actionAreas.taletDevelopment} 
                            actionText={text.actionAreas.actionText} 
                        />
                        <ActionAreaCard 
                            visuals={
                                <div className="relative flex w-full h-full justify-center pt-3 sm:pt-1 md:pt-3 md:pb-0 lg:pt-7 lg:pb-0 text-gray-clear-citc">
                                    <Image 
                                        src="/images/icons/business_icon.png"
                                        alt="random alt"
                                        width={500}
                                        height={500}
                                        className="w-[100px] h-[70px] sm:w-[200px] sm:h-[140px] md:h-[150px] absolute z-10 bottom-1 sm:-bottom-8 md:-bottom-3 lg:bottom-2 transform scale-100 sm:scale-[0.7] md:scale-[0.8] lg:scale-100"
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="125" height="125" viewBox="0 0 16 16" 
                                        className="group-hover:[transform:rotate3d(0,1,0,_360deg)_translateY(-10px)] md:group-hover:[transform:rotate3d(0,1,0,_360deg)_translateY(-20px)] w-[55px] sm:w-[65px] h-[65px] md:w-[90px] md:h-[90px] lg:w-[115px] lg:h-[115px] lg:group-hover:[transform:rotate3d(0,1,0,_360deg)_translateY(-25px)] transition-transform duration-1000 ease-in-out "
                                    >
                                        <g fill="currentColor">
                                            <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932c0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853c0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836c0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91c0 .542-.412.914-1.135.982V8.518z"/>
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                                            <path d="M8 13.5a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                                        </g>
                                    </svg>
                                </div>
                            } 
                            bgColor={'#1270b5'} 
                            departmentName={text.actionAreas.businessDevelopment} 
                            actionText={text.actionAreas.actionText} 
                        />
                        <ActionAreaCard 
                            visuals={
                                <div className="relative flex w-full h-full justify-center pt-7 text-gray-clear-citc ">
                                    <Image 
                                        src="/images/logos/citc/LivingLabCUU_logo.png"
                                        alt="random alt"
                                        width={500}
                                        height={500}
                                        className="w-[113px] h-[113px] sm:w-[160px] object-[1%_8%] sm:object-[0.65%_8%] sm:h-[160px] md:w-[190px] md:h-[190px] lg:w-[230px] lg:h-[230px] group-hover:transform group-hover:scale-[0.85] sm:group-hover:scale-[0.8] transition-transform duration-700 ease-in-out object-cover absolute z-10 bottom-3 sm:-bottom-4 md:bottom-0 lg:bottom-1 filter grayscale brightness-[7]" 
                                        
                                    />
                                    <svg xmlns="http://www.w3.org/2000/svg" width="270" height="270" viewBox="0 0 24 24" className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out absolute -bottom-2 sm:-bottom-[30px] md:-bottom-[18px] lg:-bottom-[21px] w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px]">
                                        <path fill="none" stroke="currentColor" strokeDasharray="16" strokeDashoffset="20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3c4.97 0 9 4.03 9 9">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"/>
                                            <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
                                        </path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="270" height="270" viewBox="0 0 24 24" className="group-hover:opacity-100 opacity-0 transition-opacity duration-500 ease-in-out absolute -bottom-2 sm:-bottom-[30px] md:-bottom-[18px] lg:-bottom-[21px] w-[150px] h-[150px] sm:w-[190px] sm:h-[190px] md:w-[220px] md:h-[220px] lg:w-[280px] lg:h-[280px] transform rotate-[180deg]">
                                        <path fill="none" stroke="currentColor" strokeDasharray="16" strokeDashoffset="20" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M12 3c4.97 0 9 4.03 9 9">
                                            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"/>
                                            <animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
                                        </path>
                                    </svg>
                                </div>
                            } 
                            bgColor={'#71bfc8'} 
                            departmentName={text.actionAreas.livingLab} 
                            actionText={text.actionAreas.actionText} 
                        />
                    </div>
                </div>
            </section>
        </>
    );
}