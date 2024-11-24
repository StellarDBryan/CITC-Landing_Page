"use client";

import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { motion } from "framer-motion";
import { useState } from "react";

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

export function ServiceCardLP({ title, text_intro, go_to_text, text_description, bg_img, bg_alt, icon, icon_alt, img_position}){

    return (
        <>
            <Card
                isPressable
                isHoverable
                className="relative group shadow-2xl rounded-3xl w-[350px] h-[500px] overflow-hidden text-gray-clear-citc"
            >
                <Image
                    src={bg_img}
                    alt={bg_alt}
                    fill
                    className="object-cover transition-all ease-out delay-100 duration-500 filter group-hover:blur-sm"
                    style={{
                        objectPosition: `${img_position}`
                    }}
                />
                <div className="absolute inset-0 transition-opacity ease-in-out delay-100 duration-300 opacity-70 group-hover:opacity-0 bg-gradient-to-t from-regular-dark from-10% to-transparent to-25%" />
                <div className="absolute inset-0 transition-opacity ease-in-out delay-100 duration-300 bg-regular-dark opacity-0 group-hover:opacity-70" />
                <CardHeader className="absolute transition-opacity bg-opacity-70 group-hover:bg-opacity-0s flex flex-row w-full items-center justify-center py-5 bg-gradient-to-b from-regular-dark to-transparent">
                    <h4 className="text-h4 font-bold text-gray-clear-citc flex flex-row transform group-hover:scale-75 group-hover:opacity-0 transition-all ease-in-out delay-100 duration-300">
                        {title}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className="mx-2">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"/>
                        </svg>
                    </h4>
                </CardHeader>
                <CardBody className="absolute h-full w-full flex space-y-5 items-center justify-center transform scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all ease-in-out delay-100 duration-300">
                    <h5 className="font-semibold text-h5 flex flex-row items-center">
                        {go_to_text}{title}
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className="mx-2">
                            <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"/>
                        </svg>
                    </h5>
                    <p className="text-h6 font-medium">{text_description}</p>
                    <Image 
                        src={icon}
                        alt={icon_alt}
                        width={150}
                        height={150}
                    />
                </CardBody>
                <CardFooter className="z-10 transform group-hover:scale-75 transition-all ease-in-out delay-100 duration-300 opacity-100 mt-auto flex group-hover:opacity-0">
                    <h6 className="font-semibold text-h6">{text_intro}</h6>
                </CardFooter>
            </Card>
        </>
    );
}

export function CITC_Card({id, title, content, icon, buttons, visuals }){

    const [hover, setHover] = useState(false);
    const paragraphs = content.split('\n');

    return(
        <>
            <Card
                id={id}
                isHoverable
                className="w-11/12 flex flex-row items-center justify-center h-auto group rounded-none"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <motion.div
                    initial={{width: 500, height:550}}
                    transition={{type: "spring",  duration: 0.5}} 
                    className="card group p-5 flex flex-col justify-center items-center rounded-none text-regular-dark lg:space-y-5"
                >
                    <motion.div
                        animate={{translateX: hover ? 5 : 0}}
                        className="group-hover:text-blue-dark-citc flex flex-row items-center justify-center w-full h-auto space-x-3"
                    >
                        {icon}
                        <h4 
                            className="font-semibold text-h4"
                        >
                            {title}
                        </h4>
                    </motion.div>
                    <div className="w-auto h-auto flex flex-col items-center lg:space-y-3">
                        {paragraphs.map((paragraph, index) => (
                            <>
                                <p key={index} className="font-medium text-center text-regular t w-full">{paragraph}</p>
                            </>
                        ))}
                    </div>
                    <div className="w-full h-auto lg:space-x-3 flex flex-wrap items-center justify-center">
                        { buttons }
                    </div>
                </motion.div>
                {visuals}
            </Card>
        </>
    );
}

export function AlliedCard({ image, name }){
    
    return(
        <>
            <div className="card relative bg-gray-clear-citc flex items-center justify-center p-2 lg:w-[200px] lg:h-[200px] lg:mx-5">
                <div className="card-body relative w-full h-full">
                    <Image 
                        src={image}
                        alt={name}
                        fill
                        style={{ objectFit: 'contain'}}
                    />
                </div>
            </div>
        </>
    );
}

export function AboutCard({ title, text }){

    return(
        <>
            <div className="card p-3 flex items-center justify-center w-1/3">
                <h3 className="card-title text-h3 text-blue-dark-citc font-bold text-center mt-5">{title}</h3>
                <h5 className="card-body text-h6 text-regular-dark font-medium text-center">{text}</h5>
            </div>
        </>
    );
}

export function TeamMemberCard({ name, role, img, xAccount, linkedIn}){

    return(
        <>
            <div className="card p-5 flex flex-col items-center justify-center space-y-2 text-h6 text-gray-dark-citc font-medium">
                <div className="avatar rounded-full w-[15rem] h-[15rem] relative object-contain overflow-hidden">
                    <Image src={img} alt={`Foto de ${name}`} fill />
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h5 className="text-h5 text-blue-dark-citc font-bold">{name}</h5>
                    <h6 className="text-h6 font-semibold">{role}</h6>
                </div>
                <div className="flex flex-row w-1/2 items-center justify-around">
                    <a href={xAccount} target="_blank" rel="noopener noreferrer" >
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                                <path fill="currentColor" 
                                    d="m17.687 3.063l-4.996 5.711l-4.32-5.711H2.112l7.477 9.776l-7.086 8.099h3.034l5.469-6.25l4.78 6.25h6.102l-7.794-10.304l6.625-7.571zm-1.064 16.06L5.654 4.782h1.803l10.846 14.34z"/>
                            </svg>
                        </button>
                    </a>
                    <a href={linkedIn} target="_blank" rel="noopener noreferrer">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24">
                                <path fill="currentColor" 
                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"/>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </>
    );
}