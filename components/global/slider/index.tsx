"use client"
import { useMeasure } from "@uidotdev/usehooks";
import { useEffect } from "react";
import CustomCard from "../custom-card";
import {motion, animate, useMotionValue } from "framer-motion";

export default function Slider() {
    const images = [
        "/]solana.webp",
        "/icon.webp",
        "/nft-icon.webp"
    ];
    const [ref, {width}] = useMeasure()
    // const [overlay, setOverlay] = useState(false)

    const translation = useMotionValue(0)

    useEffect(() => {
        
        
        // this gives error
        if(width) {
            const finalPos = - width / 2 - 8

        const controls = animate(translation, [0, finalPos], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        })

        return controls.stop;
        }
    }, [translation, width])

    return <motion.div className="py-8">
        <motion.div className="flex justify-center items-center gap-4" ref={ref} style={{x: translation}}>
           {[...images, ...images].map((item, idx) => (
                <CustomCard image={item} key={idx} />
           ))}
        </motion.div>
    </motion.div>
}



