import { motion, useMotionValue, useTransform, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";
import CursorBlinker from "./cursorBlinking";

type Props = {
  text: string;
  colorSuffix?: string;
  sizeSuffix?: string;
  cursorHeight?: string
};

const AnimatedText = ({
  text,
  colorSuffix,
  sizeSuffix,
  cursorHeight
}: Props) => {
  const textIndex = useMotionValue(0);
  // Use the custom useAnimate hook to control the animation
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  
  //explain: this animates the motion value from 0 to the text length, then stops the animation
  const controls = animate(textIndex, text.length, {
    type: "tween", // Not really needed because adding a duration will force "tween"
    duration: 5,
    ease: "easeOut",
  });
  useEffect(() => {
    controls.stop()
  }, []);
  
  useEffect(() => {
    if (isInView) {
      controls.play()
    }
  }, [isInView])

  //explain: this runs each time the motion value changes, then round it into an integer. .e.g we can't show half a letter so we round it into full integer
  const roundedIndex = useTransform(textIndex, (latest) => Math.round(latest));
  //explain: this changes the text each time the roundedIndex  changes
  const introAnimatedText = useTransform(roundedIndex, (latest) =>
    text.slice(0, latest)
  );

  const className = [
    "font-itim",
    "text-center",
    colorSuffix ? `text-${colorSuffix}` : "",
    sizeSuffix ? ` text-${sizeSuffix}` : " text-5xl",
  ];
  return (
    <div>
      <motion.span className={className.join(" ")} ref={scope}>
        {introAnimatedText}
      </motion.span>
      <CursorBlinker colorSuffix={colorSuffix} height={cursorHeight} />
    </div>
  );
};

export default AnimatedText;
