import Image from "next/image";

export default function Home(){

    return (
        <>
            <section className="relative bg-gray-700 bg-[url('/images/cuu_2.jpg')] bg-cover bg-center h-screen">
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

    const text = {
        'title': '¿Quiénes somos?', 
        'description': 'Somos un grupo de empresas dedicadas a las TICs que trabajamos y colaboramos estratégicamente para la obtención de beneficios mutuos con los cuales brindamos a nuestros asociados oportunidades enfocadas a mejoras en sus procesos, certificaciones, capacidades, recursos; con la intención de alcanzar proyecciones a nivel local, nacional e internacional en beneficio de la comunidad Chihuahuense.'
    }

    return (
        <>
            <section className="lg:my-10 lg:py-10 lg:h-auto text-gray-dark-citc">
                <div className="p-10 w-full h-auto flex flex-row items-center space-x-36">
                    <div className="border-solid border-black border-2 p-3 lg:mx-10 space-y-5 lg:w-5/12 bg-gray-clear-citc bg-opacity-50">
                        <h2 className="text-h1 font-semibold">{text.title}</h2>
                        <p className="text-regular font-medium text-justify">{text.description}</p>
                    </div>
                    <Image 
                        src="/images/citc_logos/CITC_Vert_Mesa_1.png"
                        alt="Chihuahua IT Cluster Logo"
                        width={432}
                        height={460}
                        className="opacity-70"
                    />
                </div>
            </section>
        </>
    );
}