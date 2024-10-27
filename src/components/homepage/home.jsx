import Image from "next/image";

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
    },
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
                <div className="bg-light-gradient h-full">
                    <h4 className="font-semibold text-blue-dark-citc text-h4">{text.solutions.text}</h4>
                </div>
            </section>
        </>
    );
}