'use client'

import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(useGSAP, ScrollTrigger);

const TextGradientOpacityOnScroll = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useGSAP(
    () => {
      const chars = textRefs.current;

      gsap.fromTo(
        chars,
        { opacity: 0.2 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 15%",
            end: "bottom 30%",
            scrub: true,
          },
          stagger: 0.02,
          ease: "power2.out",
        }
      );
    },
    { scope: containerRef }
  );

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span
        key={index}
        //@ts-ignore
        ref={(el) => (textRefs.current[index] = el)}
        className="opacity-20"
      >
        {char}
      </span>
    ));
  };

  return (
    <div ref={containerRef} className={`w-full ${className}`}>
      <p>{splitText(text)}</p>
    </div>
  );
};

export default TextGradientOpacityOnScroll;
