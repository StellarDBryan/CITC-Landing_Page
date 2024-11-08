"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import NavButtons from './nav_buttons';
import { motion, useScroll } from 'framer-motion';


// Componente Nav
export default function Nav() {
    return (
        <>
            <nav className="fixed group top-0 z-50 hover:h-[110px] w-full flex items-center justify-center flex-row transition-all duration-500 ease-in-out delay-50">
                <div className="absolute inset-0 bg-navbar-gradient transition-all duration-500 ease-in-out delay-50" />
                <div className='bg-transparent relative z-10 px-3 h-[90px] w-full flex items-center justify-center flex-row text-regular-dark group-hover:text-gray-clear-citc'>
                    <Link href="/">
                        <Image 
                            src="/images/citc_logos/CITC_horiz-04.png" 
                            alt="CITC Logo" 
                            width={250} 
                            height={10} 
                            className='lg:mx-4 lg:mb-4 w-auto hidden group-hover:block' 
                        />
                        <Image 
                            src="/images/citc_logos/CITC_horiz_Mesa_1.png" 
                            alt="CITC Logo" 
                            width={250} 
                            height={10} 
                            className='lg:mx-4 lg:mb-4 w-auto group-hover:hidden' 
                        />
                    </Link>
                    <NavButtons />
                </div>
            </nav>
        </>
    );
} 

export function Navbar() {

    const router = useRouter();
    const{scrollYProgress} = useScroll();
    const isLandingPage = router.pathname == "/";

    return (
        <>
            <motion.nav 
                initial={
                    {
                        // backgroundImage: (isLandingPage && scrollY > 0)
                        // ? 'linear-gradient(to top, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.35) 13%, rgba(247, 247, 247, 0.7) 25%, rgba(247, 247, 247, 0.9) 50%, rgba(247, 247, 247, 1) 100%)'
                        // : 'linear-gradient(to top, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0) 13%, rgba(247, 247, 247, 0) 25%, rgba(247, 247, 247, 0) 50%, rgba(247, 247, 247, 0) 100%)',
                        backgroundImage: 'linear-gradient(to top, rgba(247, 247, 247, 0) 0%, rgba(247, 247, 247, 0.35) 13%, rgba(247, 247, 247, 0.7) 25%, rgba(247, 247, 247, 0.9) 50%, rgba(247, 247, 247, 1) 100%)',
                        height: 90, 
                    }
                }
                whileHover={
                    {
                        backgroundImage: 'linear-gradient(to top, rgba(19, 111, 178, 0) 0%, rgba(19, 111, 178, 0.35) 13%, rgba(19, 111, 178, 0.7) 25%, rgba(19, 111, 178, 0.9) 50%, rgba(19, 111, 178, 1) 100%)', 
                        height: 110,
                    }
                }
                className="fixed group top-0 z-50 hover:h-[110px] w-full flex items-center justify-center flex-row">
                {console.log(router.pathname)}
                {console.log(scrollYProgress.get())}
                <div className='relative z-10 px-3 h-[90px] w-full flex items-center justify-center flex-row text-regular-dark group-hover:text-gray-clear-citc'>
                    <Link href="/">
                        <Image 
                            src="/images/citc_logos/CITC_horiz-04.png" 
                            alt="CITC Logo" 
                            width={250} 
                            height={10} 
                            className='lg:mx-4 lg:mb-4 w-auto hidden group-hover:block max-w-[250]' 
                        />
                        <Image 
                            src="/images/citc_logos/CITC_horiz_Mesa_1.png" 
                            alt="CITC Logo" 
                            width={250} 
                            height={10} 
                            className='lg:mx-4 lg:mb-4 w-auto group-hover:hidden max-w-[250]' 
                        />
                    </Link>
                    <NavButtons />
                </div>
            </motion.nav>
        </>
    );
}