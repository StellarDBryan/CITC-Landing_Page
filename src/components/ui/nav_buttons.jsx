import Link from "next/link";

export default function NavButtons() {
    return(
        <>
            <div className="px-10 h-full w-full flex flex-row items-center justify-center space-x-20">
                    <Link href="/">
                        <button className="text-gray-clear-citc-citc h-auto w-auto px-2 text-regular">
                            Inicio
                        </button>
                    </Link>
                    <Link href="/servicios">
                        <button className="text-gray-clear-citc-citc h-full w-auto px-2 text-regular">
                            Servicios
                        </button>
                    </Link>
                    <button className="text-gray-clear-citc-citc h-full w-auto px-2 text-regular">
                        Noticias
                    </button>
                    <button className="text-gray-clear-citc-citc h-full w-auto px-2 text-regular">
                        Contacto
                    </button>
                </div>
        </>
    );
}