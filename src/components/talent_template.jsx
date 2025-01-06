import Image from "next/image"; 
import { ImgCarousel } from "./carousel"; 

const content = {
    heroSection: {
        title: 'Talent Development', 
        intro: 'Fortalecemos el talento local a través de programas educativos, eventos y comunidad tecnológica. '
    }, 
    programs: {
        title: '¡Nuestros programas!', 
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
        ], 
    }, 
    girlsInTech: {
        title: 'Girls In Tech', 
        description: 'El programa Girls in Tech tiene como objetivo empoderar a jóvenes mujeres de entre 12 y 17 años, brindándoles herramientas y experiencias que despierten su interés por la tecnología y el desarrollo personal. Con la participación de 50 chicas, el programa incluye cinco talleres dinámicos: IoT, impresión 3D, Python, creación de páginas web y propósito de vida. Este esfuerzo busca fomentar la creatividad, la confianza y la exploración de nuevas oportunidades en el ámbito tecnológico, construyendo una base sólida para su futuro.', 
        workshops_title: 'Talleres', 
        workshops: [
            {
                name: 'IoT', 
                icon: () => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 32 32"><path fill="currentColor" d="M30 19h-4v-4h-2v9H8V8h9V6h-4V2h-2v4H8a2 2 0 0 0-2 2v3H2v2h4v6H2v2h4v3a2 2 0 0 0 2 2h3v4h2v-4h6v4h2v-4h3a2.003 2.003 0 0 0 2-2v-3h4Z"/><path fill="currentColor" d="M21 21H11V11h10zm-8-2h6v-6h-6zm18-6h-2A10.01 10.01 0 0 0 19 3V1a12.013 12.013 0 0 1 12 12"/><path fill="currentColor" d="M26 13h-2a5.006 5.006 0 0 0-5-5V6a7.01 7.01 0 0 1 7 7"/></svg>
                ),
            }, 
            {
                name: 'Impresión 3D', 
                icon: () => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="currentColor" d="M3.32.954S2.388.78 2.388 2.138c0 1.359.222 18.01.222 18.01s.379.663.521.631c.141-.03 2.546-.358 2.577-.363l.017-.002l.013-4.004l.012-3.9l4.259-.001l-.004-.305l-4.254-.054l.005-1.616l5.04.057l.012-.322l-5.05-.117l.017-6.148s-.056-.673.354-.673s10.856.377 10.856.377s.343.012.354.257c.005.107.003 3.4.004 5.959l-1.068.114l.002.315l-4.215-.062l-.006.338l4.244.058l.005 1.535l-2.39.017l-.002.296l2.377-.023l.003.235h1.053c0 1.01.002 1.713 0 2.43c.542.158 1.385.435 1.385.435l-1.403.21c0 .223.002.572.005.923l-.93-.35l-.654.083l1.585.589l.003.367l2.072-.291l-.007-14.759s.01-.546-.564-.564C18.263 1.803 3.32.954 3.32.954m6.26 8.662l-.005.55l1.303.032l-.03.869l-.79-.02l.021 1.8l.284-.03l.007.35l.969.03v.566q.014 0 .023.01q.01.01.01.023v.013l.238.12a.03.03 0 0 1 .016.014a.03.03 0 0 1 .002.02l-.002.006l.417.12l-.02-2.048l.016-.018c.02 0 1.736-.007 1.736-.018l.002-.947l-1.796.013l.03-1.331zm4.193 2.474l-1.618.017l.02 1.91l1.598-.044zm-2.434 1.706l-.158.157l.21.21l.205-.204l-.257-.13zm2.425.405c-.029 0-7.873.896-7.873.896l3.197 1.718l9.556-1.209s-4.85-1.405-4.88-1.405m-7.923.925l.01.495l.217.113l.618.02l2.121 1.164l-.257.186l.412.288l1.308-.113l.33-.186l6.293-.793l.36.062l-.03-.515l-8.168 1.04zm.649 1.283l-.706.02l-.01 4.002l.84-.176l-.037-.932l3.276 2.488s-.026.453.03.87c.057.417.613.37.613.37l1.293-.277l.2-.242l7.957-1.525l.212.206l1.158-.247c.119-.026.211-.2.273-.314s-.024-1.802-.005-2.333c.016-.445-.08-.425-.129-.438l-.757.134s-.208.057-.314.01c-.174-.076-.154-.205-.154-.205s.01-.222-.067-.469s-.258-.211-.258-.211l-7.08.994s-.372.058-.695.14l-1.802-.99l-.041.023l-.014.004l-.526.046l2.018 1.065c-.003.007-.037.009-.038.016c-.097.882-.202.989-.463 1.03l-1.385.195l-3.08-2.111Z"/></svg>    
                ),
            }, 
            {
                name: 'Python', 
                icon: () => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><g fill="none"><g fill="currentColor" clipPath="url(#akarIconsPythonFill0)"><path d="M11.914 0C5.82 0 6.2 2.656 6.2 2.656l.007 2.752h5.814v.826H3.9S0 5.789 0 11.969s3.403 5.96 3.403 5.96h2.03v-2.867s-.109-3.42 3.35-3.42h5.766s3.24.052 3.24-3.148V3.202S18.28 0 11.913 0M8.708 1.85c.578 0 1.046.47 1.046 1.052c0 .581-.468 1.051-1.046 1.051s-1.046-.47-1.046-1.051c0-.582.467-1.052 1.046-1.052"/><path d="M12.087 24c6.092 0 5.712-2.656 5.712-2.656l-.007-2.752h-5.814v-.826h8.123s3.9.445 3.9-5.735s-3.404-5.96-3.404-5.96h-2.03v2.867s.109 3.42-3.35 3.42H9.452s-3.24-.052-3.24 3.148v5.292S5.72 24 12.087 24m3.206-1.85c-.579 0-1.046-.47-1.046-1.052c0-.581.467-1.051 1.046-1.051c.578 0 1.046.47 1.046 1.051c0 .582-.468 1.052-1.046 1.052"/></g><defs><clipPath id="akarIconsPythonFill0"><path fill="#fff" d="M0 0h24v24H0z"/></clipPath></defs></g></svg>    
                ),
            }, 
            {
                name: 'Desarrollo Web', 
                icon: () => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 48 48"><defs><mask id="ipTWebPage0"><g fill="none"><rect width="40" height="32" x="4" y="8" stroke="#fff" strokeLinejoin="round" strokeWidth="4" rx="3"/><path fill="#555555" stroke="#fff" strokeWidth="4" d="M4 11a3 3 0 0 1 3-3h34a3 3 0 0 1 3 3v9H4z"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 10 14)"/><circle r="2" fill="#fff" transform="matrix(0 -1 -1 0 16 14)"/></g></mask></defs><path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWebPage0)"/></svg>    
                ),
            }, 
            {
                name: 'Propósito de Vida', 
                icon: () => (
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 512 512"><path fill="currentColor" d="M159.4 26.23c-51.4.6-79.6 56.3-79.3 86.97c1.5 47.3 34.2 79.4 74.8 114.8c35.4 30.8 76.1 63.2 100.9 110c.1-.1.1-.2.2-.3c.1.1.1.2.2.3c24.8-46.8 65.5-79.2 100.9-110c40.6-35.4 73.3-67.5 74.8-114.8c.3-30.67-27.9-86.37-79.3-86.97c-38-.5-82.6 25.7-96.6 67.7c-14-42-58.6-68.2-96.6-67.7M23 375v114h466V375zm18 18h430v78H334v-60H41z"/></svg>    
                ),
            }, 
        ], 
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
    community: {
        title: 'Empoderando a la Comunidad', 
        description: 'En el CITC, creemos firmemente en el poder de la colaboración y el aprendizaje compartido. A través de nuestras comunidades estudiantiles y eventos, inspiramos a las nuevas generaciones a desarrollar habilidades tecnológicas, explorar su creatividad y prepararse para enfrentar los desafíos del futuro. ¡Juntos estamos construyendo un ecosistema innovador en Chihuahua!', 
        communities_title: 'Comunidades Estudiantiles y Tecnológicas', 
        communities: [
            {
                name: 'Club Bisoncoders (ITCHII)', 
                logo: '/images/logos/talent/BISONCODERS.png', 
                className: 'w-[170px]', 
            }, 
            {
                name: 'Super Happy Dev House', 
                logo: '/images/logos/talent/shdh.png', 
                className: 'w-[120px]', 
            }, 
            {
                name: 'ConectaTech @Discord', 
                logo: '/images/logos/talent/conectaTech.png', 
                className: 'w-[130px]', 
            }, 
        ], 
        events_title: 'Eventos de Innovación y Aprendizaje', 
        events: [
            {
                logo: '/images/logos/talent/escuelitaMaker.png', 
                className: 'w-[200px] h-auto', 
            }, 
            {
                logo: '/images/logos/talent/iweek.png', 
                className: 'w-[190px] h-auto filter grayscale brightness-[0.2] ', 
            }, 
            {
                logo: '/images/logos/talent/etherfuse.jpg', 
                className: 'w-[220px] h-auto', 
            }, 
        ], 
    }
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
            <section className="w-full h-auto py-10 flex flex-col gap-3 items-center text-regular-dark"> 
                <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] text-center font-extrabold text-[#92d050]">{content.programs.title}</h2> 
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

export function GirlsInTech(){

    return (
        <>
            <section className="w-full text-regular-dark bg-gradient-to-b from-transparent via-violet-200/90 to-transparent h-auto py-10 flex items-center justify-center"> 
                <div className="flex flex-col h-auto w-[85%] sm:w-[90%] lg:w-4/5 gap-2">
                    <div className="flex flex-row items-center gap-3 md:gap-10">
                        <div className="w-full h-1 bg-purple-500 rounded-full" /> 
                        <h3 className="text-h5 sm:text-h4 md:text-h3 lg:text-h1 font-bold text-nowrap text-violet-800">{content.girlsInTech.title}</h3> 
                        <div className="w-full h-1 bg-purple-500 rounded-full" /> 
                    </div>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-8 lg:gap-0 lg:justify-between w-full">
                        <div className="flex flex-col w-full lg:w-1/2 gap-3">
                            <p className="text-[0.95rem] sm:text-[0.9rem] md:text-p lg:text-[1.1rem] font-medium">
                                {content.girlsInTech.description}
                            </p>
                            <div className="flex flex-col items-center w-full gap-2">
                                <h6 className="text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] font-bold text-violet-800">{content.girlsInTech.workshops_title}</h6>
                                <div className="flex flex-row flex-wrap w-full justify-around gap-5 h-auto text-violet-800">
                                {content.girlsInTech.workshops.map((workshop, id) => (
                                    <div key={id} className="flex flex-col items-center gap-2 w-[50px]">
                                        {workshop.icon()}
                                        <p className="text-regular-dark font-semibold text-wrap text-center text-[0.9rem] md:text-[1.1rem]">{workshop.name}</p>
                                    </div>
                                ))}
                            </div>
                            </div>
                            <div className="flex flex-col items-center w-full gap-2">
                                <h6 className="text-[1.1rem] md:text-[1.2rem] lg:text-[1.25rem] font-bold text-violet-800">{content.programs.collaborators}</h6>
                                <div className="flex flex-row flex-wrap justify-center w-full gap-5">
                                    {content.girlsInTech.collaborators()}
                                </div>
                            </div> 
                        </div>
                        <div className="flex items-center justify-center w-auto lg:w-[45%] h-full rounded-3xl overflow-hidden ">
                            <ImgCarousel images={content.girlsInTech.images} />
                        </div> 
                    </div>
                </div> 
            </section> 
        </>
    );
} 

export function Community(){

    return (
        <>
            <section className="w-full h-auto py-10 gap-5 lg:gap-10 flex flex-col items-center text-regular-dark">
                <h2 className="text-[1.8rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[3.5rem] text-center font-extrabold text-[#92d050]">{content.community.title}</h2> 
                <p className="text-[0.95rem] md:text-[1rem] lg:text-[1.1rem] font-medium sm:text-center w-4/5">{content.community.description}</p>
                <div className="flex flex-col items-center lg:items-start lg:flex-row w-4/5 gap-5">
                    <Logos logos={content.community.communities} title={content.community.communities_title} />
                    <Logos logos={content.community.events} title={content.community.events_title} />
                </div>
            </section>
        </>
    );
} 

function Logos({ logos, title }){

    return(
        <>
            <div className="flex flex-col w-full lg:w-1/2 gap-5">
                <span className="text-h6 md:text-h5 font-bold text-center text-lime-700">{title}</span>
                <div className="w-full h-full flex flex-row justify-around flex-wrap gap-5">
                    {logos.map((logo, id) => (
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
            </div>
        </>
    );
}