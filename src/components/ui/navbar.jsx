import Image from 'next/image';


export default function Nav() {
    return (
        <nav>
            <Image 
                src="/images/citc_logo_y_texto.jpg"
                alt="CITC Logo"
                width={250} 
                height={50}
            />
            Aqui va el NAV
        </nav>
    );
}