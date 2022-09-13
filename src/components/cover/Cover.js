import React from "react";
import "./Cover.css";
import coverPic from "../../media/coverPic.jpg";
export const Cover = () => {
  return (
    <div className="cover-container">
      <img className="pic" src={coverPic} alt="coverPic" />
      <h1>Marcos Ulises P P</h1>
      <p>Mechatronics | Developer | Tester</p>
    </div>
  );
};
