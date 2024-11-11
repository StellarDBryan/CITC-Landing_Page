"use client";

import { Tabs } from "@/components/ui/tabs";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Servicios(){

    const text = {
        'citc': {
            'title_1': 'Conexión', 
            'content_1': 'Establece conexiones clave con empresas líderes y universidades del sector IT. Facilitamos relaciones estratégicas que potencian tu crecimiento profesional y empresarial. ',
            'title_2': 'Espacio', 
            'content_2': 'Trabaja y colabora en el corazón del Networking de Chihuahua. Nuestro Living Lab CUU es más que un espacio de coworking; es un hub de innovación donde las ideas florecen y las oportunidades surgen. ', 
            'title_3': 'Eventos', 
            'content_3': 'Sé parte de eventos que transforman la industria IT. Desde conferencias hasta hackathones, fomentamos el aprendizaje, la innovación y el crecimiento en cada encuentro. ',
        }
    }

    const services = [
        {
            title: 'CITC', 
            content: (
                <>
                    <div className="flex flex-row flex-wrap">
                        <Card
                            isPressable
                            isHoverable
                            className="relative group shadow-2xl rounded-none w-[300px] h-[500px] overflow-hidden text-regular-dark"
                        >
                            <CardBody className=" h-full w-full flex space-y-5 items-center justify-center">
                                <h5 className="font-semibold text-h5">{text.citc.title_1}</h5>
                                <p className="text-h6 font-medium">{text.citc.content_1}</p>
                                
                            </CardBody>
                        </Card>
                        <Card
                            isPressable
                            isHoverable
                            className="relative group shadow-2xl rounded-none w-[350px] h-[500px] overflow-hidden text-regular-dark"
                        >
                            <CardBody className=" h-full w-full flex space-y-5 items-center justify-center">
                                <h5 className="font-semibold text-h5">{text.citc.title_2}</h5>
                                <p className="text-h6 font-medium">{text.citc.content_2}</p>
                                
                            </CardBody>
                        </Card>
                        <Card
                            isPressable
                            isHoverable
                            className="relative group shadow-2xl rounded-none w-[350px] h-[500px] overflow-hidden text-regular-dark"
                        >
                            <CardBody className=" h-full w-full flex space-y-5 items-center justify-center">
                                <h5 className="font-semibold text-h5">{text.citc.title_3}</h5>
                                <p className="text-h6 font-medium">{text.citc.content_3}</p>
                                
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