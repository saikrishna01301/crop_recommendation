import "./Testimonials.scss";
import Story1 from "../../assets/story/story01.jpg";
import Story2 from "../../assets/story/story02.jpg";
import Story3 from "../../assets/story/story03.jpg";
import Story4 from "../../assets/story/story04.jpg";

const Testimonials = () => {
  return (
    <div className="section__testimonials">
      <div class="testimonials-container">
        <h2 class="heading-secondary">What our clients say</h2>
        <div class="testimonials">
          <figure class="testimonial">
            <img className="story-img" src={Story1} alt="Image1" />
            <blockquote class="testimonial-text">
              "The crop recommendations provided by this system have
              significantly improved my farm's yield. I highly recommend it to
              all farmers."
            </blockquote>
            <p class="testimonial-name">— Akaldeep Singh</p>
          </figure>

          <figure class="testimonial">
            <img className="story-img" src={Story2} alt="Image2" />
            <blockquote class="testimonial-text">
              "The yield prediction feature helped me plan my harvest and
              optimize my production. This system is a game-changer for
              farmers."
            </blockquote>
            <p class="testimonial-name">— Muthayya</p>
          </figure>

          <figure class="testimonial">
            <img className="story-img" src={Story3} alt="Image3" />
            <blockquote class="testimonial-text">
              Omnifood is a life saver! I just started a company, so there's no
              time for cooking. I couldn't live without my daily meals now!
            </blockquote>
            <p class="testimonial-name">— Abdul</p>
          </figure>

          <figure class="testimonial">
            <img className="story-img" src={Story4} alt="Image4" />
            <blockquote class="testimonial-text">
              I got Omnifood for the whole family, and it frees up so much time!
              Plus, everything is organic and vegan and without plastic.
            </blockquote>
            <p class="testimonial-name">— Hannah Smith</p>
          </figure>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Testimonials;
