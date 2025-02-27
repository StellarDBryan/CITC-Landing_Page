import Image from "next/image";
import Link from "next/link";
import SocialButtons from "./ui/social_buttons.jsx";

export default function Footer(){

    const text = {
        copyright_text: "© 2024 Chihuahua IT Cluster. Todos los derechos reservados.", 
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
            email: 'info@chihuahuait.org', 
            mail: 'mailto:info@chihuahuait.org'
        }, 
        'Links': {
            'title': 'Links', 
            'about': 'Nosotros',  
            'about_url': '/about', 
            'LivingLab': 'LivingLab', 
            'LivingLab_url': '/livinglab',
            'Talent': 'Talent Development', 
            'Talent_url': '/talent', 
            'Business': 'Business Development', 
            'Business_url': '/business', 
            'LivingLabSite': 'Sitio Oficial LivingLab', 
            'LivingLabSite_url': 'https://livinglab.io/home?&v=latest', 
            'contact': 'Contacto', 
            'contact_url': '/contact'
        }, 
        'Legal': {
            'title': 'Legal', 
            'terms': 'Términos y condiciones', 
            'privacy': 'Política de Privacidad',
        }, 
        'social': {
            'title': 'Redes Sociales',
            'facebook': 'https://www.facebook.com/ChihITCluster/?locale=es_LA', 
            'twitter': 'https://x.com/ChihuahuaIT',
            'linkedin': 'https://www.linkedin.com/company/chihuahuait/?originalSubdomain=mx', 
            'whatsapp': 'https://wa.me/5216143898301', 
        }
    }

    return (
        <>
            <footer className="footer bg-blue-dark-citc p-5 md:p-7 pb-10 sm:pb-0 gap-x-5 grid grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 md:grid-rows-none md:grid-cols-3 justify-around text-gray-clear-citc z-50">
                <div className="h-full flex flex-col items-center sm:items-start sm:justify-start ">
                    <Link href="/" className="relative w-[250px] h-[120px] md:w-[230px] md:h-[160px] lg:w-[300px] overflow-y-hidden ">
                        <Image 
                            src="/images/logos/citc/CITC_horiz-04.png"
                            alt="CITC Logo"
                            fill
                            className="w-full h-full object-contain"
                        /> 
                    </Link>
                    <small className="text-sm1 text-center sm:text-start lg:text-[0.9rem]">{text.copyright_text}</small>
                </div>
                <div className="h-full grid grid-rows-2 space-y-3">
                    <ul className="space-y-1">
                        <li className="flex flex-row items-center space-x-1 lg:-ml-10">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24">
                                <path fill="currentColor" 
                                    d="M6 17c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6m9-9a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3M3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2"/>
                            </svg>
                            <h6 className="text-regular font-semibold">{text.ContactInfo.title}</h6></li>
                        <li>
                            <p className="text-sm1 lg:text-[0.9rem]">
                                <span className="font-semibold">{text.ContactInfo.direction_title}: </span>{text.ContactInfo.direction}
                            </p>
                        </li>
                        <li>
                            <p className="text-sm1 lg:text-[0.9rem] ">
                                <span className="font-semibold">{text.ContactInfo.ubication_title}: </span>
                                <a href={text.ContactInfo.googleMapsURL} className="link font-medium hover:text-blue-200"  target="_blank" rel="noopener noreferrer">
                                    {text.ContactInfo.ubication}
                                </a> 
                            </p>
                        </li>
                        <li>
                            <p className="text-sm1 lg:text-[0.9rem] ">
                                <span className="font-semibold">{text.ContactInfo.tel_title}:</span>{text.ContactInfo.tel}
                            </p>
                        </li>
                        <li>
                            <p className="text-sm1 lg:text-[0.9rem] whitespace-pre">
                                <span className="font-semibold">{text.ContactInfo.email_title}: </span>
                                <a href={`mailto:${text.ContactInfo.email}`} className="link font-medium hover:text-blue-200"  target="_blank" rel="noopener noreferrer">
                                    {text.ContactInfo.email}
                                </a> 
                            </p>
                        </li>
                    </ul>
                    <div className="w-full h-auto flex flex-col items-center justify-center space-y-3 ">
                        <div className="flex flex-row items-center justify-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 24 24">
                                <path fill="currentColor" 
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6m0 14c-2.03 0-4.43-.82-6.14-2.88a9.95 9.95 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20"/>
                            </svg>
                            <h6 className="text-regular font-semibold">{text.social.title}</h6>
                        </div>
                        <SocialButtons 
                            facebook={text.social.facebook}
                            twitter={text.social.twitter}
                            linkedin={text.social.linkedin}
                            whatsapp={text.social.whatsapp}
                        />
                    </div>
                </div>
                <div className="h-full w-full px-5 sm:px-0 flex flex-row sm:grid sm:grid-cols-subgrid justify-items-center sm:col-span-2 md:flex md:flex-col lg:flex-row ">
                    <div className="h-auto w-full sm:w-auto lg:w-full ">
                        <ul className="space-y-1">
                            <li className="flex flex-row items-center space-x-1 lg:-ml-9">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                                    <path fill="none" stroke="currentColor" strokeDasharray="28" strokeDashoffset="28" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 6l2 -2c1 -1 3 -1 4 0l1 1c1 1 1 3 0 4l-5 5c-1 1 -3 1 -4 0M11 18l-2 2c-1 1 -3 1 -4 0l-1 -1c-1 -1 -1 -3 0 -4l5 -5c1 -1 3 -1 4 0">
                                        <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="28;0"/>
                                    </path>
                                </svg>
                                <h6 className="text-regular font-semibold">{text.Links.title}</h6>
                            </li>
                            <li>
                                <Link href={text.Links.about_url}>
                                    <p className="text-sm1 lg:text-[0.9rem] font-medium hover:link hover:text-blue-200">
                                        {text.Links.about}
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href={text.Links.Talent_url}>
                                    <p className="text-sm1 lg:text-[0.9rem] font-medium hover:link hover:text-blue-200">
                                        {text.Links.Talent}
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href={text.Links.Business_url}>
                                    <p className="text-sm1 lg:text-[0.9rem] font-medium hover:link hover:text-blue-200">
                                        {text.Links.Business}
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href={text.Links.LivingLab_url}>
                                    <p className="text-sm1 lg:text-[0.9rem] font-medium hover:link hover:text-blue-200">
                                        {text.Links.LivingLab}
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <a href={text.Links.LivingLabSite_url} target="_blank" rel="noopener noreferrer">
                                    <p className="text-sm1 lg:text-[0.9rem] font-medium hover:link hover:text-blue-200">
                                        {text.Links.LivingLabSite}
                                    </p>
                                </a>
                            </li>
                            <li>
                                <Link href={text.Links.contact_url}>
                                    <p className="text-sm1 lg:text-[0.9rem] font-medium hover:link hover:text-blue-200">
                                        {text.Links.contact}
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="h-auto w-full sm:w-auto lg:w-full ">
                        <ul className="space-y-1">
                            <li className="flex flex-row items-center space-x-1 lg:-ml-9">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 1760 1760">
                                    <path fill="currentColor" 
                                        d="M1739 1504q0 53-37 90l-107 108q-39 37-91 37q-53 0-90-37l-363-364q-38-36-38-90q0-53 43-96L800 896l-126 126q-14 14-34 14t-34-14q2 2 12.5 12t12.5 13t10 11.5t10 13.5t6 13.5t5.5 16.5t1.5 18q0 38-28 68q-3 3-16.5 18t-19 20.5T582 1243t-22 15.5t-22 9t-26 4.5q-40 0-68-28L36 836Q8 808 8 768q0-13 4.5-26t9-22T37 698t16.5-18.5t20.5-19T92 644q30-28 68-28q10 0 18 1.5t16.5 5.5t13.5 6t13.5 10t11.5 10t13 12.5t12 12.5q-14-14-14-34t14-34l348-348q14-14 34-14t34 14q-2-2-12.5-12T649 233t-10-11.5t-10-13.5t-6-13.5t-5.5-16.5t-1.5-18q0-38 28-68q3-3 16.5-18t19-20.5T698 37t22-15.5t22-9T768 8q40 0 68 28l408 408q28 28 28 68q0 13-4.5 26t-9 22t-15.5 22t-16.5 18.5t-20.5 19t-18 16.5q-30 28-68 28q-10 0-18-1.5t-16.5-5.5t-13.5-6t-13.5-10t-11.5-10t-13-12.5t-12-12.5q14 14 14 34t-14 34L896 800l256 256q43-43 96-43q52 0 91 37l363 363q37 39 37 91"/>
                                </svg>
                                <h6 className="text-regular font-semibold">{text.Legal.title}</h6>
                            </li>
                            <li>
                                <a href="">
                                    <p className="text-sm1 lg:text-[0.9rem] font-medium hover:link hover:text-blue-200">
                                        {text.Legal.terms}
                                    </p>
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <p className="text-sm1 lg:text-[0.9rem] font-medium hover:link hover:text-blue-200">
                                        {text.Legal.privacy}
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    );
}