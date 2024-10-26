import Image from 'next/image';
import Link from 'next/link';
import NavButtons from './nav_buttons';


// Componente Nav
export default function Nav() {
    return (
        <>
            <nav className="fixed group top-0 z-10 hover:h-[120px] w-full flex items-center justify-center flex-row">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-light-citc opacity-0 group-hover:opacity-100" />
                <div className='bg-transparent relative z-10 px-3 h-[90px] w-full flex items-center justify-center flex-row'>
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
                </div>
            </nav>
        </>
    );
}