"use client"; 

import Image from "next/image";
import { InfiniteMovingCards } from "@/components/ui/infinite_moving_cards";
import { AlliedCard } from "./ui/cards";

const text = {
    about: {
        title: '¿Quiénes somos?', 
        description: 'Somos un grupo de empresas dedicadas a las TICs que trabajamos y colaboramos estratégicamente para la obtención de beneficios mutuos con los cuales brindamos a nuestros asociados oportunidades enfocadas a mejoras en sus procesos, certificaciones, capacidades, recursos; con la intención de alcanzar proyecciones a nivel local, nacional e internacional en beneficio de la comunidad Chihuahuense.', 
    }, 
    allies: {
        intro: 'Agradecemos a todos todos nuestros aliados por apoyarnos a impulsar al sector IT',
        associates: 'Socios', 
        members: 'Afiliados', 
        universities: 'Universidades',
    },
    associates: {
        intro: 'Se parte de los que impulsan la tecnología e innvación en la región',
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
            image: '/images/logos/members/',
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
            <section id="AboutUs" className="relative bg-[url('/images/backgrounds/LP_01.jpg')] bg-cover bg-center lg:my-10 lg:items-center lg:h-auto text-regular-dark">
                <div className="p-10 w-full h-full bg-light-gradient flex flex-row items-center justify-center space-x-30">
                    <div className="rounded-3xl p-3 lg:mx-10 space-y-5 lg:w-5/12">
                        <h2 className="text-h1 font-semibold text-blue-dark-citc">{text.about.title}</h2>
                        <p className="text-regular font-semibold text-center">{text.about.description}</p>
                    </div>
                    <Image 
                        src="/images/logos/citc/CITC_Vert_Mesa_1.png"
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

export function Allies(){

    return(
        <>
            <section className="text-regular-dark flex flex-col items-center justify-center">
                <h4 className="text-blue-dark-citc text-h4 font-semibold">{text.allies.intro}</h4>
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
            <div className="flex flex-col items-center justify-center">
                <h5 className="text-h5 text-blue-dark-citc font-semibold">{type}</h5>
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
    ];

    const associate_logos_2 = [
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

    return (
        <>
            <section className="w-full h-[600px] flex flex-col items-center justify-center">
                <h4 className="lg:my-5 text-h4 font-semibold text-blue-dark-citc">{text.associates.intro}</h4>
                <InfiniteMovingCards items={associate_logos_1} direction="right" />
                <InfiniteMovingCards items={associate_logos_2} direction="left" />
            </section>
        </>
    );
}