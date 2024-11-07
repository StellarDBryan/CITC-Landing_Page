import { Tabs } from "@/components/ui/tabs";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";

export default function Servicios(){

    const text = {
        'citc': {
            'title_1': 'Conexión', 
            'content_1': 'Colaboramos con distintas empresas del sector de IT y universidades con las que puedes conectar y establecer buenas relaciones apoyadas por nosotros. ',
            'title_2': 'Espacio', 
            'content_2': 'Contamos con una instalación para trabajo y cowork, el Living Lab CUU. Donde puedes encontrarnos y ser parte de un Networking importante en Chihuahua. ', 
            'title_3': 'Eventos', 
            'content_3': 'Apoyamos, patrocinamos e invitamos a nuestro espacio distintos eventos relacionados al sector de IT e Innovación, como: conferencias, talleres, hackathones, pitches y eventos de comunidades. ',
        }
    }

    const services = [
        {
            title: 'CITC', 
            content: (
                <>
                    <div>
                        <Card
                            isPressable
                            isHoverable
                            className="relative group shadow-2xl rounded-3xl w-[350px] h-[500px] overflow-hidden text-regular-dark"
                        >
                            <CardBody className=" h-full w-full flex space-y-5 items-center justify-center">
                                <h5 className="font-semibold text-h5">{text.citc.title_1}</h5>
                                <p className="text-h6 font-medium">{text.citc.content_1}</p>
                                
                            </CardBody>
                        </Card>
                    </div>
                </>
            ),
        }, 
        {
            title: 'Living Lab CUU'
        }
    ]

    return(
        <>
            <section className="w-screen h-screen flex flex-col items-center justify-center lg:mt-24">
                <Tabs tabs={services} />
            </section>
        </>
    );
}