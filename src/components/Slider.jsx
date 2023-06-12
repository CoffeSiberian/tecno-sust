import { useState, useEffect, useRef } from "react";
import Slide from "@mui/material/Slide";
import im1 from "../static/img/slide_img/1.jpg";
import im2 from "../static/img/slide_img/2.jpg";
import im3 from "../static/img/slide_img/3.jpg";

const Slider = () => {
    const [slide, setSlide] = useState(im1);
    const [anim, setAnim] = useState(true);
    const currentSlide = useRef(1);

    const executeAnimation = async (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    useEffect(() => {
        const slides = [im1, im2, im3];
        const changeSlide = async () => {
            setAnim(false);
            if (currentSlide.current === slides.length) {
                currentSlide.current = 0;
            }
            await executeAnimation(400);
            setSlide(slides[currentSlide.current++]);
            await executeAnimation(400);
            setAnim(true);
        };

        const interval = setInterval(() => {
            changeSlide();
        }, 4000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="flex relative max-h-96 h-auto max-w-full rounded-b-2xl justify-center border-b-4 overflow-hidden border-b-amber-500 m-2">
            <Slide direction="left" in={anim}>
                <img
                    className="object-cover object-center rounded-b-2xl w-full drop-shadow-2xl"
                    src={slide}
                    alt="Slide"
                />
            </Slide>
        </div>
    );
};

export default Slider;
