import React from "react";
import "./About.css";
import ab_img_1 from "../../media/ab_img_1.jpg";

export const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>About me</h3>
        <p>
          My name is Marcos Ulises, I'm a Mechatronics Engineer, currently
          working as a Tester Engineer for the Fords High End line & also Im a
          Front-End Developer.
        </p>
      </div>
      <div className="about-img">
        <img src={ab_img_1} alt="ab-img-1 Auth: Pavel Danilyuk" />
      </div>
    </div>
  );
};
