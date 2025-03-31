import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "gsap-trial/SplitText";

gsap.registerPlugin(SplitText);

function Text() {
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });

  const animationText = contextSafe(() => {
    let splitText1 = new SplitText(".title-1", {
      type: "chars",
    });
    let splitText2 = new SplitText(".title-2", {
      type: "chars",
    });

    gsap.to(splitText1.chars, {
      y: "-100%",
      stagger: 0.025,
      ease: "power1.inOut",
      duration: 0.1,
    });

    gsap.to(splitText2.chars, {
      y: "-100%",
      stagger: 0.025,
      ease: "power1.inOut",
      duration: 0.1,
    });
  });

  const animationTextLeave = contextSafe(() => {
    let splitText1 = new SplitText(".title-1", {
      type: "chars",
    });
    let splitText2 = new SplitText(".title-2", {
      type: "chars",
    });

    gsap.to(splitText1.chars, {
      y: "100%",
      stagger: 0.025,
      ease: "power1.inOut",
      duration: 0.1,
    });

    gsap.to(splitText2.chars, {
      y: "100%",
      stagger: 0.025,
      ease: "power1.inOut",
      duration: 0.1,
    });
  });

  return (
    <>
    <section className="section-text">
      <div
        className="container-text"
        ref={container}
        onMouseEnter={animationText}
        onMouseLeave={animationTextLeave}
      >
        <h1 className="title-1">INSTAGRAM</h1>

        <h1 className="title-2">INSTAGRAM</h1>
      </div>
    </section>
    
    </>
    
  );
}

export default Text;
