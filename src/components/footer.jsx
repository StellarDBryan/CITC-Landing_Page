import Image from "next/image";
import Link from "next/link";

export default function Footer(){

    return (
        <>
            <footer className="footer bg-blue-dark-citc lg:p-10 text-gray-clear-citc">
                <aside>
                    <Link href="/" className="w-auto h-auto">
                        <Image 
                            src="/images/citc_logos/CITC_horiz-04.png"
                            alt="CITC Logo"
                            width={250}
                            height={250}
                        />
                    </Link>
                    <h6 className="text-small-1">Copyright © 2015 - All right reserved by Chihuhua IT Cluster</h6>
                </aside>
            </footer>
        </>
    );
}