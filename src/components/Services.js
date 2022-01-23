import React from "react";
import Box from "./Box";
import image1 from '../images/pic4.png'
import image2 from '../images/pic5.png'

function Services() {
  return (
    <div id="services">
      <div className="s-heading">
        <h1>Features</h1>
        <p>Here are some service i provide</p>
      </div>
      <div className="b-container">
        <Box image={image1} alte='image1' button='JAVASCRIPT' />
        <Box image={image2} alte='image2' button='REACT' />
      </div>
    </div>
  );
}

export default Services;
