import Image from 'next/image';


export default function Nav() {
    return (
        <>
            <nav className="bg-gray-clear-citc py-6 items-center flex flex-row">
                <Image 
                    src="/images/citc_logo_y_texto.jpg" 
                    alt="CITC Logo" 
                    width={250} 
                    height={50}
                />
                <div className="px-10 h-full w-full border-2 border-solid flex flex-row items-center justify-center space-x-8">
                    <button className="text-gray-dark-citc h-auto w-auto px-2 border-2 border-solid">
                        Inicio
                    </button>
                    <button className="text-gray-dark-citc h-auto w-auto px-2 border-2 border-solid">
                        Servicios
                    </button>
                    <button className="text-gray-dark-citc h-auto w-auto px-2 border-2 border-solid">
                        Afiliaciones
                    </button>
                    <button className="text-gray-dark-citc h-auto w-auto px-2 border-2 border-solid">
                        Eventos
                    </button>
                    <button className="text-gray-dark-citc h-auto w-auto px-2 border-2 border-solid">
                        Noticias
                    </button>
                    <button className="text-gray-dark-citc h-auto w-auto px-2 border-2 border-solid">
                        Contacto
                    </button>
                </div>
            </nav>
        </>
    );
}