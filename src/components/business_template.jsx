import Image from "next/image";
import { ImgCarousel } from "./carousel";

const content = { 
    formBy: "Formado por...", 
    heroSection: {
        title: "Business Development", 
        intro: "Impulsando el crecimiento empresarial con soluciones tecnológicas innovadoras", 
    }, 
    ci2: {
        title: "Centro de Industria Inteligente (CI2)", 
        description: "En CI2 conectamos las necesidades de la industria manufacturera global con proveedores locales de soluciones tecnológicas.\n Trabajamos para mejorar la competitividad de la industria manufacturera local mediante el uso de tecnología y automatización.", 
        images: [
            "/images/photos/ci2/CI2_01.jpg", 
            "/images/photos/ci2/CI2_02.jpeg", 
            "/images/photos/ci2/CI2_03.jpeg", 
        ], 
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
            <section className="flex items-center justify-center py-10 text-regular-dark">
                <div className="flex flex-col h-auto w-[85%] sm:w-[90%] lg:w-4/5 gap-3 sm:gap-5">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-10">
                        <h3 className="text-h6 sm:text-h5 md:text-h4 lg:text-h3 font-bold sm:text-nowrap text-blue-light-citc">{content.ci2.title}</h3> 
                        <div className="w-full h-1 bg-blue-900 rounded-full" /> 
                    </div> 
                    <div className="flex flex-row flex-wrap items-center justify-center gap-8 lg:gap-0 lg:justify-between w-full">
                        <div className="flex flex-col sm:items-center lg:items-start w-full lg:w-1/2 gap-3">
                            <p className="text-[0.95rem] sm:text-[0.9rem] md:text-p lg:text-[1.1rem] font-medium">
                                {content.ci2.description} 
                            </p>
                            <Image 
                                src="/images/logos/members/CI2_logo.png"
                                alt="CI2 Logo"
                                width={300}
                                height={300}
                                className="w-[300px]"
                            />
                            <div className="flex flex-col md:items-center lg:items-start w-full gap-2">
                                <h6 className="text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] font-bold text-blue-light-citc">{content.formBy}</h6>
                                <div className="flex flex-row md:justify-center lg:justify-start flex-wrap w-full gap-5">
                                    <Image 
                                        src="/images/logos/members/ClusterAutomatizacion.png"
                                        alt="CAIC Logo"
                                        width={500}
                                        height={500}
                                        className="w-[120px]"
                                    /> 
                                    <Image 
                                        src="/images/logos/members/ChihuahuaFutura.png"
                                        alt="Chihuahua Futura Logo"
                                        width={500}
                                        height={500}
                                        className="object-contain w-[150px]"
                                    /> 
                                </div>
                            </div> 
                        </div>
                        <div className="flex items-center justify-center w-auto lg:w-[45%] h-full rounded-3xl overflow-hidden ">
                            <ImgCarousel images={content.ci2.images} />
                        </div> 
                    </div>
                </div>
            </section>
        </>
    );
}