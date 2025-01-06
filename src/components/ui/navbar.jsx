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
        livingLab: 'LivingLab', 
        talent: 'Talent', 
        business: 'Business', 
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
            <div className="font-medium px-3 h-full lg:w-[50%] flex flex-row items-center justify-around space-x-1 lg:space-x-5">
                    <NavButton redirect_url="/" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.home}
                    </NavButton>
                    <NavButton redirect_url="/talent" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.talent}
                    </NavButton>
                    <NavButton redirect_url="/business" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.business}
                    </NavButton>
                    <NavButton redirect_url="/livinglab" isSelected={isSelected} hasScrolled={hasScrolled} isLandingPage={isLandingPage}>
                        {text.español.livingLab}
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
                    x: 210, 
                }}
                animate={{
                    width: 180, 
                    translateX: (isPressed) ? -210 : 210,
                    paddingLeft: (isPressed) ? 15 : 0,
                    paddingRight: (isPressed) ? 15 : 0,
                    paddingBottom: 90, 
                }} 
                transition={{
                    ease: 'easeInOut',
                    duration: 0.5,
                }}
                className="fixed right-0 pb-24 h-full w-[200px] bg-gradient-to-b from-blue-900 to-blue-light-citc flex flex-col items-center gap-5 justify-end md:hidden z-50 overflow-hidden drop-shadow-2xl"
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
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 3s-6.186 5.34-9.643 8.232A1.04 1.04 0 0 0 2 12a1 1 0 0 0 1 1h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a1 1 0 0 0 1-1a.98.98 0 0 0-.383-.768C18.184 8.34 12 3 12 3"/>
                    </svg>
                    {text.español.home}
                </MobileLinkBtn>
                <MobileLinkBtn link="/talent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                            <g fill="none" fillRule="evenodd">
                                <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/>
                                <path fill="currentColor" d="M11 2a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 11c-2.395 0-4.575.694-6.178 1.672c-.8.488-1.484 1.064-1.978 1.69C2.358 16.976 2 17.713 2 18.5c0 .845.411 1.511 1.003 1.986c.56.45 1.299.748 2.084.956C6.665 21.859 8.771 22 11 22q.346 0 .685-.005a1 1 0 0 0 .89-1.428A6 6 0 0 1 12 18c0-1.252.383-2.412 1.037-3.373a1 1 0 0 0-.72-1.557Q11.671 13 11 13m7.864.997a1 1 0 0 0-1.728 0l-.91 1.562l-1.766.382a1 1 0 0 0-.534 1.644l1.204 1.348l-.182 1.798a1 1 0 0 0 1.398 1.016l1.654-.73l1.654.73a1 1 0 0 0 1.398-1.016l-.182-1.799l1.204-1.347a1 1 0 0 0-.534-1.644l-1.766-.382z"/>
                            </g>
                        </svg>
                    {text.español.talent}
                </MobileLinkBtn>
                <MobileLinkBtn link="/business">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34M12 6a1 1 0 0 0-1 1a3 3 0 1 0 0 6v2a1.02 1.02 0 0 1-.866-.398l-.068-.101a1 1 0 0 0-1.732.998a3 3 0 0 0 2.505 1.5H11a1 1 0 0 0 .883.994L12 18a1 1 0 0 0 1-1l.176-.005A3 3 0 0 0 13 11V9c.358-.012.671.14.866.398l.068.101a1 1 0 0 0 1.732-.998A3 3 0 0 0 13.161 7H13a1 1 0 0 0-1-1m1 7a1 1 0 0 1 0 2zm-2-4v2a1 1 0 0 1 0-2"/>
                    </svg>
                    {text.español.business}
                </MobileLinkBtn>
                <MobileLinkBtn link="/livinglab">
                    <Image 
                        src="/images/logos/citc/LivingLab_icon.png"
                        alt='LivingLab Logo'
                        width={25}
                        height={25}
                        className='filter grayscale brightness-200'
                    />
                    {text.español.livingLab}
                </MobileLinkBtn>
                <MobileLinkBtn link="/contact">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-6.54 4.09c-.65.41-1.47.41-2.12 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"/>
                    </svg>
                    {text.español.contact}
                </MobileLinkBtn>
            </motion.nav>
            <MobileNavBtn onClick={handleClick} isPressed={isPressed} />
        </>
    );
}