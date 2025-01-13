"use client";

import { ImgCarousel } from '@/components/carousel';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image'; 
import { ServiceButton } from "@/components/ui/buttons";
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

const content = {
    livinglab_url: '', 
    heroSection: {
        title: "LivingLab", 
        intro: "El epicentro de la innovación y la tecnología colaborativa en la región", 
    }, 
    whatIs: {
        title: "¿Qué es el LivingLab Chihuahua?", 
        description: "El LivingLab Chihuahua es una colaboración estratégica entre el Municipio de Chihuahua y el Chihuahua IT Clúster, diseñada para fomentar el emprendimiento, la innovación y la tecnología en la región. Este centro de encuentro reúne a comunidades tecnológicas, emprendedores y actores clave del ecosistema para crear soluciones innovadoras y fortalecer la economía digital local.", 
        officialSite: 'Sitio Oficial',
        button: 'Ir al ', 
    }, 
};

export default function HeroSection(){

    return(
        <>
            <section className="w-full h-screen flex flex-col items-center md:flex-row overflow-hidden gap-0 md:gap-10 p-5 sm:p-10 md:items-center md:justify-around bg-gradient-to-b from-[#71bfc8] from-50% sm:from-40% md:from-60% lg:from-70%">
                <div className="flex flex-col w-full md:w-[45vw] items-center md:items-start md:justify-center text-gray-50 md:mb-[15vh] gap-4 ">
                    <div className="flex flex-col gap-2 lg:gap-5 items-center sm:flex-row sm:items-center sm:justify-center md:justify-start ">
                        <Image 
                            src="/images/logos/citc/LivingLab_icon.png"
                            alt="LivingLab Logo"
                            width={300}
                            height={300}
                            className="filter grayscale brightness-[5] w-[115px] lg:w-[170px]"
                        />
                        <h3 className="font-extrabold text-center sm:text-start text-h4 sm:text-h3 lg:text-h2">{content.heroSection.title}</h3>
                    </div>
                    <h5 className="font-semibold text-center md:text-start text-h6 lg:text-h5">{content.heroSection.intro}</h5>
                </div>
                <div className="relative w-[500px] h-[500px] sm:w-[500px] sm:h-[500px] rounded-full overflow-visible transform scale-[0.5] sm:scale-[0.7] lg:scale-[1] ">
                    <div className="w-[550px] h-[550px] absolute -top-[25px] sm:-top-[60px] md:-top-[25px] -left-[25px] bg-radial-gradient rounded-full" />
                    <Image 
                        src="/images/photos/workspace/LivingLabCUU_01.png"
                        alt="LivingLab photo"
                        width={300}
                        height={300}
                        className="rounded-full filter saturate-[1.30] shadow-2xl brightness-150 absolute z-10 -bottom-5 left-12 sm:bottom-[50px] sm:left-[50px] ring-gray-100 ring-[10px] ring-offset-2 w-[400px] h-[400px] object-right object-cover"
                    />
                    <Image 
                        src="/images/photos/workspace/LivingLabCUU_03.JPG"
                        alt="LivingLab photo"
                        width={300}
                        height={300}
                        className="rounded-full absolute drop-shadow-2xl object-right bottom-auto sm:-top-11 -left-7 ring-gray-100 ring-[7px] ring-offset-2 w-[200px] h-[200px] object-cover"
                    />
                    <Image 
                        src="/images/photos/workspace/LivingLabCUU_07.JPG"
                        alt="LivingLab photo"
                        width={300}
                        height={300}
                        className="rounded-full absolute z-20 drop-shadow-2xl -bottom-12 -left-20 object-right ring-gray-100 ring-[8px] ring-offset-2 w-[250px] h-[250px] object-cover"
                        style={{
                            objectPosition: '20% 50%', 
                        }}
                    />
                    <Image 
                        src="/images/photos/workspace/LivingLabCUU_08.JPG"
                        alt="LivingLab photo"
                        width={300}
                        height={300}
                        className="rounded-full absolute z-20 drop-shadow-2xl -bottom-8 -right-12 md:-right-24 lg:-right-12 object-right ring-gray-100 ring-[6px] ring-offset-2 w-[190px] h-[190px] object-cover"
                    />
                </div>
            </section>
        </>
    );
} 

export function WhatIs(){

    return(
        <>
            <section className='w-4/5 mx-auto py-12 h-screen gap-3 flex flex-col items-center'>
                <h4 className='text-[3rem] text-center font-extrabold text-citc-livinglab'>{content.whatIs.title}</h4>
                <div className='flex flex-col items-center w-4/5 gap-5'>
                    <div className='flex flex-row flex-nowrap items-center justify-center gap-5'>
                        <Image 
                            src="/images/logos/citc/CITC_horiz_Mesa_1.png" 
                            alt='CITC Logo'
                            width={500}
                            height={500}
                            className='object-cover w-[290px]'
                        /> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className='text-cyan-600 w-[50px]'>
                            <path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"/>
                        </svg>
                        <Image 
                            src="/images/logos/livinglab/GobMunicipalCUU.png" 
                            alt='CITC Logo'
                            width={500}
                            height={500}
                            className='object-cover w-[290px]'
                        /> 
                    </div>
                    <p className='text-[1.1rem] text-center font-medium text-regular-dark'>{content.whatIs.description}</p>
                    <a href='https://livinglab.io/home?&v=latest' target="_blank" rel="noopener noreferrer">
                        <ServiceButton>
                            {content.whatIs.button} {content.whatIs.officialSite}
                        </ServiceButton>
                    </a>
                </div>
            </section>
        </>
    );
}

export function Page(){

    const livingLabIcons = [
        <svg key="0" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zM1 21V11l7-5l7 5v10h-5v-6H6v6zm16 0V10l-7-5.05V3h13v18z"/></svg>, 
        <svg key="1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M8 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 16v6H3V10a3 3 0 0 1 5.106-2.137l2.374 2.243l2.313-2.313l1.414 1.414l-3.687 3.687L9 11.46V22H7v-6zm5-11h9v9h-9v2h4.365l2.824 6h2.21l-2.823-6H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H10z"/></svg>, 
        <svg key="2" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M21 17V8H7v9zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zM3 21h14v2H3a2 2 0 0 1-2-2V9h2zm16-6h-4v-4h4z"/></svg>, 
        <svg key="3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path fill="currentColor" d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4z"/><path strokeLinecap="round" d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"/></g></svg>, 
        <svg key="4" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M2.976.922S2.007.747 2.007 2.11s.23 18.06.23 18.06s.394.666.542.635c.147-.032 2.647-.36 2.68-.364l.017-.003l.014-4.015l.028-9.2l4.412.013l-.004-.32l-4.407-.055l.006-1.62l5.224.108l.012-.338l-5.235-.152l.003-.878s-.06-.675.368-.675c.427 0 11.286.378 11.286.378s.356.012.368.258v.687l-1.107.115l-.01.439l-4.37-.134l-.006.328l4.391.09l-.005 1.508l-2.452-.01l-.003.282l2.471.007l.003.206h1.09c.004 2.57.008 5.445.006 7.727c.563.157 1.439.435 1.439.435l-1.459.21c0 .224.003.574.005.926l-.966-.35l-.68.083l1.648.59l.002.368l2.155-.292l-.008-14.8s.012-.549-.586-.566C18.512 1.774 2.976.922 2.976.922M9.484 4.32l-.005.553l1.354.031l-.03.872l-.823-.02l.023 1.804l.295-.03l.008.351l1.006.03v.568q.015 0 .024.01t.011.024v.013l.248.12a.03.03 0 0 1 .016.014a.03.03 0 0 1 .002.02l-.002.006l.433.121l-.021-2.054l.017-.018c.022 0 1.805-.008 1.805-.018l.002-.95l-1.867.012l.031-1.335zm4.36 2.482l-1.683.017l.02 1.916l1.662-.045zm-2.532 1.71l-.163.158l.218.21l.213-.204l-.268-.13zm2.522 5.695c-.03 0-8.185.899-8.185.899l3.324 1.723l9.934-1.212s-5.043-1.41-5.073-1.41m-8.237.928l.01.496l.225.114l.643.02l2.206 1.168l-.268.185l.428.29l1.36-.114l.343-.186l6.543-.795l.374.062l-.032-.517l-8.491 1.044zm.674 1.286l-.733.02l-.01 4.014l.872-.176l-.038-.935l3.406 2.495s-.027.454.032.873c.059.418.637.372.637.372l1.344-.28l.209-.242l8.272-1.529l.219.207l1.205-.248c.123-.026.22-.201.283-.315c.065-.114-.025-1.808-.005-2.34c.017-.446-.082-.426-.134-.439l-.787.135s-.217.056-.326.01c-.181-.077-.161-.207-.161-.207s.01-.222-.07-.47s-.267-.211-.267-.211l-7.362.996s-.386.058-.722.141l-1.873-.993l-.043.023a.034.033 0 0 1-.015.004l-.546.047l2.097 1.068c-.003.006-.038.008-.038.015c-.102.885-.21.992-.482 1.033l-1.44.196l-3.202-2.117z"/></svg>, 
        <svg key="5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M14.754 10c.966 0 1.75.784 1.75 1.75v4.749a4.501 4.501 0 0 1-9.002 0V11.75c0-.966.783-1.75 1.75-1.75zm-7.623 0a2.7 2.7 0 0 0-.62 1.53l-.01.22v4.749c0 .847.192 1.649.534 2.365Q6.539 18.999 6 19a4 4 0 0 1-4-4.001V11.75a1.75 1.75 0 0 1 1.606-1.744L3.75 10zm9.744 0h3.375c.966 0 1.75.784 1.75 1.75V15a4 4 0 0 1-5.03 3.866c.3-.628.484-1.32.525-2.052l.009-.315V11.75c0-.665-.236-1.275-.63-1.75M12 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6m6.5 1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"/></svg>, 
    ]; 

    return(
        <>
            <section className="w-full lg:h-auto space-y-5 flex flex-col overflow-hidden items-center justify-center dark:text-gray-clear-citc">
                <div id='LivingLabCUU' className='relative flex items-center w-full lg:h-[70vh] '>
                    <Image 
                        src="/images/photos/workspace/LivingLabCUU_01.png"
                        alt="LivingLabCUU Image"
                        fill
                        className='object-cover [mask-image:linear-gradient(to_top,transparent,white_20%,white_80%,transparent)]'
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
                        <a href='https://livinglab.io/home?&v=latest' target="_blank" rel="noopener noreferrer" className="inline-block w-auto rounded-full">
                            <ServiceButton>
                                {text.livingLab.button}{text.livingLab.officialSite}
                            </ServiceButton>
                        </a>
                    </div>
                </div>
                <div className='flex flex-col text-regular-dark items-center justify-around space-y-3 w-auto h-auto pb-5'>
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

