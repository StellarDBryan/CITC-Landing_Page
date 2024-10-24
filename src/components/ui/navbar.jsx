import Image from 'next/image';
import NavButtons from './nav_buttons';


// Componente Nav
export default function Nav() {
    return (
        <>
            <nav className="bg-gradient-to-b from-neutral-800 to-transparent py-6 px-3 items-center flex flex-row">
                <Image 
                    src="/images/citc_logos/CITC_horiz-04.png" 
                    alt="CITC Logo" 
                    width={200} 
                    height={50}
                />
                <NavButtons />
            </nav>
        </>
    );
}