import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import RightArrow from "../../assets/rightArrow.png";

const PLans = () => {
  return (
    <div className="plans-container" id="plans-container">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="program-header" style={{ gap: "4rem" }}>
        <span className="strock-text">ready to start</span>
        <span>your journey</span>
        <span className="strock-text">with us</span>
      </div>

      {/* plans card */}

      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>see more benefits </span>
              <img src={RightArrow} alt="" />
            </div>
            <button className="btn">join now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PLans;
