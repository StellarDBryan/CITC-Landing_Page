"use client";

import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";

export function SolutionCard({ img_src, img_alt, img_w, img_h, solution_text, redirection_url, button_text}){

    return (
        <>
            <Card className="bg-white-darker w-[300px] h-full max-h-[400px] p-5 flex flex-col justify-center rounded-3xl shadow-xl">
                <CardBody className="w-auto space-y-5 flex flex-col items-center">
                    <Image 
                        src={img_src}
                        alt={img_alt}
                        width={img_w}
                        height={img_h}
                    />
                    <p className="font-semibold text-regular w-auto text-center max-h-10">{solution_text}</p>
                </CardBody>
                <CardFooter className="flex flex-col justify-end items-end h-full w-auto max-h-[80px]">
                    <a href={redirection_url} className="w-full" target="_blank" rel="noopener noreferrer">
                        <Button
                            fullWidth
                            endContent={
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>
                            }
                            className="bg-gray-clear-citc p-2 flex flex-row justify-center rounded-full space-x-3 overflow-hidden drop-shadow-md hover:drop-shadow-lg"
                        >
                            <p className="font-semibold text-regular">{button_text}</p>
                        </Button>
                    </a>
                </CardFooter>
            </Card>
        </>
    );
}

export function ServiceCard({ text_intro, go_to_text, text_description, bg_img, bg_alt, icon, icon_alt, img_position}){

    return (
        <>
            <Card
                isPressable
                isHoverable
                className="relativ group shadow-2xl rounded-3xl w-[350px] h-[500px] overflow-hidden"
            >
                <Image
                    src={bg_img}
                    alt={bg_alt}
                    layout="fill"
                    className="object-cover filter group-hover:blur-sm"
                    style={{
                        objectPosition: `${img_position}`
                    }}
                />
                <div className="absolute inset-0 group-hover:bg-regular-dark group-hover:opacity-80 bg-gradient-to-t from-regular-dark from-10% to-transparent to-40%" />
                <CardBody className="hidden group-hover:block">
                    <h5 className="font-semibold text-h5">{go_to_text}</h5>
                    <p className="text-h6 font-medium">{text_description}</p>
                    <Image 
                        src={icon}
                        alt={icon_alt}
                        width={150}
                        height={150}
                    />
                </CardBody>
                <CardFooter className="z-10 mt-auto group-hover:hidden">
                    <h5 className="font-semibold text-h5">{text_intro}</h5>
                </CardFooter>
            </Card>
        </>
    );
}