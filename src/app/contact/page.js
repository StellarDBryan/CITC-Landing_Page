import ContactForm from '@/components/forms';

const content = {
    title: "Construyamos juntos el futuro", 
    description: "Déjanos tus datos y nos pondremos en contacto contigo para comenzar esta gran colaboración.", 
    firstName: "Nombre", 
    lastName: "Apellido", 
    email: "Correo", 
    company: "Compañia/Organización", 
    phone: "Teléfono", 
    message: "Mensaje", 
    message_placeholder: "Cuéntanos cómo te gustaría colaborar", 
    button: "Enviar", 
    summited: "Enviado", 
    summit_succed: "Formulario enviado con éxito.", 
    error: "Error al enviar el formulario", 
    verify: {
        fisrtName: "Nombre no válido (solo letras, máximo 30 caracteres).\n",
        lastName: "Apellido no válido (solo letras, máximo 30 caracteres).\n", 
        email: "Correo no válido.\n", 
        company: "Compañia no puede tener más de 50 caracteres.\n", 
        phone: "Teléfono no válido (solo números, máximo 15 caracteres).\n", 
        message: "Mensaje es obligatorio.\n",  
    }, 
}; 

export default function Contact() {

    return (
        <>
            <div>
                <main>
                    <ContactForm content={content} />
                </main>
            </div>
        </>
    );
}