"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { NavButton, MobileNavBtn } from './buttons';
import { transparent } from 'tailwindcss/colors';


const text = {
    'español': {
        home: 'Inicio', 
        services: 'Servicios', 
        about: 'Nosotros',
        news: 'Noticias', 
        contact: 'Contacto', 
        login: 'Iniciar Sesión', 
    }, 
}

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
                        height: 85, 
                    }
                }
                whileHover={
                    {
                        backgroundImage: 'linear-gradient(to top, rgba(19, 111, 178, 0) 0%, rgba(19, 111, 178, 0.35) 13%, rgba(19, 111, 178, 0.7) 25%, rgba(19, 111, 178, 0.9) 50%, rgba(19, 111, 178, 1) 100%)', 
                        color: '#f7f7f7',
                        height: 100,
                    }
                }
                className="fixed group top-0 z-50 hover:h-[110px] w-full hidden md:flex items-center justify-center flex-row">
                <div className='relative z-10 px-3 h-[90px] w-full flex items-center justify-between flex-row md:pr-[20%] lg:pr-[45%] overflow-hidden'>
                    <Link href="/">
                        <Image 
                            src="/images/logos/citc/CITC_horiz-04.png"
                            alt="CITC Logo" 
                            width={250} 
                            height={10} 
                            className='lg:mx-4 mb-3 lg:mb-2 w-auto hidden group-hover:block max-w-[170px] max-h-[100px] md:max-w-[190px] md:max-h-[120px] lg:max-w-[230px] lg:max-h-[160px] transform hover:scale-90 transition-transform duration-200 ease-in-out ' 
                        />
                        <Image 
                            src={`/images/logos/citc/CITC_horiz${(hasScrolled && isLandingPage) || (pathname != "/") ? '_Mesa_1' : '-04'}.png`} 
                            alt="CITC Logo" 
                            width={250} 
                            height={10} 
                            className='lg:mx-4 mb-3 lg:mb-2 w-auto block group-hover:hidden max-w-[170px] max-h-[100px] md:max-w-[190px] md:max-h-[120px] lg:max-w-[230px] lg:max-h-[160px] transform group-hover:scale-90 transition-transform duration-200 ease-in-out' 
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
            <div className="font-medium px-10 h-full lg:w-[50%] flex flex-row items-center justify-around space-x-3 lg:space-x-10">
                    <NavButton redirect_url="/" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.home}
                    </NavButton>
                    <NavButton redirect_url="/about" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.about}
                    </NavButton>
                    <NavButton redirect_url="/services" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.services}
                    </NavButton>
                    <NavButton redirect_url="/contact" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.contact}
                    </NavButton>
                </div>
        </>
    );
}

export function MobileNavbar(){

    const [isPressed, setPressed] = useState(false);

    const handleClick = () => {
        setPressed(!isPressed);
    };
    
    return(
        <>
            <motion.nav
                initial={{
                    backgroundColor: 'transparent', 
                    width: 0,
                }}
                animate={{
                    backgroundImage: 'linear-gradient(to right, rgba(19, 111, 178, 0) 0%, rgba(19, 111, 178, 0.35) 13%, rgba(19, 111, 178, 0.7) 25%, rgba(19, 111, 178, 0.9) 50%, rgba(19, 111, 178, 1) 100%)', 
                    width: (isPressed) ? 180 : 0,
                }}
                transition={{
                    type: 'spring', 
                    duration: 1,
                }}
                className="fixed right-0 pb-24 h-full w-[200px] flex flex-col items-end gap-5 justify-end md:hidden z-50 overflow-hidden"
            >
                <button className='btn'>
                    {text.español.home}
                </button>
                <button className='btn'>
                    {text.español.home}
                </button>
                <button className='btn'>
                    {text.español.home}
                </button>
                <button className='btn'>
                    {text.español.home}
                </button>
            </motion.nav>
            <MobileNavBtn onClick={handleClick} />
        </>
    );
}