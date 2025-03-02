import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import image_sm_1 from "../../assets/images/small-screen/sm-screen-img_1.svg";
import image_sm_2 from "../../assets/images/small-screen/sm-screen-img_2.svg";
import image_sm_3 from "../../assets/images/small-screen/sm-screen-img_3.svg";
import image_sm_4 from "../../assets/images/small-screen/sm-screen-img_4.svg";
import "./carousel.css";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      active: true,
      loop: true,
    },
    [Autoplay()]
  );

  return (
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <h2>Hi i'm Thami</h2>
            <img src={image_sm_1} className="hero-image" alt="" />
          </div>
          <div className="embla__slide">
            <h2>A Fullstack Engineer</h2>

            <img src={image_sm_2} className="hero-image" alt="" />
          </div>
          <div className="embla__slide">
            <h2>Let's collaborate</h2>
            <img src={image_sm_3} className="hero-image" alt="" />
          </div>
          <div className="embla__slide">
            <h2>The future begins with us, now!</h2>
            <img src={image_sm_4} className="hero-image" alt="" />
          </div>
        </div>
      </div>
  );
}
