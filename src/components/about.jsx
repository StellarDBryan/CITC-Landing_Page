"use client"; 

import Image from "next/image";
import Link from "next/link";
import { InfiniteMovingCards } from "@/components/ui/infinite_moving_cards";
import { AlliedCard, AboutCard, TeamMemberCard } from "./ui/cards";
import { ServiceButton } from '@/components/ui/buttons';

const text = {
    about: {
        title: '¿Quiénes somos?', 
        description: 'Somos un grupo de empresas dedicadas a las TIC que colaboramos estratégicamente para obtener beneficios mutuos. A través de nuestra labor, brindamos a nuestros asociados oportunidades enfocadas en mejorar sus procesos, certificaciones, capacidades y recursos, con el objetivo de alcanzar proyecciones a nivel local, nacional e internacional, en beneficio de la comunidad chihuahuense.',
        button1: 'Asóciate con nosotros',
        button2: 'Living Lab CUU',
    }, 
    misionVision: {
        mision: 'Mision',
        mision_text: 'Nuestra misión es fomentar el crecimiento y la innovación en la industria de tecnología de Chihuahua.',
        mision_icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 14 14" className="text-blue-dark-citc"><path fill="currentColor" fillRule="evenodd" d="M7.527 9.331a5 5 0 0 0 1.49-1.319a2 2 0 0 1-.273-.661l-.019-.088a1.29 1.29 0 0 0-1.042-.998c-2.072-.36-2.072-3.334 0-3.695a1.29 1.29 0 0 0 1.03-.948a5 5 0 1 0-6.187 7.709V10.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V9.331Zm-5 3.919a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m7.28-11.533C9.99.881 11.18.876 11.37 1.71l.009.04l.018.078a2.4 2.4 0 0 0 1.921 1.812c.872.152.872 1.404 0 1.556a2.4 2.4 0 0 0-1.925 1.827l-.023.102c-.19.835-1.381.83-1.565-.007l-.019-.087A2.38 2.38 0 0 0 7.87 5.194c-.871-.151-.871-1.401 0-1.553a2.38 2.38 0 0 0 1.915-1.826L9.8 1.75z" clipRule="evenodd"/></svg>
        ), 
        vision: 'Vision',
        vision_text: 'Nuestra visión es ser líderes en el desarrollo de tecnología, impulsando la economía local y global.',
        vision_icon: () => (
            <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 20 20" className="text-blue-dark-citc"><path fill="currentColor" d="M7.987 4.18a12.2 12.2 0 0 0-.669 2.32h5.364a12.2 12.2 0 0 0-.67-2.32c-.301-.733-.648-1.294-1.008-1.663C10.646 2.149 10.307 2 10 2s-.646.149-1.004.517c-.36.37-.707.93-1.009 1.663m-.096-1.899c-.314.426-.59.941-.828 1.518c-.32.78-.58 1.694-.762 2.701H2.804a8.02 8.02 0 0 1 5.087-4.219m4.219 0c.313.426.59.941.827 1.518c.32.78.58 1.694.762 2.701h3.497a8.02 8.02 0 0 0-5.087-4.219M17.602 7.5H13.85c.075.612.124 1.25.142 1.906a2.997 2.997 0 0 1 4.002.925Q18 10.166 18 10a8 8 0 0 0-.398-2.5M13 10q0 .174-.003.345a3 3 0 0 0-.456 2.155H7.158A19 19 0 0 1 7 10c0-.875.056-1.715.158-2.5h5.684c.102.785.158 1.625.158 2.5m-.318 3.5q-.07.358-.151.695A2.5 2.5 0 0 0 11 16.5c0 .29.038.58.115.862a3 3 0 0 1-.11.121c-.359.368-.698.517-1.005.517s-.646-.149-1.004-.517c-.36-.37-.707-.93-1.009-1.663a12.2 12.2 0 0 1-.669-2.32zM7.89 17.719A8.02 8.02 0 0 1 2.804 13.5h3.497c.182 1.007.441 1.922.762 2.7c.237.578.514 1.093.828 1.519M2.398 12.5H6.15A21 21 0 0 1 6 10c0-.866.052-1.705.15-2.5H2.398A8 8 0 0 0 2 10c0 .873.14 1.713.398 2.5M17.5 12a2 2 0 1 1-4 0a2 2 0 0 1 4 0m1.5 4.5c0 1.245-1 2.5-3.5 2.5S12 17.75 12 16.5a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5"/></svg>
        ), 
    }, 
    team: {
        title: 'Consejo del CITC', 
        intro: 'Conoce a nuestro equipo', 
        members: [
            {
                name: 'Luis Alonso Ramos', 
                role: 'Presidente', 
                img: '/images/photos/citcTeam/luisAlonsoRamos.jpg', 
                x: 'https://x.com/luisalonsoramos', 
                linkedIn: 'https://www.linkedin.com/in/luisalonsoramos/',
            }, 
            {
                name: 'René Pons', 
                role: 'Miembro del consejo', 
                img: '/images/photos/citcTeam/renePons.png', 
                x: 'https://x.com/renepons', 
                linkedIn: 'https://www.linkedin.com/in/renepons/',
            }, 
            {
                name: 'Oscar Nuñez Elias', 
                role: 'Miembro del consejo', 
                img: '/images/photos/citcTeam/oscarNunezElias.jpeg', 
                x: 'https://x.com/onuneze', 
                linkedIn: 'https://www.linkedin.com/in/onuneze',
            }, 
            {
                name: 'Bani Carrasco', 
                role: 'Directora', 
                img: '/images/photos/citcTeam/baniCarrasco.jpg', 
                x: 'https://x.com/BaniGiselle', 
                linkedIn: 'https://www.linkedin.com/in/banicarrasco',
            }, 
            {
                name: 'Erica Rodriguez', 
                role: 'Auxiliar Administrativo', 
                img: '/images/photos/citcTeam/ericaRodriguez.jpg', 
                x: 'https://x.com/EricaRo01465829', 
                linkedIn: 'https://www.linkedin.com/in/erica-rodr%C3%ADguez/',
            }, 
        ]
    },
    allies: {
        title: 'Aliados del CITC',
        intro: 'Agradecemos a todos todos nuestros aliados por apoyarnos a impulsar al sector IT',
        associates: 'Socios', 
        members: 'Afiliados', 
        universities: 'Universidades',
    },
    associates: {
        intro: 'Nuestros socios, el motor de la innovación tecnológica en Chihuahua', 
    }, 
};

const alliesImages = {
    associates: [
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
    ],
    members: [
        {
            name: 'Red Emprende', 
            image: '/images/logos/members/RedEmprende.png',
        },
        {
            name: 'Chihuahua Futura', 
            image: '/images/logos/members/ChihuahuaFutura.png',
        },
        {
            name: 'Cluster Automatizacion e Integracion Chihuahua', 
            image: '/images/logos/members/ClusterAutomatizacion.png',
        },
        {
            name: 'MxTI', 
            image: '/images/logos/members/MXTI.png',
        },
        {
            name: 'Ilum', 
            image: '/images/logos/members/Ilum.png',
        },
    ],
    universities: [
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
    ],
}

export default function About(){

    return (
        <>
            <section id="AboutUs" className="relative w-full px-[7.5%] sm:px-[5%] lg:px-[10%] py-12 flex justify-center items-center text-neutral-600">
                <Image 
                    src='/images/backgrounds/LP_01.jpg'
                    alt="About Background"
                    fill
                    className="absolute object-cover inset-0 w-full h-full"
                />
                <div className="absolute object-contain inset-0 w-full h-full z-10 bg-gradient-to-b from-gray-clear-citc/100 via-gray-clear-citc/70 to-gray-clear-citc/100" />
                <div className="w-full h-full flex flex-col items-center lg:flex-row lg:items-center lg:justify-around z-20">
                    <div className="flex flex-col items-center backdrop-blur sm:backdrop-blur-sm rounded-3xl p-3 gap-2 sm:gap-5">
                        <h2 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] text-center font-extrabold text-blue-dark-citc">{text.about.title}</h2>
                        <p className="text-[1rem] lg:text-[1.1rem] font-semibold text-center">{text.about.description}</p>
                        <div className="w-auto h-auto flex flex-row flex-wrap items-center justify-around gap-3">
                            <Link href="/contact">
                                <ServiceButton>{text.about.button1}</ServiceButton>
                            </Link>
                            <Link href='/livinglab'>
                                <ServiceButton>{text.about.button2}</ServiceButton>
                            </Link>
                        </div>
                    </div>
                    <Image 
                        src="/images/logos/citc/CITC_Vert_Mesa_1.png"
                        alt="Chihuahua IT Cluster Logo"
                        width={432}
                        height={460}
                        className="opacity-60 w-[300px] lg:w-[400px]"
                    />
                </div>
            </section>
        </>
    );
}

export function MisionVision(){

    return (
        <>
            <section className="flex w-full px-[7.5%] sm:px-[5%] lg:px-[10%] flex-col items-center md:flex-row md:items-center md:justify-center gap-0 md:gap-5">
                <AboutCard title={text.misionVision.mision} text={text.misionVision.mision_text} icon={text.misionVision.mision_icon} />
                <AboutCard title={text.misionVision.vision} text={text.misionVision.vision_text} icon={text.misionVision.vision_icon} />
            </section>
        </>
    );
}

export function Allies(){

    return(
        <>
            <section id="Allies" className="text-regular-dark flex flex-col items-center justify-center lg:space-y-5">
                <h2 className="text-h2 font-bold text-blue-dark-citc">{text.allies.title}</h2>
                <h5 className="text-blue-dark-citc text-h5 font-medium">{text.allies.intro}</h5>
                <AlliesShowcase type={text.allies.associates} alliesImages={alliesImages.associates} />
                <AlliesShowcase type={text.allies.members} alliesImages={alliesImages.members} />
                <AlliesShowcase type={text.allies.universities} alliesImages={alliesImages.universities} />
            </section>
        </>
    );
}

export function AlliesShowcase({ type, alliesImages }){

    return(
        <>
            <div className="flex flex-col w-full items-center justify-center lg:space-y-0">
                <h3 className="text-h3 text-blue-dark-citc font-semibold">{type}</h3>
                <div className="flex flex-wrap p-5 justify-around lg:w-3/4">
                    {
                        alliesImages.map((allied, id) => (
                            <>
                                <AlliedCard key={id} image={allied.image} name={allied.name} />
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export function AssociatesLanding(){

    const associate_logos_1 = [
        {
            name: '360Solutions', 
            image: '/images/logos/associates/360Solutions_edited.png', 
            className: 'w-[170px] sm:w-[200px] lg:w-[250px]', 
        },
        {
            name: 'AdNConsulting', 
            image: '/images/logos/associates/AdNConsulting.png', 
            className: 'w-[130px] sm:w-[170px] lg:w-[200px]', 
        }, 
        {
            name: 'BuildBinder', 
            image: '/images/logos/associates/BuildBinder_edited.png', 
            className: 'w-[140px] sm:w-[170px] lg:w-[200px]', 
        }, 
        {
            name: 'AutoZone', 
            image: '/images/logos/associates/DataZone_edited.png', 
            className: 'w-[190px] sm:w-[210px] lg:w-[240px]', 
        }, 
        {
            name: 'IntegralVending', 
            image: '/images/logos/associates/IntegralVending_edited.png', 
            className: 'w-[150px] sm:w-[165px] lg:w-[200px]', 
        }, 
        {
            name: 'Intelectix', 
            image: '/images/logos/associates/Intelectix_edited.png', 
            className: 'w-[130px] sm:w-[145px] lg:w-[165px]', 
        }, 
        {
            name: 'JobSistemas', 
            image: '/images/logos/associates/JobSistemas_edited.png', 
            className: 'w-[150px] sm:w-[190px] lg:w-[210px]', 
        }, 
        {
            name: 'LeadingTech', 
            image: '/images/logos/associates/LeadingTech_edited.png', 
            className: 'w-[140px] sm:w-[160px] lg:w-[190px]', 
        }, 
    ];

    const associate_logos_2 = [
        {
            name: 'Madata', 
            image: '/images/logos/associates/madata_edited.png', 
            className: 'w-[160px] sm:w-[170px] lg:w-[190px]', 
        }, 
        {
            name: 'Pax', 
            image: '/images/logos/associates/pax_edited.png', 
            className: 'w-[160px] sm:w-[170px] lg:w-[190px]', 
        }, 
        {
            name: 'PIDElectronics', 
            image: '/images/logos/associates/PIDElectronics_edited.png', 
            className: 'w-[190px] sm:w-[220px] lg:w-[260px]', 
        }, 
        {
            name: 'PPAPManger', 
            image: '/images/logos/associates/PPAPManger_edited.png', 
            className: 'w-[190px] sm:w-[210px] lg:w-[240px]', 
        },
        {
            name: 'Resideo', 
            image: '/images/logos/associates/resideo_edited.png', 
            className: 'w-[170px] sm:w-[180px] lg:w-[210px]', 
        }, 
        {
            name: 'Sitek', 
            image: '/images/logos/associates/Sitek_edited.png', 
            className: 'w-[160px] sm:w-[170px] lg:w-[200px]', 
        }, 
        {
            name: 'TGC', 
            image: '/images/logos/associates/TGC_edited.png', 
            className: 'w-[180px] sm:w-[210px] lg:w-[240px]', 
        }, 
        {
            name: 'Tisco', 
            image: '/images/logos/associates/Tisco_edited.png', 
            className: 'w-[160px] sm:w-[180px] lg:w-[200px]', 
        },
    ];

    return (
        <>
            <section className="w-[85%] sm:w-[90%] lg:w-[75%] mx-auto h-auto -space-y-5 md:-space-y-10 md:gap-5 py-10 flex flex-col items-center justify-center">
                <h4 className="text-[1.3rem] sm:text-[1.75rem] md:text-[2rem] lg:text-[2.5rem] text-center font-bold text-blue-dark-citc">{text.associates.intro}</h4>
                <div className="flex flex-col -space-y-9 lg:-space-y-5">
                    <InfiniteMovingCards items={associate_logos_1} direction="right" />
                    <InfiniteMovingCards items={associate_logos_2} direction="left" />
                </div>
            </section>
        </>
    );
} 

export function Team(){

    return(
        <>
            <section className="text-regular-dark w-full h-auto flex flex-col items-center justify-center lg:space-y-5">
                <h2 className="text-h2 font-bold text-blue-dark-citc">{text.team.title}</h2>
                <h5 className="text-blue-dark-citc text-h5 font-medium">{text.team.intro}</h5>
                <div className="flex flex-row flex-wrap items-center justify-around w-3/5 space-y-3">
                    {
                        text.team.members.map((member, id) => (
                            <TeamMemberCard 
                                key={id} 
                                name={member.name} 
                                role={member.role} 
                                img={member.img}
                                xAccount={member.x} 
                                linkedIn={member.linkedIn} />
                        ))
                    }
                </div>
            </section>
        </>
    );
}