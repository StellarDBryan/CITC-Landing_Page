"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';
import { NavButton, MobileNavBtn, MobileLinkBtn } from './buttons';
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
                    x: 100, 
                }}
                animate={{
                    backgroundColor: 'rgba(19, 111, 178)',
                    width: 180, 
                    translateX: (isPressed) ? -100 : 100,
                    paddingLeft: (isPressed) ? 15 : 0,
                    paddingRight: (isPressed) ? 15 : 0,
                    paddingBottom: 90, 
                }} 
                transition={{
                    ease: 'easeInOut',
                    duration: 0.4,
                }}
                className="fixed right-0 pb-24 h-full w-[200px] flex flex-col items-center gap-5 justify-end md:hidden z-50 overflow-hidden drop-shadow-2xl"
            >
                <a href='/'>
                    <Image 
                        src="/images/logos/citc/CITC_Logo.png"
                        alt='CITC Logo'
                        width={90}
                        height={90}
                        className='transform hover:scale-90 duration-150 ease-in-out'
                    /> 
                </a>
                <MobileLinkBtn link="/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 3s-6.186 5.34-9.643 8.232A1.04 1.04 0 0 0 2 12a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1a.98.98 0 0 0-.383-.768C18.184 8.34 12 3 12 3"/>
                    </svg>
                    {text.español.home}
                </MobileLinkBtn>
                <MobileLinkBtn link="/about">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <circle cx="12" cy="6" r="4" fill="currentColor"/>
                        <path fill="currentColor" d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"/>
                    </svg>
                    {text.español.about}
                </MobileLinkBtn>
                <MobileLinkBtn link="services">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M507.068 188.5c-18.305-50.06-78.104-66.608-119.336-39.208l-55.238-45.86C347.424 54.955 312.545 1.63 258.318.057c-55.846-1.62-94.39 52.747-78.826 103.31l-55.277 45.891c-42.492-28.237-103.813-9.494-120.367 42.404C-11.444 239.605 20.796 286.595 66 294.728l21.387 76.738c-38.19 32.88-37.263 96.126 7.468 126.514c44.314 30.104 102.873 8.432 120.096-38.207h81.964c17.847 48.875 80.026 69.33 123.81 35.53c42.17-32.553 40.07-94.432 1.737-125.498l22.079-74.826c47.395-7.553 80.411-57.571 62.527-106.48M293.596 415.783h-75.27c-8.408-41.328-48.919-69.346-90.473-62.973l-17.49-62.761c42.473-17.089 61.169-67.067 42.522-107.414l50.678-42.072c29.563 25.716 74.975 26.034 104.818.034l50.722 42.111c-18.598 40.235.075 89.356 41.183 106.797l-18.577 62.955c-41.13-5.136-79.856 23.192-88.113 63.323"/>
                    </svg>
                    {text.español.services}
                </MobileLinkBtn>
                <MobileLinkBtn link="/contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"/>
                    </svg>
                    {text.español.contact}
                </MobileLinkBtn>
            </motion.nav>
            <MobileNavBtn onClick={handleClick} />
        </>
    );
}