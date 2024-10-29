"use client"
//@ts-ignore
// import useMeasure from "react-use-measure"
import { useMeasure } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
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
        let controls;
        //@ts-ignore
        let finalPos = -width / 2 - 3

        controls = animate(translation, [0, finalPos], {
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
            repeatDelay: 0
        })

        return controls.stop;
    }, [translation, width])

    return <motion.div className="py-8">
        <motion.div className="flex justify-center items-center gap-4" ref={ref}>
           {[...images,...images].map((item, idx) => (
                <CustomCard image={item} key={idx} />
           ))}
        </motion.div>
    </motion.div>
}



