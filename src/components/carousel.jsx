"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Image from 'next/image'; 

function wrap(min, max, value) {
    // Asegúrate de que el valor esté dentro del rango
    return ((value - min) % (max - min + 1) + (max - min + 1)) % (max - min + 1) + min;
}

export function ImgCarousel({ images }){

    const variants = {
        enter: (direction) => {
          return {
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
          };
        },
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1,
        },
        exit: (direction) => {
          return {
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
          };
        }
      };
      
      /**
       * Experimenting with distilling swipe offset and velocity into a single variable, so the
       * less distance a user has swiped, the more velocity they need to register as a swipe.
       * Should accomodate longer swipes and short flicks without having binary checks on
       * just distance thresholds and velocity > 0.
       */
      const swipeConfidenceThreshold = 10000;
      const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
      };
    
    const [[page, direction], setPage] = useState([0, 0]);

    // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
    // then wrap that within 0-2 to find our image ID in the array below. By passing an
    // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
    // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
    const imageIndex = wrap(0, images.length, page);
  
    const paginate = (newDirection) => {
        const newPage = page + newDirection; 
        if(newPage >= 0 && newPage < images.length)
            setPage([page + newDirection, newDirection]);
        else if(newPage < 0)
            setPage([images.length-1], newDirection);
        else if(newPage >= images.length)
            setPage([newPage-images.length], newDirection);
    };

    const MotionImage = motion.create(Image);
  
    return (
        <div className='w-[350px] h-[300px] md:w-[450px] md:h-[350px] lg:w-[550px] lg:h-[450px] rounded-3xl relative overflow-hidden flex flex-row items-center justify-center '>
            <button className="absolute z-10 left-0 btn btn-circle text-gray-50 border-none group rounded-full bg-neutral-800/60 hover:bg-neutral-800/80 ml-2" onClick={() => {paginate(-1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className='rotate-180'>
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"/>
                </svg>
            </button>
            <div className='relative w-full h-full overflow-hidden'>
                <MotionImage 
                    key={page}
                    src={images[imageIndex]}
                    alt={`Image ${images[imageIndex]}`}
                    fill
                    className='object-cover' 
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
        
                    if (swipe < -swipeConfidenceThreshold) {
                        paginate(1);
                    } else if (swipe > swipeConfidenceThreshold) {
                        paginate(-1);
                    }
                    }}
                />
            </div>
            <button className="absolute z-10 right-0 btn btn-circle text-gray-50 border-none group rounded-full bg-neutral-800/60 hover:bg-neutral-800/80 mr-2" onClick={() => {paginate(1)}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                    <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.5 12h15m0 0l-5.625-6m5.625 6l-5.625 6"/>
                </svg>
            </button>
        </div>
    );
}