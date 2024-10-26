import Image from 'next/image';
import Link from 'next/link';
import NavButtons from './nav_buttons';


// Componente Nav
export default function Nav() {
    return (
        <>
            <nav className="fixed group top-0 z-10 hover:h-[110px] w-full flex items-center justify-center flex-row transition-height duration-500 ease-in-out delay-50">
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(18,111,178,100)] via-[rgba(18,111,178,30)] to-[rgba(18,111,178,0)] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out delay-50" />
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