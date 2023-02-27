import "./Testimonials.scss";
import Story1 from "../../assets/story/story01.jpg";
import Story2 from "../../assets/story/story02.jpg";
import Story3 from "../../assets/story/story03.jpg";
import Story4 from "../../assets/story/story04.jpg";

import Gallery1 from "../../assets/story/gallery/g1.jpg";
import Gallery2 from "../../assets/story/gallery/g2.jpg";
import Gallery3 from "../../assets/story/gallery/g3.jpg";
import Gallery4 from "../../assets/story/gallery/g4.jpg";
import Gallery5 from "../../assets/story/gallery/g5.jpg";
import Gallery6 from "../../assets/story/gallery/g6.jpg";
import Gallery7 from "../../assets/story/gallery/g7.jpg";
import Gallery8 from "../../assets/story/gallery/g8.jpg";
import Gallery9 from "../../assets/story/gallery/g9.jpg";
import Gallery10 from "../../assets/story/gallery/g10.jpg";
import Gallery11 from "../../assets/story/gallery/g11.jpg";
import Gallery12 from "../../assets/story/gallery/g12.jpg";

const Testimonials = () => {
  return (
    <div className="section__testimonials">
      <div className="testimonials-container">
        <h2 className="heading-secondary">What our clients say</h2>
        <div className="testimonials">
          <figure className="testimonial">
            <img className="story-img" src={Story1} alt="Image1" />
            <blockquote className="testimonial-text">
              "The crop recommendations provided by this system have
              significantly improved my farm's yield. I highly recommend it to
              all farmers."
            </blockquote>
            <p className="testimonial-name">— Akaldeep Singh</p>
          </figure>

          <figure className="testimonial">
            <img className="story-img" src={Story2} alt="Image2" />
            <blockquote className="testimonial-text">
              "The yield prediction feature helped me plan my harvest and
              optimize my production. This system is a game-changer for
              farmers."
            </blockquote>
            <p className="testimonial-name">— Muthayya</p>
          </figure>

          <figure className="testimonial">
            <img className="story-img" src={Story3} alt="Image3" />
            <blockquote className="testimonial-text">
              "The yield prediction feature helped me plan my harvest and
              optimize my production. This system is a game-changer for
              farmers."
            </blockquote>
            <p className="testimonial-name">— Abdul</p>
          </figure>

          <figure className="testimonial">
            <img className="story-img" src={Story4} alt="Image4" />
            <blockquote className="testimonial-text">
              "The yield prediction feature helped me plan my harvest and
              optimize my production. This system is a game-changer for
              farmers."
            </blockquote>
            <p className="testimonial-name">— Hannah Smith</p>
          </figure>
        </div>
      </div>
      <div className="gallery">
        <img className="gallery-img" src={Gallery1} alt="g1" />
        <img className="gallery-img" src={Gallery2} alt="g2" />
        <img className="gallery-img" src={Gallery3} alt="g3" />
        <img className="gallery-img" src={Gallery4} alt="g4" />
        <img className="gallery-img" src={Gallery5} alt="g5" />
        <img className="gallery-img" src={Gallery6} alt="g6" />
        <img className="gallery-img" src={Gallery7} alt="g7" />
        <img className="gallery-img" src={Gallery8} alt="g8" />
        <img className="gallery-img" src={Gallery9} alt="g9" />
        <img className="gallery-img" src={Gallery10} alt="g10" />
        <img className="gallery-img" src={Gallery11} alt="g11" />
        <img className="gallery-img" src={Gallery12} alt="g12" />
      </div>
    </div>
  );
};

export default Testimonials;
