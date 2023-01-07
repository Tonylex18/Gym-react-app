import React from "react";
import Header from "../header/Header";
import "./Hero.css";
import Hero_image from "../../assets/hero_image.png";
import Heart from "../../assets/heart.png";
import Hero_image_back from "../../assets/hero_image_back.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ads */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "150px" : "210px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          />
          <span>The best fitness club in the town</span>
        </div>

        {/* hero header */}
        <div className="hero-text">
          <div>
            <span className="strock-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to the fullest
            </span>
          </div>
        </div>
        {/* figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="4" preFix="+" />
            </span>
            <span>expert coashes</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={10} delay="4" preFix="+" />
            </span>
            <span>fitness program</span>
          </div>
        </div>
        {/* hero button */}
        <div className="hero-button">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={Hero_image} alt="" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={Hero_image_back}
          alt=""
          className="hero-image-back"
        />

        {/* calaries */}
        <motion.div
          initial={{ right: "60.8rem" }}
          whileInView={{ right: "47.8rem" }}
          transition={transition}
          className="calories"
        >
          <img src={Calories} alt="" />
          <div>
            <span>calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
