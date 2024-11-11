"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { NavButton } from './buttons';


const text = {
    'español': {
        'home': 'Inicio', 
        'services': 'Servicios', 
        'news': 'Noticias', 
        'contact': 'Contacto', 
        'login': 'Iniciar Sesión', 
    }, 
    'english': {
        'home': 'Home', 
        'services': 'Servicios', 
        'news': 'News', 
        'contact': 'Contact', 
        'login': 'Login'
    }
}


// Componente Nav
// export default function Nav() {
//     return (
//         <>
//             <nav className="fixed group top-0 z-50 hover:h-[110px] w-full flex items-center justify-center flex-row transition-all duration-500 ease-in-out delay-50">
//                 <div className="absolute inset-0 bg-navbar-gradient transition-all duration-500 ease-in-out delay-50" />
//                 <div className='bg-transparent relative z-10 px-3 h-[90px] w-full flex items-center justify-center flex-row text-regular-dark group-hover:text-gray-clear-citc'>
//                     <Link href="/">
//                         <Image 
//                             src="/images/citc_logos/CITC_horiz-04.png" 
//                             alt="CITC Logo" 
//                             width={250} 
//                             height={10} 
//                             className='lg:mx-4 lg:mb-4 w-auto hidden group-hover:block' 
//                         />
//                         <Image 
//                             src="/images/citc_logos/CITC_horiz_Mesa_1.png" 
//                             alt="CITC Logo" 
//                             width={250} 
//                             height={10} 
//                             className='lg:mx-4 lg:mb-4 w-auto group-hover:hidden' 
//                         />
//                     </Link>
//                     <NavButtons />
//                 </div>
//             </nav>
//         </>
//     );
// } 

export function Navbar() {

    const pathname = usePathname();
    const{scrollYProgress} = useScroll();
    const [isLandingPage, setIsLandingPage] = useState(pathname === "/");
    const [hasScrolled, setHasScrolled] = useState(false); // Estado para controlar el scroll

    

    useEffect(( ) => {
        const handleScroll = () => {
            if (window.scrollY > 0 && pathname === "/") {
                setHasScrolled(true); // Cambia el estado si se ha desplazado
            } else { setHasScrolled(false);}
        };
        setIsLandingPage(pathname === "/");
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pathname]);

    return (
        <>
            <motion.nav 
                animate={
                    {
                        backgroundImage: ((hasScrolled && isLandingPage) || (pathname != "/"))
                        ? 'linear-gradient(to top, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.35) 13%, rgba(247, 247, 247, 0.75) 25%, rgba(247, 247, 247, 0.9) 50%, rgba(247, 247, 247, 1) 100%)'
                        : 'linear-gradient(to top, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0) 13%, rgba(247, 247, 247, 0) 25%, rgba(247, 247, 247, 0) 50%, rgba(247, 247, 247, 0) 100%)',
                        //backgroundImage: 'linear-gradient(to top, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.35) 13%, rgba(247, 247, 247, 0.7) 25%, rgba(247, 247, 247, 0.9) 50%, rgba(247, 247, 247, 1) 100%)',
                        color: ((hasScrolled && isLandingPage) || (pathname != "/")) ? '#1e1e1e' : '#f7f7f7',
                        height: 90, 
                    }
                }
                whileHover={
                    {
                        backgroundImage: 'linear-gradient(to top, rgba(19, 111, 178, 0) 0%, rgba(19, 111, 178, 0.35) 13%, rgba(19, 111, 178, 0.7) 25%, rgba(19, 111, 178, 0.9) 50%, rgba(19, 111, 178, 1) 100%)', 
                        color: '#f7f7f7',
                        height: 110,
                    }
                }
                className="fixed group top-0 z-50 hover:h-[110px] w-full flex items-center justify-center flex-row">
                <div className='relative z-10 px-3 h-[90px] w-full flex items-center justify-center flex-row'>
                    <Link href="/">
                        <Image 
                            src="/images/citc_logos/CITC_horiz-04.png"
                            alt="CITC Logo" 
                            width={250} 
                            height={10} 
                            className='lg:mx-4 lg:mb-2 w-auto hidden group-hover:block max-w-[230px] max-h-[160px]' 
                        />
                        <Image 
                            src={`/images/citc_logos/CITC_horiz${(hasScrolled && isLandingPage) || (pathname != "/") ? '_Mesa_1' : '-04'}.png`} 
                            alt="CITC Logo" 
                            width={250} 
                            height={10} 
                            className='lg:mx-4 lg:mb-2 w-auto block group-hover:hidden max-w-[230px] max-h-[160px]' 
                        />
                    </Link>
                    <NavButtons isSelected={pathname} hasScrolled={hasScrolled} isLandingPage={isLandingPage} />
                </div>
            </motion.nav>
        </>
    );
}

export function NavButtons({ isSelected, hasScrolled, isLandingPage }) {

    return(
        <>
            <div className="font-medium lg:ml-[120px] px-10 h-full w-full flex flex-row items-center space-x-20">
                    <NavButton redirect_url="/" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.home}
                    </NavButton>
                    <NavButton redirect_url="/servicios" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.services}
                    </NavButton>
                    <NavButton redirect_url="/noticias" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.news}
                    </NavButton>
                    <NavButton redirect_url="/contacto" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.contact}
                    </NavButton>
                </div>
        </>
    );
}