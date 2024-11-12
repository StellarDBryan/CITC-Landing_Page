import Link from "next/link";

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

    return(
        <>
            <button className="btn btn-ghost">
                {children}
            </button>
        </>
    );
}