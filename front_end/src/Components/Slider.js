import React from "react";
import { UncontrolledCarousel } from "reactstrap";

const items = [
  {
    src: "https://source.unsplash.com/user/erondu/1600x700",
    altText: "Slide 1",
    caption: "Slide 1",
    header: "Slide 1 Header",
    key: "1",
  },

  {
    src: "https://source.unsplash.com/user/erondu/1600x700",
    altText: "Slide 2",
    caption: "Slide 2",
    header: "Slide 2 Header",
    key: "2",
  },
  {
    src: "https://source.unsplash.com/user/erondu/1600x700",
    altText: "Slide 3",
    caption: "Slide 3",
    header: "Slide 3 Header",
    key: "3",
  },
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;
