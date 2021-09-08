import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

export default function Sandwiches({ data }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    try {
      console.log(e.target.ariaLabel.replace("Slide ", ""));
    } catch {}
  };

  return (
    <Carousel
      variant="dark"
      id={index}
      activeIndex={index}
      onSelect={handleSelect}
    >
      {data.map((a) => (
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src="https://picsum.photos/20/20"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{a.name}</h3>
            <p>{a.company.catchPhrase}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
