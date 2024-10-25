import Image from 'next/image';
import Link from 'next/link';
import NavButtons from './nav_buttons';


// Componente Nav
export default function Nav() {
    return (
        <>
            <nav className="fixed top-0 z-10  px-3 h-[95px] w-full flex items-center justify-center flex-row">
                <Link href="/">
                    <Image 
                        src="/images/citc_logos/CITC_horiz-04.png" 
                        alt="CITC Logo" 
                        width={250} 
                        height={10} 
                        className='lg:mx-4 lg:mb-4 w-auto'
                    />
                </Link>
                <NavButtons />
            </nav>
        </>
    );
}