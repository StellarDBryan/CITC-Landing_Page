"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { motion } from "framer-motion";
import { useState } from "react";

export function SolutionCard({ img_src, img_alt, solution_text, img_position, img_className, redirection_url}){

    return (
        <>
            <Card className="relative group w-full h-[175px] sm:w-[500px] sm:h-[200px] md:w-[230px] md:h-[380px] lg:w-[300px] lg:h-[400px] flex flex-col items-center justify-end rounded-xl md:rounded-3xl drop-shadow-2xl">
                <Image 
                    src={img_src}
                    alt={img_alt}
                    fill
                    className={`absolute inset-0 w-full h-full object-cover transform transition-transform duration-200 ease-in-out group-hover:scale-110 ${img_className}`}
                    style={{
                        objectPosition: `${img_position}`
                    }}
                /> 
                <CardFooter className="z-20 flex items-center justify-center bg-gradient-to-t from-regular-dark from-20% w-full h-2/5 sm:h-1/4 text-gray-50">
                    <h6 className="text-[1.1rem] sm:text-h6 font-semibold text-center">{solution_text}</h6>
                </CardFooter>
            </Card>
        </>
    );
}

export function ServiceCardLP({ title, text_intro, go_to_text, text_description, bg_img, bg_alt, icon, icon_alt, icon_className, img_position}){

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
                        className={icon_className}
                    />
                </CardBody>
                <CardFooter className="z-10 transform group-hover:scale-75 transition-all ease-in-out delay-100 duration-300 opacity-100 mt-auto flex group-hover:opacity-0">
                    <h6 className="font-semibold text-h6">{text_intro}</h6>
                </CardFooter>
            </Card>
        </>
    );
} 

export function ActionAreaCard({ link, visuals, bgColor, departmentName, actionText }){ 

    return (
        <>
            <Link href={link} className="w-full sm:w-auto flex justify-center h-auto group">
                <div 
                    className={`card text-white sm:text-gray-50 flex flex-row justify-around md:justify-start md:flex-col items-center py-2 px-5 sm:p-5 w-[85%] h-[150px] sm:w-[550px] sm:h-[170px] md:w-[235px] md:h-[400px] lg:w-[300px] lg:h-[430px] gap-1 sm:gap-5 group rounded-2xl drop-shadow-lg hover:drop-shadow-2xl overflow-hidden transition-all duration-200 ease-in-out`}
                    style={{ backgroundColor: bgColor}}
                >
                    <div className="w-2/5 sm:w-1/2 h-full md:w-full md:h-[55%] lg:h-[65%] flex items-center justify-center ">
                        {visuals} 
                    </div>
                    <div className="flex flex-col items-center justify-center sm:pt-5 md:pt-0 md:justify-between h-full w-1/2 md:w-full md:h-[35%]">
                        <h4 className="text-[1.2rem] sm:text-h5 lg:w-4/5 font-bold text-center  transition-transform duration-700 ease-in-out group-hover:transform group-hover:-translate-y-3">
                            {departmentName} 
                        </h4> 
                        <p className="hidden sm:inline text-p font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                            {actionText} 
                        </p> 
                    </div>
                </div>
            </Link>
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

export function AboutCard({ title, text, icon }){

    return(
        <>
            <div className="card p-3 flex flex-col items-center lg:w-[400px]">
                {icon ? icon() : ''}
                <h3 className="card-title text-[2.5rem] text-blue-dark-citc font-bold text-center mt-5">{title}</h3>
                <h5 className="card-body text-[1.1rem] text-regular-dark font-medium text-center">{text}</h5>
            </div>
        </>
    );
}

export function TeamMemberCard({ name, role, img, xAccount, linkedIn}){

    return(
        <>
            <div className="card md:p-5 flex flex-row items-center w-full sm:w-[420px] md:w-auto md:flex-col md:items-center gap-5 md:gap-2 text-gray-dark-citc font-medium">
                <div className="avatar rounded-full w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] relative object-contain overflow-hidden">
                    <Image src={img} alt={`Foto de ${name}`} fill />
                </div>
                <div className="flex flex-col justify-center items-start md:items-center">
                    <h5 className="text-[1.1rem] sm:text-[1.3rem] text-blue-dark-citc font-bold">{name}</h5>
                    <h6 className="text-[0.95rem] sm:text-[1.1rem] font-semibold">{role}</h6>
                    <div className="flex flex-row w-full md:w-1/2 justify-center gap-3 items-center md:justify-around">
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
                
            </div>
        </>
    );
}