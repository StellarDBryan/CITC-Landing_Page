import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export function NavButton({ children, redirect_url, isSelected, hasScrolled, isLandingPage }){
        
    return(
        <>
            <Link href={redirect_url}>
                <button
                    className={`btn btn-ghost md:text-[1.1rem] lg:text-h6 font-semibold rounded-none ${(redirect_url === isSelected) ? (((hasScrolled && isLandingPage) || (isSelected != "/")) ? 'border-b-2 border-solid border-regular-dark group-hover:border-gray-clear-citc' : 'border-b-2 border-solid border-gray-clear-citc') : 'border-b-0'} hover:bg-transparent hover:border-b-2 hover:border-solid border-x-0 border-t-0 hover:border-gray-clear-citc`}
                >
                    {children}
                </button>
            </Link>
        </>
    );
}

export function MobileLinkBtn({ children, link }){



    return (
        <>
            <a href={link}>
                <button className='btn text-[1.1rem] w-full bg-inherit hover:bg-inherit text-gray-clear-citc flex flex-row items-center gap-2 border-0 border-gray-clear-citc hover:border-b-2 rounded-none shadow-none'>
                    {children}
                </button>
            </a>
        </>
    );
}

export function MobileNavBtn({ onClick }){

    return (
        <>
            <button className="btn btn-circle bg-gray-clear-citc text-blue-dark-citc glass p-[2px] sm:p-2 w-14 h-14 sm:w-16 sm:h-16 fixed bottom-4 right-4 z-50 drop-shadow-xl" onClick={onClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="3rem" height="3rem" viewBox="0 0 56 56">
                    <path fill="currentColor" fillRule="evenodd" d="M10 36a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 39c0-1.105.89-2 2.002-2zM10 26a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 29c0-1.105.89-2 2.002-2zM10 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6m35.998 1c1.106 0 2.002.888 2.002 2c0 1.105-.89 2-2.002 2H18.002A1.996 1.996 0 0 1 16 19c0-1.105.89-2 2.002-2z"/>
                </svg>
            </button>
        </>
    );
}

export function ServiceButton({ children }){

    const [hover, setHover] = useState(false);

    return(
        <>
            <button className="btn glass border border-solid border-regular-dark hover:border-inherit max-w-96 group rounded-full text-regular-dark hover:text-gray-clear-citc hover:bg-blue-dark-citc hover:border-blue-dark-citc"
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)}
            >
                {children}
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                    className=""
                    animate={{translateX:hover ? 5 : 0}}
                >
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"/>
                </motion.svg>
            </button>
        </>
    );
}

export function AboutButton({ children }){

    const [hover, setHover] = useState(false);

    return(
        <>
            <button className="btn glass border border-solid border-regular-dark hover:border-inherit max-w-96 group rounded-full text-regular-dark hover:text-gray-clear-citc hover:bg-blue-dark-citc hover:border-blue-dark-citc"
                onMouseEnter={() => setHover(true)} 
                onMouseLeave={() => setHover(false)}
            >
                {children}
                <motion.svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24"
                    className=""
                    animate={{translateX:hover ? 5 : 0}}
                >
                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"/>
                </motion.svg>
            </button>
        </>
    );
}