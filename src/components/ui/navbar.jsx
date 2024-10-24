import Image from 'next/image';
import NavButtons from './nav_buttons';


// Componente Nav
export default function Nav() {
    return (
        <>
            <nav className="bg-gray-clear-citc py-6 px-3 items-center flex flex-row">
                <Image 
                    src="/images/citc_logo_y_texto.jpg" 
                    alt="CITC Logo" 
                    width={250} 
                    height={50}
                />
                <NavButtons />
            </nav>
        </>
    );
}