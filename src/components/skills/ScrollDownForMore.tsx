import {motion} from "framer-motion";
import { UilAngleDoubleDown } from "@iconscout/react-unicons";
type Props={
    nonAbsolute?:boolean
} 
const ScrollDown = ({nonAbsolute}:Props) => {
    return (
        <motion.div
            className={`w-full ${nonAbsolute? "": "absolute bottom-0"}  flex flex-col justify-center items-center text-white`}
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            transition={{
                ease: "easeInOut",
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
            }}
        >
            <UilAngleDoubleDown className="w-12 h-12" />
            <p className="font-bold text-base">Scroll down for more</p>
        </motion.div>
    );
};

export default ScrollDown;
