import Image from "next/image";
import Link from "next/link";
import SocialButtons from "./ui/social_buttons.jsx";

export default function Footer(){

    const text = {
        'ContactInfo': {
            'title': 'Información de Contacto',
            'direction_title': 'Dirección',
            'direction': ' 3701, Edificio 18B, Complejo Industrial las Américas, Chihuahua, Chih.', 
            'ubication_title': 'Ubicación',
            'ubication': ' Ver en Google Maps',
            'googleMapsURL': 'https://maps.app.goo.gl/owjYXCf6qj7S9Un47',
            'tel_title': 'Teléfono', 
            'tel': ' +52 1 614 389 8301', 
            'email_title': 'Email', 
            'email': ' administracion@chihuahuait.org', 
        }, 
        'Links': {
            'title': 'Links', 
            'about': 'Nosotros',  
            'about_url': '/#AboutUs', 
            'events': 'Eventos', 
            'events_url': '/servicios#Events', 
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
                <div className="h-full space-y-4 lg:w-full">
                    <ul className="space-y-1">
                        <li><h6 className="text-regular font-semibold">{text.ContactInfo.title}</h6></li>
                        <li>
                            <p className="text-small-1">
                                <span className="font-semibold">{text.ContactInfo.direction_title}: </span>{text.ContactInfo.direction}
                            </p>
                        </li>
                        <li>
                            <p className="text-small-1 ">
                                <span className="font-semibold">{text.ContactInfo.ubication_title}: </span>
                                <a href={text.ContactInfo.googleMapsURL} className="underline underline-offset-2 font-medium hover:font-semibold"  target="_blank" rel="noopener noreferrer">
                                    {text.ContactInfo.ubication}
                                </a> 
                            </p>
                        </li>
                        <li>
                            <p className="text-small-1 ">
                                <span className="font-semibold">{text.ContactInfo.tel_title}:</span>{text.ContactInfo.tel}
                            </p>
                        </li>
                        <li>
                            <p className="text-small-1 ">
                                <span className="font-semibold">{text.ContactInfo.email_title}: </span>{text.ContactInfo.email}
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
                <div className="h-full lg:w-36">
                    <ul className="space-y-1">
                        <li><h6 className="text-regular font-semibold">{text.Links.title}</h6></li>
                        <li>
                            <Link href={text.Links.about_url}>
                                <p className="text-small-1 hover:underline hover:underline-offset-2 hover:font-semibold">
                                    {text.Links.about}
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={text.Links.events_url}>
                                <p className="text-small-1 hover:underline hover:underline-offset-2 hover:font-semibold">
                                    {text.Links.events}
                                </p>
                            </Link>
                        </li>
                        <li>
                            <a href={text.Links.living_lab_url} target="_blank" rel="noopener noreferrer">
                                <p className="text-small-1 hover:underline hover:underline-offset-2 hover:font-semibold">
                                    {text.Links.living_lab}
                                </p>
                            </a>
                        </li>
                        <li>
                            <Link href={text.Links.news_url}>
                                <p className="text-small-1 hover:underline hover:underline-offset-2 hover:font-semibold">
                                    {text.Links.news}
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href={text.Links.contact_url}>
                                <p className="text-small-1 hover:underline hover:underline-offset-2 hover:font-semibold">
                                    {text.Links.contact}
                                </p>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="h-full lg:w-44">
                    <ul className="space-y-1">
                        <li><h6 className="text-regular font-semibold">{text.Legal.title}</h6></li>
                        <li>
                            <a href="">
                                <p className="text-small-1 hover:underline hover:underline-offset-2 hover:font-semibold">
                                    {text.Legal.terms}
                                </p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <p className="text-small-1 hover:underline hover:underline-offset-2 hover:font-semibold">
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