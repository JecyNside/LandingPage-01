import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef, useState } from "react";

function MenuBar() {
  const container = useRef();
  const { contextSafe } = useGSAP({ scope: container });
  const [hidden, setHidden] = useState(false);

  console.log(hidden);

  const handleClick = contextSafe(() => {
    if (!hidden) {
      gsap.fromTo(
        ".overlay",
        { yPercent: -100, autoAlpha: 0 },
        { yPercent: 0, autoAlpha: 1 }
      );
    } else {
      gsap.to(".overlay", { yPercent: -100, autoAlpha: 0 });
    }
    setHidden(!hidden);
  });

  const handleEnter = contextSafe((event) => {
    gsap.to(event.currentTarget, {
      x: 20, // Se mueve a la derecha 20px
      duration: 0.1,
      ease: "power1.out",
      color: "white"
    });
  });

  const handleLeave = contextSafe((event) => {
    gsap.to(event.currentTarget, {
      x: 0, // Vuelve a su posición original
      duration: 0.3,
      ease: "power1.out",
      color: "black"
    });
  });

  return (
    <main className="main" ref={container}>
      <section className="section-1">
        <button onClick={handleClick}>ABRIR MENU</button>
      </section>
      <section className="section-2">SECTION 1</section>
      <div className="overlay">
        <div className="overlay-texts">
          <ul>
            <li className="li-container" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              WORK
            </li>
            <li className="li-container" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              ABOUT
            </li>
            <li className="li-container" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              COOKBOOK
            </li>
            <li className="li-container" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              CONTACT
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default MenuBar;
