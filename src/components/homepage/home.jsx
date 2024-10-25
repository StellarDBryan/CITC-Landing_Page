import Image from "next/image";

export default function Home(){

    return (
        <>
            <section className="bg-gray-700 bg-[url('/images/cuu_2.jpg')] bg-cover bg-center h-screen">
                <div>
                    <Image src="/images/citc_logos/CITC_horiz-04.png"
                        alt="CITC Logo"
                        width={600}
                        height={250}/>
                    <h2 className="font-medium text-h4 text-gray-clear-citc">
                        Colaboración y Evolución Tecnológica <br /> en el corazón de Chihuahua
                    </h2>
                </div>
            </section>
            <section className="my-10">
                <h1 className="text-h1">PRUEBA DE SCROLL</h1>
            </section>
        </>
    );
}