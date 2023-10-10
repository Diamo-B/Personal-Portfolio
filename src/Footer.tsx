import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
const Footer = () => {

    const [scopeBlue, animateBlue] = useAnimate();
    const [scopeMid, animateMid] = useAnimate();
    const [scopeTop, animateTop] = useAnimate();
    
    useEffect(()=>{
        animateBlue(scopeBlue.current, {pathLength:1},{duration:5, repeat: Infinity})
        animateMid(scopeMid.current, {pathLength:1},{duration:5, repeat: Infinity})
        animateTop(scopeTop.current, {pathLength:1},{duration:5, repeat: Infinity})
    },[])


    return (
        <div
            className="w-full bg-slate-800 text-white flex flex-col items-center py-5 z-40"
            id="contact"
        >
            <p>Made by Elkarni Bachar - 10/2023</p>
            <p>
                Made using
                <motion.img
                    initial={{ rotate: 0 }}
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    src="/public/react.svg"
                    className="mx-2 w-10 inline animate-spin"
                    alt="react logo"
                />
                and
                
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="536.20036,202.69997,262.60018,249.59997"
                    className="inline w-8 mx-2"
                >

                    <g
                        fill="none"
                        fillRule="nonzero"
                        stroke=""
                        strokeWidth="none"
                        strokeLinecap="butt"
                        strokeLinejoin="miter"
                        strokeMiterlimit="10"
                        strokeDasharray=""
                        strokeDashoffset="0"
                        fontFamily="none"
                        fontWeight="none"
                        fontSize="none"
                        textAnchor="none"
                        style={{mixBlendMode: "normal"}}
                    >
                        <g>
                            <g clipPath="url(#clip-1)" id="Group 1">
                                <motion.path
                                    ref={scopeBlue}
                                    initial={{pathLength:0}}
                                    exit={{pathLength:0}}
                                    d="M799.3,453.46507l-66.87575,-63.56507l66.87575,-63.56507z"
                                    stroke="#ffffff"
                                    strokeWidth="10"
                                />
                                <motion.path
                                    initial={{fill: "none", opacity:0}}
                                    animate={{
                                        fill:"#5271b4",
                                        opacity:1,
                                        transition:{
                                            duration:5,
                                            repeat: Infinity
                                        }
                                    }}
                                    d="M733.87575,389.9l64.42425,61.23493v-122.46985z"
                                    fill="none"
                                    strokeWidth="10"
                                />
                                <motion.path
                                    ref={scopeMid}
                                    initial={{pathLength: 0}}
                                    exit={{pathLength:0}}
                                    d="M799.3,327.71458l-131.8,125.27525l-66.37575,-63.08983l198.17575,-188.36507z"
                                    stroke="#ffffff"
                                    strokeWidth="10"
                                />
                                <motion.path
                                    initial={{fill: "none", opacity:0}}
                                    animate={{
                                        fill: "#59529d",
                                        opacity:1,
                                        transition:{
                                            duration:5,
                                            repeat: Infinity
                                        }
                                    }}
                                    d="M602.57575,389.9l64.92425,61.71017l130.8,-124.32475v-123.42035z"
                                    fill="none"
                                    strokeWidth="10"
                                />
                                <motion.path
                                    ref={scopeTop}
                                    initial={{pathLength:0}}
                                    exit={{pathLength:0}}
                                    d="M535.7,453.46507v-254l132.52575,125.96507z"
                                    stroke="#ffffff"
                                    strokeWidth="10"
                                />
                                <motion.path
                                    initial={{fill: "none",opacity:0}}
                                    animate={{
                                        fill: "#bb4b96",
                                        opacity:1,
                                        transition:{
                                            duration:5,
                                            repeat: Infinity
                                        }
                                    }}
                                    d="M536.7,203.86507v247.26985l130.07425,-123.63493z"
                                    fill="none"
                                    strokeWidth="10"
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            </p>
        </div>
    );
};

export default Footer;
