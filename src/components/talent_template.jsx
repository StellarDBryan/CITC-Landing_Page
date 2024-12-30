import Image from "next/image";

const content = {
    heroSection: {
        title: 'Talent Development', 
        intro: 'Fortalecemos el talento local a través de programas educativos, eventos y comunidad tecnológica. '
    }, 
};

export default function HeroSection(){

    return (
        <>
            <section className="w-full h-screen p-10 bg-gradient-to-b from-[#92d050] from-50% flex items-center justify-around">
                <div className="flex flex-col justify-center text-gray-50 lg:ml-[3vw] lg:mb-[15vh]">
                    <div className="flex flex-row items-center">
                        <div className="relative flex justify-center text-gray-clear-citc overflow-hidden transform scale-[0.9]">
                            <Image 
                                src="/images/icons/user_icon.png"
                                alt="random alt"
                                width={500}
                                height={500}
                                className="w-[127px] absolute z-10 bottom-9 sm:bottom-4 md:bottom-1 lg:bottom-5"
                            />
                            <svg xmlns="http://www.w3.org/2000/svg" width="250" height="250" viewBox="0 0 32 32" className="transform scale-[1.1] sm:scale-[0.7] md:scale-100 transition-transform duration-1000 ease-in-out animate-none group-hover:rotate-[360deg] ">
                                <path fill="currentColor" d="m16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"/>
                            </svg>
                        </div>
                        <h3 className="font-extrabold text-h2">{content.heroSection.title}</h3>
                    </div>
                    <h4 className="font-semibold text-h5 text">{content.heroSection.intro}</h4>
                </div>
                <Image
                    src="/images/backgrounds/talentImg.png"
                    alt="Talent image"
                    width={800}
                    height={800}
                    className=" w-[700px] h-[700px] object-cover opacity-80 "
                />
            </section>
        </>
    );
}