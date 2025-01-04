import Image from "next/image"; 
import { ImgCarousel } from "./carousel"; 

const content = {
    heroSection: {
        title: 'Talent Development', 
        intro: 'Fortalecemos el talento local a través de programas educativos, eventos y comunidad tecnológica. '
    }, 
    programs: {
        title: 'Programas', 
        collaborators: 'Colaboradores', 
        content: [
            {
                name: 'Full Stack Fundations', 
                description: 'Full-Stack Foundations es un diplomado diseñado para formar a la próxima generación de desarrolladores web con un enfoque integral y práctico. A través de módulos especializados, los participantes adquieren conocimientos en tecnologías clave como HTML, CSS, JavaScript, frameworks modernos y bases de datos, mientras desarrollan proyectos reales que fortalecen sus habilidades técnicas y colaborativas. Este programa está orientado a personas con interés en la tecnología que buscan iniciar o potenciar su carrera en el desarrollo de software.', 
                results: [{name: 'Generaciones', number: 4}, {name: 'Estudiantes', number: 62}, {name: 'Graduados', number: 42}, {name: 'En Proceso', number: 12}], 
                collaborators: () => (
                    <>
                        <Image 
                            src="/images/logos/talent/proyectoT_logo.png"
                            alt="Proyecto T Logo"
                            width={220}
                            height={200}
                            className="object-contain w-[180px] sm:w-[150px] md:w-[200px] lg:w-auto"
                        />
                        <Image 
                            src="/images/logos/talent/inadet_logo.png"
                            alt="INADET/CENALTEC Logo"
                            width={290}
                            height={220}
                            className="w-[270px] sm:w-[200px] md:w-[250px] lg:w-auto"
                        /> 
                    </>
                ), 
                images: [
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
                ], 
            }, 
            {
                name: 'Python Programming', 
                description: 'El diplomado de Python Programming está diseñado para proporcionar una introducción sólida al desarrollo con Python, uno de los lenguajes de programación más versátiles y demandados en la industria tecnológica. A través de un enfoque práctico, los participantes adquieren habilidades esenciales en la programación con Python, incluyendo estructuras de datos, manipulación de archivos, y fundamentos de desarrollo web. Este diplomado es ideal tanto para principiantes como para profesionales que deseen ampliar sus conocimientos y explorar las diversas aplicaciones de Python en áreas como análisis de datos, automatización y machine learning.', 
                results: [{name: 'Generacion', number: 1}, {name: 'Estudiantes', number: 13}, {name: 'Graduados', number: 10}], 
                collaborators: () => (
                    <>
                        <Image 
                            src="/images/logos/talent/inadet_logo.png"
                            alt="INADET/CENALTEC Logo"
                            width={290}
                            height={220}
                            className="w-[270px] sm:w-[200px] md:w-[250px] lg:w-auto"
                        /> 
                    </>
                ), 
                images: [
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
                ], 
            }, 
            {
                name: 'Girls In Tech', 
                description: 'El programa Girls in Tech tiene como objetivo empoderar a jóvenes mujeres de entre 12 y 17 años, brindándoles herramientas y experiencias que despierten su interés por la tecnología y el desarrollo personal. Con la participación de 50 chicas, el programa incluye cinco talleres dinámicos: IoT, impresión 3D, Python, creación de páginas web y propósito de vida. Este esfuerzo busca fomentar la creatividad, la confianza y la exploración de nuevas oportunidades en el ámbito tecnológico, construyendo una base sólida para su futuro.', 
                results: [{name: 'Participantes', number: 50}, {name: 'Talleres', number: 5}], 
                collaborators: () => (
                    <>
                        <Image 
                            src="/images/logos/talent/cdJuarezConsulado.png"
                            alt="Consulado de Cd. Juarez Logo"
                            width={125}
                            height={125}
                            className="w-[100px] lg:w-auto"
                        /> 
                        <Image 
                            src="/images/logos/talent/esquinaFranklin_logo.png"
                            alt="Esquina Franklin Logo"
                            width={220}
                            height={220}
                            className="object-contain w-[160px] lg:w-[210px]"
                        /> 
                    </>
                ), 
                images: [
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
                ], 
            }, 
        ], 
    }, 
};

export default function HeroSection(){

    return (
        <>
            <section className="w-full h-screen gap-2 sm:gap-0 p-5 sm:pb-0 sm:py-5 sm:px-12 md:p-10 bg-gradient-to-b from-[#92d050] from-50% sm:from-40% md:from-60% lg:from-55% flex flex-col items-center md:flex-row md:items-center md:justify-around overflow-hidden">
                <div className="flex flex-col w-full md:w-[45vw] items-center md:items-start md:justify-center text-gray-50 md:mb-[15vh] gap-3 sm:gap-0">
                    <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-center md:justify-start sm:ml-[7vw] md:ml-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="210" height="210" viewBox="0 0 24 24" className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[210px] lg:h-[210px]">
                            <g fill="none" fillRule="evenodd">
                                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/>
                                <path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22q.346 0 .685-.005a1 1 0 0 0 .89-1.428A6 6 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557Q11.671 13 11 13m7.864.997a1 1 0 0 0-1.728 0l-.91 1.562l-1.766.382a1 1 0 0 0-.534 1.644l1.204 1.348l-.182 1.798a1 1 0 0 0 1.398 1.016l1.654-.73l1.654.73a1 1 0 0 0 1.398-1.016l-.182-1.799l1.204-1.347a1 1 0 0 0-.534-1.644l-1.766-.382z"/>
                            </g>
                        </svg>
                        <h3 className="font-extrabold text-center sm:text-start text-h4 sm:text-h3 lg:text-h2">{content.heroSection.title}</h3>
                    </div>
                    <h5 className="font-semibold text-center md:text-start text-h6 lg:text-h5">{content.heroSection.intro}</h5>
                </div>
                <Image
                    src="/images/backgrounds/talentImg.png"
                    alt="Talent image"
                    width={800}
                    height={800}
                    className="w-[600px] h-[260px] sm:w-[500px] sm:h-auto md:w-[450px] md:h-[450px] lg:w-[600px] lg:h-[600px] object-cover opacity-100 md:opacity-80"
                />
            </section>
        </>
    );
} 

export function Programs(){

    let reverse = false;

    return (
        <>
            <section className="w-full h-auto py-10 flex flex-col gap-3 items-center"> 
                <h2 className="text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-extrabold text-[#92d050]">{content.programs.title}</h2> 
                <div className="w-full h-auto flex flex-col items-center gap-10">
                    {content.programs.content.map((program, id) => {
                        const isReverse = id % 2 === 0 ? reverse : !reverse;
                        return (
                            <ProgramCard 
                            key={id}
                            reverse={isReverse} 
                            name={program.name} 
                            description={program.description} 
                            results={program.results} 
                            collaborators={program.collaborators}
                            images={program.images} />
                        );
                    })} 
                </div>
            </section>
        </>
    );
}

function ProgramCard({ reverse, name, description, results, collaborators, images }){

    return (
        <>
            <div className="flex flex-col h-auto w-[85%] sm:w-[90%] lg:w-4/5 gap-2">
                <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} items-center gap-3 md:gap-10`}>
                    <h3 className="text-h6 sm:text-h5 md:text-h4 lg:text-h3 font-bold text-nowrap text-lime-600">{name}</h3> 
                    <div className="w-full h-1 bg-neutral-600 rounded-full" /> 
                </div>
                <div className={`flex ${reverse ? 'flex-row-reverse' : 'flex-row'} flex-wrap items-center justify-center gap-8 lg:gap-0 lg:justify-between w-full`}>
                    <div className="flex flex-col w-full lg:w-1/2 gap-3">
                        <p className="text-[0.95rem] sm:text-[0.9rem] md:text-p lg:text-[1.1rem] font-medium">
                            {description}
                        </p>
                        <div className="flex flex-row flex-wrap w-full h-auto gap-x-3 gap-y-1">
                            {results.map((result, id) => {
                                return (
                                    <p key={id} className="text-[0.95rem] sm:text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] flex flex-row items-center text-nowrap text-neutral-600 font-medium gap-2">
                                        <span className=" font-bold text-lime-600">{result.number}</span>
                                        <span>{result.name}</span>
                                    </p>
                                );
                            })}
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <h6 className="text-[1rem] md:text-[1.1rem] lg:text-[1.25rem] font-bold text-lime-600">{content.programs.collaborators}</h6>
                            <div className="flex flex-row flex-wrap w-full gap-5">
                                {collaborators()}
                            </div>
                        </div> 
                    </div>
                    <div className="flex items-center justify-center w-auto lg:w-[45%] h-full rounded-3xl overflow-hidden ">
                        <ImgCarousel images={images} />
                    </div> 
                </div>
            </div>
        </>
    );
}