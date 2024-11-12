import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export function NavButton({ children, redirect_url, isSelected, hasScrolled, isLandingPage }){
        
    return(
        <>
            <Link href={redirect_url}>
                <button
                    className={`btn btn-ghost text-h6 font-medium rounded-none ${(redirect_url === isSelected) ? (((hasScrolled && isLandingPage) || (isSelected != "/")) ? 'border-b-2 border-solid border-regular-dark group-hover:border-gray-clear-citc' : 'border-b-2 border-solid border-gray-clear-citc') : 'border-b-0'} hover:bg-transparent hover:border-b-2 hover:border-solid border-x-0 border-t-0 hover:border-gray-clear-citc`}
                >
                    {children}
                </button>
            </Link>
        </>
    );
}

export function ServiceButton({ children }){

    const [hover, setHover] = useState(false);

    return(
        <>
            <button className="btn btn-outline group rounded-full hover:text-gray-clear-citc hover:bg-blue-dark-citc"
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