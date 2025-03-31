import background from '../assets/backimg.avif'
import {gsap} from 'gsap'
import {useGSAP}from '@gsap/react' 
import { useRef } from 'react'

function Hero() {

    const section = useRef(null);

  const handleEnter = () => {
    // Animar el contenedor (el mismo nodo al que apuntamos con section)
    gsap.to(section.current, {
      scale: 1,
      rotation: 0,
      ease: "power2.inOut",
      duration: 0.4,
    });
    // Animar los hijos
    gsap.to(".section-hero-background", {rotate: 2, duration: 0.4, ease: "power2.inOut", });
  };

  const handleLeave = () => {
    gsap.to(section.current, {
      scale: 0.98,
      rotation: -3,
      duration: 0.3,
      ease: "power2.inOut"
    });
    gsap.to(".section-hero-main", { top:0, left: 10, rotate: 0, duration: 0.3, ease: "power2.inOut", });
    gsap.to(".section-hero-background", {  rotate: 0, duration: 0.4, ease: "power2.inOut", });
  };

  return (
    <section ref={section} className="section-hero" 
    onMouseEnter={handleEnter} onMouseLeave={handleLeave}>

      <div className="section-hero-main">
        <p className="title">Founder memo</p>

        <p className="subtitle">
          The greatest work is the one we’re inspired by and passionate for. The
          greatest ideas are built by people who are aligned with their vision
          and desire to create.
        </p>

        <p className="subtitle">
          Freelancing truly allows this by letting you choose projects you want
          to work on with the people that inspire you, on a schedule that fits
          your lifestyle. It lets you grow as a professional, having full
          control over the direction of your career and your personal brand.
          There’s never been a better time to explore our passions and creative
          freedom, and build a career doing so.
        </p>

        <p className="subtitle">
          With Portal, I aim to make it easier for creatives like you to handle
          the essential parts of freelancing with ease and style. From
          collecting payments globally and on time to sending proposals or
          invoices without messing with PDFs, all while showcasing your unique
          personal brand, Portal simplifies the business side so you can focus
          on what you love.
        </p>

        <p className="subtitle">
          It’s the beginning of the journey for Portal, so I’d love to hear how
          Portal could make freelancing even better for you. Join me on this
          journey, and let’s build something amazing together.
        </p>
      </div>

      <div className="section-hero-background">
        <img src={background} alt="" />
      </div>
    </section>
  );
}

export default Hero;
