import Image from "next/image";
import Link from "next/link";
import SocialButtons from "./ui/social_buttons.jsx";

export default function Footer(){

    const text = {
        'ContactInfo': {
            'title': 'Información de Contacto',
            'direction_title': 'Dirección',
            'direction': '3701, Edificio 18B, Complejo Industrial las Américas, Chihuahua, Chih.', 
            'tel_title': 'Teléfono',
            'tel': '+52 1 614 389 8301', 
            'email_title': 'Email', 
            'email': 'administracion@chihuahuait.org', 
        }, 
        'Links': {
            'title': 'Links', 
            'about': 'Nosotros',  
            'about_url': '/', 
            'events': 'Eventos', 
            'events_url': 'https://www.facebook.com/ChihITCluster/?locale=es_LA', 
            'living_lab': 'Living Lab CUU', 
            'living_lab_url': 'https://livinglab.io/home?&v=latest', 
            'news': 'Noticias', 
            'news_url': '/noticias', 
            'contact': 'Contacto', 
            'contact_url': '/contacto'
        }, 
        'Legal': {
            'title': 'Legal', 
            'terms': 'Términos y condiciones', 
            'privacy': 'Política de Privacidad',
        }, 
        'social': {
            'title': 'Redes Sociales',
            'facebook': 'https://www.facebook.com/ChihITCluster/?locale=es_LA', 
            'instagram': 'https://www.instagram.com/livinglab_cuu/', 
            'twitter': 'https://x.com/ChihuahuaIT',
            'linkedin': 'https://www.linkedin.com/company/chihuahuait/?originalSubdomain=mx', 
            'whatsapp': 'https://wa.me/5216143898301', 
        }
    }

    return (
        <>
            <footer className="footer bg-blue-dark-citc lg:p-10 text-gray-clear-citc">
                <div className="h-full">
                    <Link href="/" className="w-auto h-auto">
                        <Image 
                            src="/images/citc_logos/CITC_horiz-04.png"
                            alt="CITC Logo"
                            width={250}
                            height={250}
                        />
                    </Link>
                    <h6 className="text-small-1">© 2024 Chihuahua IT Cluster. Todos los derechos reservados.</h6>
                </div>
                <div className="h-full space-y-4 ">
                    <ul className="space-y-1">
                        <li><h6 className="text-regular font-semibold">{text.ContactInfo.title}</h6></li>
                        <li>
                            <p className="text-small-1">
                                {text.ContactInfo.direction_title}: {text.ContactInfo.direction}
                            </p>
                        </li>
                        <li>
                            <p className="text-small-1 ">
                                {text.ContactInfo.tel_title}: {text.ContactInfo.tel}
                            </p>
                        </li>
                        <li>
                            <p className="text-small-1 ">
                                {text.ContactInfo.email_title}: {text.ContactInfo.email}
                            </p>
                        </li>
                    </ul>
                    <div className="w-full h-auto flex flex-col items-center justify-center space-y-3">
                        <h6 className="text-regular font-semibold">{text.social.title}</h6>
                        <SocialButtons 
                            facebook={text.social.facebook}
                            instagram={text.social.instagram}
                            twitter={text.social.twitter}
                            linkedin={text.social.linkedin}
                            whatsapp={text.social.whatsapp}
                        />
                    </div>
                </div>
                <div className="h-full ">
                    <ul className="space-y-1">
                        <li><h6 className="text-regular font-semibold">{text.Links.title}</h6></li>
                        <li>
                            <Link href={text.Links.about_url}>
                                <p className="text-small-1">
                                    {text.Links.about}
                                </p>
                            </Link>
                        </li>
                        <li>
                            <a href={text.Links.events_url}>
                                <p className="text-small-1">
                                    {text.Links.events}
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href={text.Links.living_lab_url}>
                                <p className="text-small-1">
                                    {text.Links.living_lab}
                                </p>
                            </a>
                        </li>
                        <li>
                            <Link href={text.Links.news_url}>
                                <p className="text-small-1">
                                    {text.Links.news}
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={text.Links.contact_url}>
                                <p className="text-small-1">
                                    {text.Links.contact}
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="h-full ">
                    <ul className="space-y-1">
                        <li><h6 className="text-regular font-semibold">{text.Links.title}</h6></li>
                        <li>
                            <a href="">
                                <p className="text-small-1">
                                    {text.Legal.terms}
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p className="text-small-1">
                                    {text.Legal.privacy}
                                </p>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
}