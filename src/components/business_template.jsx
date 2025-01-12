"use client"; 

import Image from "next/image";
import { ImgCarousel } from "./carousel";
import { ServiceButton } from "./ui/buttons"; 
import { BusinessForm } from "./forms";

const content = { 
    formBy: "Formado por...", 
    heroSection: {
        title: "Business Development", 
        intro: "Impulsando el crecimiento empresarial con soluciones tecnológicas innovadoras", 
    }, 
    ci2: {
        title: "Centro de Industria Inteligente (CI2)", 
        description: "En CI2 conectamos las necesidades de la industria manufacturera global con proveedores locales de soluciones tecnológicas.\n Trabajamos para mejorar la competitividad de la industria manufacturera local mediante el uso de tecnología y automatización.", 
    }, 
    techPlug: {
        title: "Industry + Tech Solution Plug",
        description: "Industry Tech Plug es una iniciativa del Centro de Industria Inteligente (CI2) que conecta a la comunidad industrial y tecnológica a través de eventos clave. Hasta la fecha, hemos organizado 9 eventos que han reunido a 105 participantes, fortaleciendo la colaboración y el desarrollo de soluciones innovadoras.", 
        images: [
            "/images/photos/tech_plug/TP_01.jpg", 
            "/images/photos/tech_plug/TP_02.jpeg", 
            "/images/photos/tech_plug/TP_03.jpeg", 
            "/images/photos/tech_plug/TP_04.jpeg", 
            "/images/photos/tech_plug/TP_05.jpg", 
            "/images/photos/tech_plug/TP_06.jpg", 
            "/images/photos/tech_plug/TP_07.jpg", 
            "/images/photos/tech_plug/TP_08.jpg", 
            "/images/photos/tech_plug/TP_09.jpg", 
            "/images/photos/tech_plug/TP_10.jpg", 
            "/images/photos/tech_plug/TP_11.jpg", 
        ],  
        results: [{ quantity: 9, name: "Eventos"}, { quantity: 105, name: "Participantes"}], 
        successStoriesTitle: "Casos de Éxito", 
        successStories: [
            { 
                name: "Kiuey", 
                logo: '/images/logos/business/Kiuey_logo.png', 
                className: 'w-[110px] md:w-[150px]', 
            },
            { 
                name: "PID Electronics", 
                logo: '/images/logos/associates/PIDElectronics_edited.png', 
                className: 'w-[180px] md:w-[210px]', 
            },
            { 
                name: "Eqkor Industrial Supplier", 
                logo: '/images/logos/business/Eqkor_logo.png', 
                className: 'w-[140px] md:w-[180px]', 
            },
            { 
                name: "Empresys", 
                logo: '/images/logos/business/Empresys_logo.png', 
                className: 'w-[190px] md:w-[220px]', 
            }, 
        ], 
    }, 
    c3: {
        title: "Centro de Ciberseguridad Chihuahua (C3)", 
        description: "El Centro de Ciberseguridad Chihuahua (C3) se dedica a fortalecer la conciencia sobre los riesgos de ciberseguridad en las empresas locales y en la sociedad en general. Nos enfocamos en brindar las herramientas, conocimientos y estrategias necesarias para proteger la información y los sistemas ante las amenazas digitales crecientes. A través de iniciativas educativas, colaboraciones estratégicas y programas de capacitación, buscamos posicionar a Chihuahua como un referente en la protección y seguridad digital.", 
    }, 
    cibersecuritySummit: {
        title: "Summit de Ciberseguridad", 
        description: "El Summit de Ciberseguridad es un evento emblemático organizado por el Centro de Ciberseguridad Chihuahua (C3), diseñado para conmemorar el Día Internacional de la Ciberseguridad y promover el conocimiento sobre este tema crucial. Este evento reúne a expertos, empresas y profesionales de diferentes sectores para compartir perspectivas, conocimientos y estrategias sobre cómo afrontar los retos de seguridad en el mundo digital.\nA través de conferencias, paneles y actividades interactivas, el Summit busca generar conciencia sobre la importancia de la ciberseguridad en un entorno cada vez más conectado, al mismo tiempo que fomenta el desarrollo de talento especializado y fortalece la colaboración entre los actores clave de la industria.", 
        edition_title: "Edición", 
        edition_redirect_text: "Ver transmisión de ", 
        editions: [
            {
                date: 2024, 
                results: [
                    { 
                        number: 10, 
                        name: "Conferencias", 
                        icon: () => (
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M8 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 16v6H3V10a3 3 0 0 1 5.106-2.137l2.374 2.243l2.313-2.313l1.414 1.414l-3.687 3.687L9 11.46V22H7v-6zm5-11h9v9h-9v2h4.365l2.824 6h2.21l-2.823-6H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H10z"/></svg>
                        ), 
                    }, 
                    {
                        number: 420, 
                        name: "Asistentes", 
                        icon: () => (
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><path fill="currentColor" d="M17.5 11.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0M9.5 9a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m29 0a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M18.25 21A3.25 3.25 0 0 0 15 24.25V32a9 9 0 1 0 18 0v-7.75A3.25 3.25 0 0 0 29.75 21zm-5.098 1.99q-.151.606-.152 1.26V32a10.98 10.98 0 0 0 4.087 8.557q-.227.075-.46.136A9 9 0 0 1 5.603 34.33l-1.489-5.554a3.25 3.25 0 0 1 2.299-3.98zm17.76 17.567A10.98 10.98 0 0 0 35 32v-7.75q-.002-.654-.152-1.26l6.738 1.805a3.25 3.25 0 0 1 2.298 3.98l-1.488 5.554a9 9 0 0 1-11.483 6.228"/></svg>
                        ), 
                    }
                ], 
                images: [
                    "/images/photos/cibersecuritySummits/2024/CS24_01.jpeg", 
                    "/images/photos/cibersecuritySummits/2024/CS24_02.jpeg", 
                    "/images/photos/cibersecuritySummits/2024/CS24_03.jpeg", 
                    "/images/photos/cibersecuritySummits/2024/CS24_04.jpeg", 
                    "/images/photos/cibersecuritySummits/2024/CS24_05.jpeg", 
                    "/images/photos/cibersecuritySummits/2024/CS24_06.jpeg", 
                    "/images/photos/cibersecuritySummits/2024/CS24_07.jpeg", 
                    "/images/photos/cibersecuritySummits/2024/CS24_08.jpeg", 
                ], 
                stream_link: 'https://www.facebook.com/Chihuahuafutura/videos/summit-de-ciberseguridad-2024/484067451316349/?rdid=SZ8zU3rEmM5vpBTE', 
            }, 
            {
                date: 2023, 
                results: [
                    { 
                        number: 7, 
                        name: "Conferencias", 
                        icon: () => (
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M8 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0M5 16v6H3V10a3 3 0 0 1 5.106-2.137l2.374 2.243l2.313-2.313l1.414 1.414l-3.687 3.687L9 11.46V22H7v-6zm5-11h9v9h-9v2h4.365l2.824 6h2.21l-2.823-6H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H10z"/></svg>
                        ), 
                    }, 
                    {
                        number: 200, 
                        name: "Asistentes", 
                        icon: () => (
                            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 48 48"><path fill="currentColor" d="M17.5 11.5a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0M9.5 9a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m29 0a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M18.25 21A3.25 3.25 0 0 0 15 24.25V32a9 9 0 1 0 18 0v-7.75A3.25 3.25 0 0 0 29.75 21zm-5.098 1.99q-.151.606-.152 1.26V32a10.98 10.98 0 0 0 4.087 8.557q-.227.075-.46.136A9 9 0 0 1 5.603 34.33l-1.489-5.554a3.25 3.25 0 0 1 2.299-3.98zm17.76 17.567A10.98 10.98 0 0 0 35 32v-7.75q-.002-.654-.152-1.26l6.738 1.805a3.25 3.25 0 0 1 2.298 3.98l-1.488 5.554a9 9 0 0 1-11.483 6.228"/></svg>
                        ), 
                    }
                ], 
                images: [
                    "/images/photos/cibersecuritySummits/2023/CS23_01.jpeg", 
                    "/images/photos/cibersecuritySummits/2023/CS23_02.jpeg", 
                    "/images/photos/cibersecuritySummits/2023/CS23_03.jpeg", 
                    "/images/photos/cibersecuritySummits/2023/CS23_04.jpeg", 
                    "/images/photos/cibersecuritySummits/2023/CS23_05.jpeg", 
                    "/images/photos/cibersecuritySummits/2023/CS23_06.jpeg", 
                    "/images/photos/cibersecuritySummits/2023/CS23_07.jpeg", 
                    "/images/photos/cibersecuritySummits/2023/CS23_08.jpeg", 
                ], 
                stream_link: 'https://www.facebook.com/reel/1568577367305233', 
            }
        ], 
    }, 
    internationalAllies: {
        title: "Red de Aliados Internacionales", 
        description: "El CITC colabora con empresas y organizaciones de todo el mundo para fortalecer el ecosistema tecnológico de Chihuahua. Juntos, impulsamos la innovación, el intercambio de conocimientos y el desarrollo global.", 
        allies: [
            {
                name: "Canada", 
                image: "/images/flags/canada_flag.png", 
                className: 'w-[130px] sm:w-[300px]', 
            }, 
            
            {
                name: "Suecia", 
                image: "/images/flags/sweden_flag.png", 
                className: 'w-[120px] sm:w-[240px]', 
            }, 
            
            {
                name: "Israel", 
                image: "/images/flags/israel_flag.png", 
                className: 'w-[120px] sm:w-[230px]', 
            }, 
        ], 
    }, 
    form: {
        question: "¿Quieres ser parte de nuestras iniciativas globales?", 
        intro: "¡Conecta con nosotros y ayuda a construir un futuro tecnológico más conectado!", 
    }, 
}; 

export default function HeroSection(){

    return (
        <>
            <section className="flex flex-col items-center md:flex-row lg:flex-nowrap p-5 sm:p-10 sm:items-center gap-y-0 sm:gap-y-0 gap-x-10 lg:gap-3 sm:justify-around w-full h-screen bg-gradient-to-b from-blue-light-citc from-50% sm:from-40% md:from-60% lg:from-55% overflow-hidden"> 
                <div className="flex flex-col w-full md:w-[45vw] items-center md:items-start md:justify-center text-gray-50 gap-3 sm:gap-0">
                    <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-center sm:justify-center md:justify-start sm:ml-[7vw] md:ml-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px]">
                            <path fill="currentColor" d="M2 6.75C2 5.784 2.784 5 3.75 5h13.5c.966 0 1.75.784 1.75 1.75v4.424A6.5 6.5 0 0 0 11.019 17H3.75A1.75 1.75 0 0 1 2 15.25zM4.401 18.5h6.675c.081.523.224 1.026.422 1.5H7a3 3 0 0 1-2.599-1.5M20.5 11.732A6.5 6.5 0 0 1 22 12.81V10a3 3 0 0 0-1.5-2.599zM5 7.25a.75.75 0 0 1-.75.75h-1v1.5h1A2.25 2.25 0 0 0 6.5 7.25v-1H5zm5.5 6.25a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m-6.25.5a.75.75 0 0 1 .75.75v1h1.5v-1a2.25 2.25 0 0 0-2.25-2.25h-1V14zm12.5-6a.75.75 0 0 1-.75-.75v-1h-1.5v1a2.25 2.25 0 0 0 2.25 2.25h1V8zm-2.472 5.976a2 2 0 0 1-1.441 2.496l-.584.144a5.7 5.7 0 0 0 .006 1.808l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.699 1.484.922l.494-.519a2 2 0 0 1 2.899 0l.498.525a5.3 5.3 0 0 0 1.483-.913l-.198-.686a2 2 0 0 1 1.441-2.496l.584-.144a5.7 5.7 0 0 0-.006-1.808l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.63a5.3 5.3 0 0 0-1.484-.922l-.493.518a2 2 0 0 1-2.9 0l-.498-.525a5.3 5.3 0 0 0-1.483.912zM17.5 19c-.8 0-1.45-.672-1.45-1.5S16.7 16 17.5 16s1.45.672 1.45 1.5S18.3 19 17.5 19"/>
                        </svg>
                        <h3 className="font-extrabold text-center sm:text-start text-h4 sm:text-h3 lg:text-h2">{content.heroSection.title}</h3>
                    </div>
                    <h5 className="font-semibold text-center md:text-start text-h6 lg:text-h5">{content.heroSection.intro}</h5>
                </div>
                <Image 
                    src="/images/backgrounds/businessImg.png" 
                    alt="Business Image"
                    width={600}
                    height={600}
                    className="opacity-95 object-contain w-[500px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px]"
                />
            </section>
        </>
    );
}

export function CI2(){

    return (
        <>
            <section className="flex w-full items-center justify-center py-10 lg:py-16 text-regular-dark">
                <div className="flex flex-col lg:flex-row flex-nowrap w-[85%] sm:w-[90%] lg:w-4/5 items-center justify-center gap-5 lg:gap-10">
                    <div className="flex flex-col w-full sm:w-4/5 lg:w-2/5 gap-5">
                        <div className="flex flex-col sm:items-center gap-3 ">
                            <h3 className="text-h5 sm:text-h4 lg:text-h3 font-bold text-blue-light-citc">{content.ci2.title}</h3> 
                            <div className="w-full h-1 bg-blue-900 rounded-full" /> 
                        </div> 
                        <p className="text-[0.95rem] sm:text-[0.9rem] md:text-p lg:text-[1.1rem] font-medium">
                            {content.ci2.description} 
                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-5">
                        <Image 
                            src="/images/logos/members/CI2_logo.png"
                            alt="CI2 Logo"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[350px] lg:w-[400px]"
                        />
                        <div className="flex flex-col">
                            <h6 className="text-[1.1rem] lg:text-[1.25rem] font-bold text-blue-light-citc">{content.formBy}</h6>
                            <div className="flex flex-row md:justify-center lg:justify-start flex-wrap w-full gap-5">
                                <Image 
                                    src="/images/logos/members/ClusterAutomatizacion.png"
                                    alt="CAIC Logo"
                                    width={500}
                                    height={500}
                                    className="w-[120px] md:w-[150px]"
                                /> 
                                <Image 
                                    src="/images/logos/members/ChihuahuaFutura.png"
                                    alt="Chihuahua Futura Logo"
                                    width={500}
                                    height={500}
                                    className="object-contain w-[150px] md:w-[190px]"
                                /> 
                            </div>
                        </div> 
                    </div> 
                </div>
            </section>
        </>
    );
} 

export function TechPlug(){

    return(
        <>
            <section className="w-full h-auto flex flex-col py-10 items-center overflow-hidden">
                <div className="flex flex-col text-regular-dark w-[85%] sm:w-[90%] lg:w-4/5 gap-3 sm:gap-7">
                    <h3 className="text-[2rem] sm:text-[3rem] lg:text-[3.5rem] text-blue-light-citc font-extrabold text-center">{content.techPlug.title}</h3>
                    <div className="flex flex-col lg:flex-row items-center justify-around w-full gap-8 lg:gap-5">
                        <div className="flex flex-col items-center w-full lg:w-1/2 gap-5">
                            <p className="text-[0.95rem] md:text[1rem] text-start sm:text-center md:text-start lg:text-[1.1rem] font-medium">{content.techPlug.description}</p>
                            <div className="flex flex-row flex-wrap w-full gap-5 justify-center items-center">
                                {content.techPlug.results.map((result, id)=> (
                                    <p key={id} className="text-[1.1rem] sm:text-h6 flex flex-row flex-nowrap gap-2 font-bold text-neutral-500">
                                        <span className="text-blue-light-citc">{result.quantity}</span>
                                        {result.name}
                                    </p>
                                ))}
                            </div>
                            <div className="flex flex-col w-full items-center gap-5">
                                <h6 className="text-h5 font-bold text-blue-light-citc">
                                    {content.techPlug.successStoriesTitle}
                                </h6>
                                <div className="flex flex-row flex-wrap gap-7 sm:gap-5 items-center justify-around">
                                    {content.techPlug.successStories.map((success, id) => (
                                        <Image 
                                            key={id}
                                            src={success.logo}
                                            alt={`${success.name} Logo`}
                                            width={200}
                                            height={200}
                                            className={success.className}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center w-full sm:w-auto lg:w-[45%] h-full rounded-3xl overflow-hidden ">
                            <ImgCarousel images={content.techPlug.images} />
                        </div> 
                    </div>
                </div>
            </section>
        </>
    );
} 

export function C3(){

    return (
        <>
            <section className="flex w-full items-center justify-center py-10 lg:py-16 text-regular-dark">
                <div className="flex flex-col lg:flex-row-reverse flex-nowrap w-[85%] sm:w-[90%] lg:w-4/5 items-center justify-center gap-5 lg:gap-10">
                    <div className="flex flex-col w-full sm:w-4/5 lg:w-[55%] gap-5">
                        <div className="flex flex-col sm:items-center gap-3 ">
                            <h3 className="text-h5 sm:text-h4 lg:text-h3 font-bold text-blue-light-citc">{content.c3.title}</h3> 
                            <div className="w-full h-1 bg-blue-900 rounded-full" /> 
                        </div> 
                        <p className="text-[0.95rem] sm:text-[0.9rem] md:text-p lg:text-[1.1rem] font-medium">
                            {content.c3.description} 
                        </p>
                    </div>
                    <div className="flex flex-col justify-center gap-5">
                        <Image 
                            src="/images/logos/business/C3_logo.png"
                            alt="CI2 Logo"
                            width={300}
                            height={300}
                            className="w-[300px] md:w-[350px] lg:w-[450px]"
                        />
                        <div className="flex flex-col">
                            <h6 className="text-[1.1rem] lg:text-[1.25rem] font-bold text-blue-light-citc">{content.formBy}</h6>
                            <div className="flex flex-row md:justify-center lg:justify-start flex-wrap w-full gap-5">
                                <Image 
                                    src="/images/logos/members/ChihuahuaFutura.png"
                                    alt="Chihuahua Futura Logo"
                                    width={500}
                                    height={500}
                                    className="object-contain w-[150px] md:w-[200px]"
                                /> 
                            </div>
                        </div> 
                    </div> 
                </div>
            </section>
        </>
    );
} 

export function CibersecuritySummit(){

    return (
        <>
            <section className="w-full h-auto py-10 flex justify-center text-regular-dark">
                <div className="w-[85%] sm:w-[90%] lg:w-4/5 h-auto flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center gap-3">
                        <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.5rem] font-extrabold text-blue-light-citc">{content.cibersecuritySummit.title}</h2>
                        <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.1rem] font-medium whitespace-pre-wrap">
                            {content.cibersecuritySummit.description}
                        </p>
                    </div>
                    <div className="flex flex-col items-center w-full gap-10">
                        {content.cibersecuritySummit.editions.map((edition, id) => {
                            const reverse = id % 2 === 0 ? false : true;
                            
                            return(
                                <SummitEdition key={id} reverse={reverse} edition={edition}  />
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

function SummitEdition({ reverse, edition }){

    return (
        <div className={`flex flex-col lg:${reverse ? 'flex-row-reverse' : 'flex-row'} h-auto w-full gap-10`}>
            <div className="flex flex-col items-center w-full lg:w-1/2 gap-3">
                <div className="w-full flex flex-col items-center">
                    <h3 className="text-[1.8rem] md:text-[2rem] w-auto lg:text-[3rem] font-bold text-nowrap whitespace-pre text-blue-dark-citc">{content.cibersecuritySummit.edition_title} {edition.date}</h3> 
                    <div className="w-full h-1 bg-blue-900 rounded-full" /> 
                </div>
                <div className="flex flex-row justify-center lg:items-center lg:justify-start lg:flex-col flex-wrap w-full h-auto gap-x-5 gap-y-1">
                    {edition.results.map((result, id) => {
                        return (
                            <div key={id} className="text-[1.3rem] md:text-[1.5rem] lg:text-[2.25rem] flex flex-col items-center text-nowrap text-neutral-600 font-semibold">
                                <div className="flex flex-row flex-nowrap items-center gap-2 font-bold text-blue-light-citc">
                                    {result.icon ? result.icon(): ''}
                                    <span>{result.name}</span>
                                </div>
                                <span className="text-[2.5rem] md:text-[3rem]">{result.number}</span>
                            </div> 
                        ); 
                    })} 
                </div>
                <a href={edition.stream_link} target="_blank" rel="noopener noreferrer">
                    <ServiceButton>
                        {content.cibersecuritySummit.edition_redirect_text} {edition.date}
                    </ServiceButton>
                </a>
            </div>
            <div className="flex items-center justify-center w-auto lg:w-[45%] h-full rounded-3xl overflow-hidden ">
                <ImgCarousel images={edition.images} />
            </div> 
        </div> 
    );
}

export function InternationalAllies(){

    return (
        <>
            <section className="w-full h-auto py-10 flex justify-center text-regular-dark">
                <div className="w-[85%] sm:w-3/5 h-auto flex flex-col items-center gap-10">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.2rem] text-center font-extrabold text-blue-light-citc">{content.internationalAllies.title}</h2>
                        <p className="text-[1rem] md:text-[1.05rem] lg:text-[1.3rem] text-center font-medium whitespace-pre-wrap">
                            {content.internationalAllies.description}
                        </p>
                    </div>
                    <div className="flex flex-row flex-wrap sm:flex-nowrap items-center justify-around w-full gap-2 sm:gap-10">
                        {content.internationalAllies.allies.map((allie, id) => (
                            <div key={id} className="flex flex-col items-center gap-3 w-[100px] sm:w-[300px] overflow-hidden">
                                <Image 
                                    src={allie.image}
                                    alt={`${allie.name} Image`}
                                    width={500}
                                    height={500}
                                    className={allie.className}
                                />
                                <span className="text-[1.3rem] sm:text-[1.7rem] font-bold text-blue-light-citc">
                                    {allie.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export function Form(){

    return (
        <>
            <section className="w-full py-10 gap-5 h-auto flex flex-col items-center overflow-hidden">
                <h4 className="text-[2rem] font-bold text-blue-dark-citc w-4/5 text-center">{content.form.question}</h4>
                <h6 className="text-[1.5rem] font-bold text-blue-light-citc/70 w-4/5 text-center">{content.form.intro}</h6>
                <BusinessForm />
            </section>
        </>
    );
}