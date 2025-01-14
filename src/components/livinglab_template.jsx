"use client";

import { ImgCarousel } from '@/components/carousel';
import Link from 'next/link';
import { motion } from "framer-motion";
import Image from 'next/image'; 
import { LivingLabBtn } from "@/components/ui/buttons";
import { FeaturesSectionDemo } from '@/components/ui/feature_section';

const livingLabIcons = [
    <svg key="0" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 16 16"><path fill="currentColor" d="M14 15V4h-3V1H2v14H0v1h7v-3h2v3h7v-1zm-8-4H4V9h2zm0-3H4V6h2zm0-3H4V3h2zm3 6H7V9h2zm0-3H7V6h2zm0-3H7V3h2zm4 6h-2V9h2zm0-3h-2V6h2z"/></svg>, 
    <svg key="1" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 14 14"><path fill="currentColor" fillRule="evenodd" d="m6.547 10.263l-2.81-2.81c.309-.517.617-1.052.922-1.584c1.016-1.766 2.008-3.49 2.938-4.387c2.524-2.524 5.981-1.06 5.981-1.06s1.463 3.457-1.06 5.981c-.89.922-2.587 1.9-4.34 2.908c-.546.315-1.097.632-1.631.952m2.14-6.532a1.582 1.582 0 1 1 3.164 0a1.582 1.582 0 0 1-3.163 0Zm-4.09-.232c-1.418-.377-2.749.321-3.93 1.404a.48.48 0 0 0 .089.765l1.905 1.148l.002-.004c.275-.46.582-.993.894-1.533c.355-.617.716-1.243 1.04-1.78m2.587 7.84l1.148 1.905a.48.48 0 0 0 .765.088c1.083-1.18 1.782-2.512 1.404-3.93c-.522.314-1.07.63-1.613.943l-.083.048c-.548.316-1.091.628-1.616.943zM2.622 9.343a2 2 0 0 1 1.402 3.46c-.222.212-.569.378-.89.506a11 11 0 0 1-1.1.358c-.367.1-.717.18-.982.233a6 6 0 0 1-.336.059l-.133.013a.5.5 0 0 1-.198-.022a.5.5 0 0 1-.241-.156a.5.5 0 0 1-.11-.22a.6.6 0 0 1-.012-.176c.003-.04.009-.086.015-.128c.013-.088.033-.203.06-.334c.053-.264.135-.612.235-.977c.1-.364.222-.754.359-1.095c.128-.321.294-.667.506-.888a2 2 0 0 1 1.425-.633" clipRule="evenodd"/></svg>, 
    <svg key="2" xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24"><path fill="currentColor" d="M17 9h2V7h-2zm0 4h2v-2h-2zm0 4h2v-2h-2zM1 21V11l7-5l7 5v10h-5v-6H6v6zm16 0V10l-7-5.05V3h13v18z"/></svg>, 
    <svg key="3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M8 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 16v6H3V10a3 3 0 0 1 5.106-2.137l2.374 2.243l2.313-2.313l1.414 1.414l-3.687 3.687L9 11.46V22H7v-6zm5-11h9v9h-9v2h4.365l2.824 6h2.21l-2.823-6H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H10z"/></svg>, 
    <svg key="4" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path fill="currentColor" d="M244.4 69.8L174.5 0h-58.2l69.8 69.8zm151.2 0L325.8 0h-58.2l69.8 69.8zM418.9 0l69.8 69.8H512V0zm0 162.9h-93.1l69.8-69.8h-58.2l-69.8 69.8h-93.1l69.8-69.8h-58.2l-69.8 69.8h-93l69.8-69.8H0v372.4C0 491.1 20.9 512 46.5 512h418.9c25.7 0 46.5-20.9 46.5-46.5V93.1h-23.3zM23.3 0H0v69.8h93.1z"/></svg>, 
    <svg key="5" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M21 17V8H7v9zm0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h1V1h2v2h8V1h2v2zM3 21h14v2H3a2 2 0 0 1-2-2V9h2zm16-6h-4v-4h4z"/></svg>, 
    <svg key="6" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4"><path fill="currentColor" d="M2 17.4L23.022 9l21.022 8.4l-21.022 8.4z"/><path strokeLinecap="round" d="M44.044 17.51v9.223m-32.488-4.908v12.442S16.366 39 23.022 39c6.657 0 11.467-4.733 11.467-4.733V21.825"/></g></svg>, 
    <svg key="7" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M2.976.922S2.007.747 2.007 2.11s.23 18.06.23 18.06s.394.666.542.635c.147-.032 2.647-.36 2.68-.364l.017-.003l.014-4.015l.028-9.2l4.412.013l-.004-.32l-4.407-.055l.006-1.62l5.224.108l.012-.338l-5.235-.152l.003-.878s-.06-.675.368-.675c.427 0 11.286.378 11.286.378s.356.012.368.258v.687l-1.107.115l-.01.439l-4.37-.134l-.006.328l4.391.09l-.005 1.508l-2.452-.01l-.003.282l2.471.007l.003.206h1.09c.004 2.57.008 5.445.006 7.727c.563.157 1.439.435 1.439.435l-1.459.21c0 .224.003.574.005.926l-.966-.35l-.68.083l1.648.59l.002.368l2.155-.292l-.008-14.8s.012-.549-.586-.566C18.512 1.774 2.976.922 2.976.922M9.484 4.32l-.005.553l1.354.031l-.03.872l-.823-.02l.023 1.804l.295-.03l.008.351l1.006.03v.568q.015 0 .024.01t.011.024v.013l.248.12a.03.03 0 0 1 .016.014a.03.03 0 0 1 .002.02l-.002.006l.433.121l-.021-2.054l.017-.018c.022 0 1.805-.008 1.805-.018l.002-.95l-1.867.012l.031-1.335zm4.36 2.482l-1.683.017l.02 1.916l1.662-.045zm-2.532 1.71l-.163.158l.218.21l.213-.204l-.268-.13zm2.522 5.695c-.03 0-8.185.899-8.185.899l3.324 1.723l9.934-1.212s-5.043-1.41-5.073-1.41m-8.237.928l.01.496l.225.114l.643.02l2.206 1.168l-.268.185l.428.29l1.36-.114l.343-.186l6.543-.795l.374.062l-.032-.517l-8.491 1.044zm.674 1.286l-.733.02l-.01 4.014l.872-.176l-.038-.935l3.406 2.495s-.027.454.032.873c.059.418.637.372.637.372l1.344-.28l.209-.242l8.272-1.529l.219.207l1.205-.248c.123-.026.22-.201.283-.315c.065-.114-.025-1.808-.005-2.34c.017-.446-.082-.426-.134-.439l-.787.135s-.217.056-.326.01c-.181-.077-.161-.207-.161-.207s.01-.222-.07-.47s-.267-.211-.267-.211l-7.362.996s-.386.058-.722.141l-1.873-.993l-.043.023a.034.033 0 0 1-.015.004l-.546.047l2.097 1.068c-.003.006-.038.008-.038.015c-.102.885-.21.992-.482 1.033l-1.44.196l-3.202-2.117z"/></svg>, 
    <svg key="8" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M14.754 10c.966 0 1.75.784 1.75 1.75v4.749a4.501 4.501 0 0 1-9.002 0V11.75c0-.966.783-1.75 1.75-1.75zm-7.623 0a2.7 2.7 0 0 0-.62 1.53l-.01.22v4.749c0 .847.192 1.649.534 2.365Q6.539 18.999 6 19a4 4 0 0 1-4-4.001V11.75a1.75 1.75 0 0 1 1.606-1.744L3.75 10zm9.744 0h3.375c.966 0 1.75.784 1.75 1.75V15a4 4 0 0 1-5.03 3.866c.3-.628.484-1.32.525-2.052l.009-.315V11.75c0-.665-.236-1.275-.63-1.75M12 3a3 3 0 1 1 0 6a3 3 0 0 1 0-6m6.5 1a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5m-13 0a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5"/></svg>, 
]; 

const content = {
    livinglab_url: 'https://livinglab.io/home?&v=latest', 
    officialSite_text: 'Sitio Oficial',
    heroSection: {
        title: "LivingLab", 
        intro: "El epicentro de la innovación y la tecnología colaborativa en la región", 
    }, 
    whatIs: {
        title: "¿Qué es el LivingLab Chihuahua?", 
        description: "El LivingLab Chihuahua es una colaboración estratégica entre el Municipio de Chihuahua y el Chihuahua IT Clúster, diseñada para fomentar el emprendimiento, la innovación y la tecnología en la región. Este centro de encuentro reúne a comunidades tecnológicas, emprendedores y actores clave del ecosistema para crear soluciones innovadoras y fortalecer la economía digital local.", 
        button: 'Ir al ', 
    }, 
    showcase: {
        title: "Un espacio donde la tecnología y la creatividad se unen para impulsar proyectos y fomentar la colaboración", 
        images: [
            '/images/photos/livinglab/LivingLabCUU_01.png', 
            '/images/photos/livinglab/LivingLabCUU_02.JPG', 
            '/images/photos/livinglab/LivingLabCUU_03.JPG', 
            '/images/photos/livinglab/LivingLabCUU_04.JPG', 
            '/images/photos/livinglab/LivingLabCUU_05.jpg', 
            '/images/photos/livinglab/LivingLabCUU_06.JPG', 
            '/images/photos/livinglab/LivingLabCUU_07.JPG', 
            '/images/photos/livinglab/LivingLabCUU_08.JPG', 
            '/images/photos/livinglab/LivingLabCUU_09.JPG', 
            '/images/photos/livinglab/LivingLabCUU_10.JPG', 
        ], 
    }, 
    services: {
        title: "¡En LivingLab Chihuahua estámos para apoyarte en tu crecimiento!", 
        features: [
            {
                title: "Corporate Suites",
                description: "Espacios privados diseñados para empresas que buscan privacidad y un ambiente profesional dentro del LivingLab."
            },
            {
                title: "Startup Launchpad",
                description: "Espacios dedicados para startups que buscan establecerse y crecer en un entorno tecnológico colaborativo. Ideales para aterrizar proyectos e impulsar innovación."
            },
            {
                title: "Espacio de Trabajo",
                description: "Ofrecemos un entorno colaborativo exclusivo y equipado con tecnología de punta para que empresas y emprendedores desarrollen sus proyectos y trabajen en equipo de manera eficiente y productiva."
            },
            {
                title: "Salas de reuniones",
                description: "Disponemos de un auditorio y salas equipadas con las herramientas necesarias para llevar a cabo reuniones estratégicas, presentaciones y sesiones de trabajo en un ambiente profesional y cómodo."
            },
            {
                title: "Media Studio",
                description: "Sala equipada para grabación y transmisión multimedia, perfecta para crear contenido profesional y transmitir eventos en vivo."
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
        ], 
        details_text: 'Tenemos distintos planes para el acceso a distintos servicios que ofrecemos en Living Lab CUU. Ve precios, disponibilidad y todos lo detalles en su ',
    }, 
    community: {
        title: "Un Hogar para la Innovación y la Ciencia", 
        description: "En LivingLab Chihuahua, ofrecemos un espacio inclusivo y colaborativo donde comunidades de innovación, tecnología y ciencia encuentran el entorno ideal para conectar, compartir conocimientos y transformar ideas en realidades. Desde meetups hasta hackatones y eventos especializados, apoyamos la creatividad y el crecimiento colectivo.", 
        logos: [
            {
                logo: '/images/logos/livinglab/startUpGrind_logo.png', 
                className: 'w-[180px] md:w-[200px]', 
            }, 
            {
                logo: '/images/logos/talent/escuelitaMaker.png', 
                className: 'w-[180px] md:w-[200px]', 
            }, 
            {
                logo: '/images/logos/livinglab/nasaSpaceAppsCUU.png', 
                className: 'w-[120px] md:w-[140px]', 
            }, 
            {
                logo: '/images/logos/livinglab/startUpCUU.png', 
                name: 'StartUp Chihuahua', 
                className: 'w-[110px] md:w-[130px]', 
            }, 
            {
                logo: '/images/logos/talent/shdh.png', 
                name: 'Super Happy Dev House', 
                className: 'w-[80px] md:w-[120px]', 
            }, 
            {
                logo: '/images/logos/livinglab/ligaAstronomicaCUU.png', 
                name: 'Liga Astronómica CUU', 
                className: 'w-[100px] md:w-[130px]', 
            }, 
            {
                logo: '/images/logos/livinglab/activo2030CUU.png', 
                className: 'w-[100px] md:w-[120px]', 
            }, 
        ], 
    }, 
    impact: {
        title: "Impulsando el Futuro, Transformando Vidas", 
        description: "LivingLab Chihuahua ha sido un catalizador de innovación y crecimiento, conectando a personas y comunidades a través de iniciativas que inspiran y transforman. Desde talleres hasta eventos de gran escala, medimos nuestro impacto en historias de éxito y en las cifras que respaldan nuestro compromiso con el desarrollo tecnológico y científico.", 
        metrics: [
            {
                name: "Casa Abierta", 
                number: 4068, 
                icon: ()=>(
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16" className="w-[50px] md:w-[80px]"><g fill="currentColor"><path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.707L8 2.207L1.354 8.853a.5.5 0 1 1-.708-.707z"/><path d="m14 9.293l-6-6l-6 6V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5zm-6-.811c1.664-1.673 5.825 1.254 0 5.018c-5.825-3.764-1.664-6.691 0-5.018"/></g></svg>
                ), 
            }, 
            {
                name: "Talleres", 
                number: 5269, 
                icon: ()=>(
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className="w-[50px] md:w-[80px]"><path fill="none" stroke="currentColor" strokeWidth="2" d="M19 7s-5 7-12.5 7c-2 0-5.5 1-5.5 5v4h11v-4c0-2.5 3-1 7-8l-1.5-1.5M3 5V2h20v14h-3M11 1h4v2h-4zM6.5 14a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7Z"/></svg> 
                ), 
            }, 
            {
                name: "Reuniones", 
                number: 5252, 
                icon: ()=>(
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className="w-[50px] md:w-[80px]"><path fill="none" stroke="currentColor" d="M5 13.5h14m-7 0V24M6.5 11V6.5H5.328a3 3 0 0 0-2.906 2.255L.5 16.25v.25h7V18c0 1.5 0 2.5.75 4c0 0 .75 1.5 1.75 1.5M17.5 11V6.5h1.172a3 3 0 0 1 2.906 2.255L23.5 16.25v.25h-7V18c0 1.5 0 2.5-.75 4c0 0-.75 1.5-1.75 1.5m-7.65-19s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C8.246 3.5 6.65 4.5 6.65 4.5zm11.3 0s1.6-1 1.6-2.25A1.75 1.75 0 0 0 17.5.5c-.966 0-1.746.784-1.746 1.75c0 1.25 1.596 2.25 1.596 2.25z"/></svg>                ), 
            }, 
            {
                name: "Conferencias", 
                number: 4315, 
                icon: ()=>(
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className="w-[50px] md:w-[80px]"><path fill="currentColor" d="M8 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 16v6H3V10a3 3 0 0 1 5.106-2.137l2.374 2.243l2.313-2.313l1.414 1.414l-3.687 3.687L9 11.46V22H7v-6zm5-11h9v9h-9v2h4.365l2.824 6h2.21l-2.823-6H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H10z"/></svg>
                ), 
            }, 
            {
                name: "Espacio de Coworking", 
                number: 70, 
                icon: ()=>(
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" className="w-[50px] md:w-[80px]"><path fill="currentColor" d="M8 12a4 4 0 1 0 0-8a4 4 0 0 0 0 8m9 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6M4.25 14A2.25 2.25 0 0 0 2 16.25v.25S2 21 8 21c1.399 0 2.472-.245 3.294-.62a4.73 4.73 0 0 1-.794-2.63c0-1.49.687-2.82 1.76-3.692a2.3 2.3 0 0 0-.51-.058zm18.25 3.75A3.75 3.75 0 0 0 18.75 14l-.102.007a.75.75 0 0 0 .102 1.493l.154.005A2.25 2.25 0 0 1 18.75 20l-.003.005l-.102.007a.75.75 0 0 0 .108 1.493V21.5l.2-.005A3.75 3.75 0 0 0 22.5 17.75m-6.5-3a.75.75 0 0 0-.75-.75l-.2.005a3.75 3.75 0 0 0 .2 7.495l.102-.007A.75.75 0 0 0 15.25 20l-.154-.005a2.25 2.25 0 0 1 .154-4.495l.102-.007A.75.75 0 0 0 16 14.75m3.5 3a.75.75 0 0 0-.75-.75h-3.5l-.102.007a.75.75 0 0 0 .102 1.493h3.5l.102-.007a.75.75 0 0 0 .648-.743"/></svg>                ), 
            },
        ], 
        totalReach_text: "Alcance Total", 
        totalReach_number: 18974, 
        people: "Personas", 
    }, 
    callToAction: {
        title: "El LivingLab Chihuahua está listo para impulsar tus ideas", 
        subtitle: "¡Únete a nuestra comunidad y reserva tu espacio hoy!", 
        button: "Reservar ahora", 
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
            <section className='w-[85%] sm:w-[90%] lg:w-4/5 mx-auto py-12 gap-3 flex flex-col items-center'>
                <h4 className='text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3rem] text-center font-extrabold text-citc-livinglab'>{content.whatIs.title}</h4>
                <div className='flex flex-col items-center w-4/5 gap-6 sm:gap-5'>
                    <div className='flex flex-col items-center sm:flex-row sm:flex-nowrap sm:items-center w-full sm:justify-center gap-1 sm:gap-5'>
                        <Image 
                            src="/images/logos/citc/CITC_horiz_Mesa_1.png" 
                            alt='CITC Logo'
                            width={500}
                            height={500}
                            className='object-cover w-[200px] h-16 sm:h-auto md:w-[230px] lg:w-[290px]'
                        /> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" className='text-cyan-600 w-[50px]'>
                            <path fill="currentColor" d="M18 12.998h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5v-5a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2"/>
                        </svg>
                        <Image 
                            src="/images/logos/livinglab/GobMunicipalCUU.png" 
                            alt='CITC Logo'
                            width={500}
                            height={500}
                            className='object-cover w-[200px] md:w-[230px] lg:w-[290px]'
                        /> 
                    </div>
                    <p className='text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] text-start sm:text-center font-medium text-regular-dark'>{content.whatIs.description}</p>
                    <a href={content.livinglab_url} target="_blank" rel="noopener noreferrer">
                        <LivingLabBtn>
                            {content.whatIs.button} {content.officialSite_text}
                        </LivingLabBtn>
                    </a>
                </div>
            </section>
        </>
    );
} 

export function Showcase(){

    return(
        <>
            <section className='w-[85%] sm:w-[90%] lg:w-4/5 flex flex-col py-10 items-center gap-5 lg:flex-row mx-auto lg:items-center lg:justify-around overflow-hidden'>
                <h4 className='text-[1.2rem] sm:text-[1.5rem] md:text-[1.8rem] lg:text-[2.25rem] font-bold text-center text-citc-livinglab lg:w-1/2 z-10'>
                    {content.showcase.title}
                </h4>
                <div className='w-full sm:w-auto flex items-center justify-center rounded-3xl overflow-hidden'>
                    <ImgCarousel images={content.showcase.images} />
                </div>
            </section>
        </>
    );
}

export function Services(){

    return(
        <>
            <section className='w-[85%] sm:w-[90%] lg:w-4/5 mx-auto py-11 flex flex-col items-center gap-5'>
                <h4 className='text-[1.4rem] sm:text-[1.75rem] md:text-[2.25rem] lg:text-[2.75rem] text-center font-extrabold text-citc-livinglab'>{content.services.title}</h4>
                <FeaturesSectionDemo features={content.services.features} icons={livingLabIcons} />
                <p className='text-[0.95rem] lg:text-[1rem] text-center font-medium sm:w-[90%] lg:w-4/5'>
                    {content.services.details_text}
                    <a href={content.livinglab_url} target="_blank" rel="noopener noreferrer" className='link hover:text-cyan-600 font-bold'>
                        {content.officialSite_text}
                    </a>.
                </p>
            </section>
        </>
    );
}

export function Community(){

    return (
        <>
            <section className="w-[85%] sm:w-[90%] lg:w-4/5 mx-auto h-auto py-10 gap-5 flex flex-col items-center text-regular-dark">
                <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[3rem] text-center font-extrabold text-citc-livinglab">{content.community.title}</h2> 
                <p className="text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] font-medium sm:text-center w-full sm:w-[90%] lg:w-4/5">{content.community.description}</p>
                <div className="w-[90%] flex flex-row items-center justify-around flex-wrap gap-y-5 gap-x-1 md:gap-x-8">
                    {content.community.logos.map((logo, id) => (
                        <div key={id} className="flex max-w-[200px] flex-col gap-2 items-center justify-center">
                            <Image 
                                src={logo.logo}
                                alt={`${logo.name} Logo`}
                                width={500}
                                height={500}
                                className={logo.className}
                            />
                            {logo.name 
                                ? <span className="text-sm1 md:text-p font-medium text-center text-wrap">{logo.name}</span> 
                                : ''}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
} 

export function Impact(){

    return(
        <>
            <section className='flex flex-col items-center w-[85%] sm:w-[90%] lg:w-4/5 py-12 h-auto mx-auto gap-3 md:gap-5'>
                <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[3rem] text-center font-extrabold text-citc-livinglab">{content.impact.title}</h2> 
                <p className="text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] font-medium sm:text-center w-full sm:w-[90%] lg:w-4/5">{content.impact.description}</p>
                <div className='flex flex-row flex-wrap items-center justify-around gap-y-2 gap-x-5 md:gap-10 text-cyan-600/70'>
                    {content.impact.metrics.map((metric, id) => (
                        <div key={id} className='flex flex-col items-center gap-0 md:gap-1'>
                            {metric.icon ? metric.icon() : ''}
                            <span className='text-[1.2rem] md:text-[1.4rem] text-center font-bold '>
                                {metric.name}
                            </span>
                            <span className='text-[1.5rem] md:text-[2rem] font-bold text-neutral-400'>
                                {metric.number}
                            </span>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col itemx-center md:items-start md:flex-row md:flex-wrap gap-2 md:gap-5'>
                    <h3 className='text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] font-extrabold text-cyan-600'>{content.impact.totalReach_text}:</h3> 
                    <div className='text-[1.7rem] sm:text-[2rem] md:text-[2.5rem] text-neutral-400 flex-row flex-wrap gap-10'>
                        <span className='font-bold'>
                            {content.impact.totalReach_number}
                        </span> <span className='font-medium'>
                            {content.impact.people}
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
}

export function CallToAction(){

    return(
        <>
            <section className='w-full h-screen relative bg-gradient-to-b from-transparent to-citc-livinglab to-40% flex items-center justify-center px-[7.5%] md:px-[5%] lg:px-[10%] py-10 overflow-hidden'>
                <div className='flex flex-col w-full sm:w-4/5 md:w-3/5 items-center gap-5 z-20'>
                    <h2 className='text-[1.5rem] md:text-[2rem] lg:text-[2.5rem] text-center font-extrabold text-gray-50'>{content.callToAction.title}</h2>
                    <p className='text-[1.2rem] md:text-[1.5rem] lg:text-[1.75rem] text-center font-semibold text-gray-50'>{content.callToAction.subtitle}</p>
                    <a href={content.livinglab_url} target="_blank" rel="noopener noreferrer">
                        <LivingLabBtn>
                            {content.callToAction.button}
                        </LivingLabBtn>
                    </a>
                </div>
                <Image 
                    src="/images/logos/citc/LivingLab_icon.png"
                    alt='LivingLab Logo'
                    width={600}
                    height={600}
                    className='absolute -right-5 top-12 sm:-right-5 sm:top-20 md:-right-8 md:top-20 lg:-right-2 lg:top-20 w-[170px] sm:w-[200px] md:w-[250px] lg:w-[300px] filter grayscale brightness-[5] opacity-50' 
                />
                <Image 
                    src="/images/logos/citc/LivingLab_icon.png"
                    alt='LivingLab Logo'
                    width={600}
                    height={600}
                    className='absolute -left-16 -bottom-10 sm:-left-20 sm:-bottom-10 md:-left-32 md:-bottom-14 lg:-left-28 lg:-bottom-16 w-[300px] sm:w-[350px] md:w-[430px] lg:w-[500px] filter grayscale brightness-[5] opacity-50' 
                />
            </section>
        </>
    );
}