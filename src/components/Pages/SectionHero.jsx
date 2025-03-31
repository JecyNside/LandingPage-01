import ImgHero from "../../assets/imgHero.png";

function SectionHero() {
  return (
    <section className="section-hero">
      <div className="section-hero-container">
        <div className="section-hero-container-text">
          <h1 className="h1-text">
            AI solutions designed <br />
            as <span className="text-title-1"> catalyst</span> that <br />
            transforms your business
          </h1>
          <p>
            Just as your business is one-of-a-kind, so are our solutions. We
            collaborate closely with you to understand the intricacies of your
            challenges and aspiration, <span>developing AI automation </span>
            tools that aligns seamlessly with your vision
          </p>
          <div className="section-hero-container-text-buttons">
            <button className="button-1">Book a call</button>
            <button className="button-2">Descubre más</button>
          </div>
        </div>

        <div className="section-hero-container-img">
          <img src={ImgHero} />
        </div>
      </div>
    </section>
  );
}

export default SectionHero;
