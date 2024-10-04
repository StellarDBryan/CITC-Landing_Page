
export default function NavButtons() {
    return(
        <>
            <div className="px-10 h-full w-full flex flex-row items-center justify-center space-x-20">
                    <button className="text-gray-dark-citc h-auto w-auto px-2 text-regular">
                        Inicio
                    </button>
                    <button className="text-gray-dark-citc h-full w-auto px-2 text-regular">
                        Servicios
                    </button>
                    <button className="text-gray-dark-citc h-full w-auto px-2 text-regular">
                        Afiliaciones
                    </button>
                    <button className="text-gray-dark-citc h-full w-auto px-2 text-regular">
                        Eventos
                    </button>
                    <button className="text-gray-dark-citc h-full w-auto px-2 text-regular">
                        Noticias
                    </button>
                    <button className="text-gray-dark-citc h-full w-auto px-2 text-regular">
                        Contacto
                    </button>
                </div>
        </>
    );
}