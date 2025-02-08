import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import image_1 from "../../assets/carousel-images/image_1.svg";
import image_2 from "../../assets/carousel-images/image_2.svg";
import image_3 from "../../assets/carousel-images/image_3.svg";
import image_4 from "../../assets/carousel-images/image_4.svg";
import "./carousel.css";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true, }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide">
          <img src={image_1} className="hero-image" alt="" />
        </div>
        <div className="embla__slide">
          <img src={image_2} className="hero-image" alt="" />
        </div>
        <div className="embla__slide">
          <img src={image_3} className="hero-image" alt="" />
        </div>
        <div className="embla__slide">
          <img src={image_4} className="hero-image" alt="" />
        </div>
      </div>
    </div>
  );
}
