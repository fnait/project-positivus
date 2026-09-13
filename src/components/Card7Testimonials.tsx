import { useState } from "react";
import "./Card7Testimonials.css";
import arrowCanSlide from "../img/card8/card8-arrow-can-slide.svg";
import arrowCanNOTSlide from "../img/card8/card8-arrow-cant-slide.svg";
import pointActive from "../img/card8/card8-point-active.svg";
import pointUnactive from "../img/card8/card8-point-unactive.svg";

function Card7Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);

  const reviewCount = 3;
  const slideStep = 606 + 50;

  const canPrev = activeIndex > 0;
  const canNext = activeIndex < reviewCount - 1;

  function handleNext() {
    if (canNext) {
      setActiveIndex(activeIndex + 1);
    }
  }

  function handlePrev() {
    if (canPrev) {
      setActiveIndex(activeIndex - 1);
    }
  }

  return (
    // main conteiner
    <div
      className="color-black"
      style={{
        display: "flex",
        height: "625px",
        borderRadius: "45px",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* block with message */}
      <div
        className="reviews-track"
        style={{
          transform: `translateX(${-activeIndex * slideStep}px)`,
        }}
      >
        {/* message + name */}
        <div>
          <div className="review-message">
            <p>
              "1We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div>
          <div style={{ padding: "50px 0 0 80px" }}>
            <h4 style={{ color: "#b9ff66" }}>John Smith</h4>
            <p>Marketing Director at XYZ Corp</p>
          </div>
        </div>

        {/* message + name */}
        <div>
          <div className="review-message">
            <p>
              "2We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div>
          <div style={{ padding: "50px 0 0 80px" }}>
            <h4 style={{ color: "#b9ff66" }}>John Smith</h4>
            <p>Marketing Director at XYZ Corp</p>
          </div>
        </div>

        {/* message + name */}
        <div>
          <div className="review-message">
            <p>
              "3We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence."
            </p>
          </div>
          <div style={{ padding: "50px 0 0 80px" }}>
            <h4 style={{ color: "#b9ff66" }}>John Smith</h4>
            <p>Marketing Director at XYZ Corp</p>
          </div>
        </div>
      </div>

      {/* control buttons */}
      <div className="reviews-controls">
        {/* button */}
        <button
          type="button"
          onClick={handlePrev}
          disabled={!canPrev}
          aria-label="Предыдущий отзыв"
        >
          <img
            src={canPrev ? arrowCanSlide : arrowCanNOTSlide}
            style={{
              transform: canPrev ? "rotate(180deg)" : "none",
            }}
            alt=""
          />
        </button>

        {/* dots */}
        <div className="reviews-points">
          {[0, 1, 2].map((index) => (
            <button
              type="button"
              key={index}
              onClick={() => setActiveIndex(index)}
              aria-label={`Отзыв ${index + 1}`}
              aria-pressed={activeIndex === index}
            >
              <img
                src={activeIndex === index ? pointActive : pointUnactive}
                alt=""
              />
            </button>
          ))}
        </div>

        {/* button */}
        <button
          type="button"
          onClick={handleNext}
          disabled={!canNext}
          aria-label="Следующий отзыв"
        >
          <img
            src={canNext ? arrowCanSlide : arrowCanNOTSlide}
            style={{
              transform: canNext ? "none" : "rotate(180deg)",
            }}
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

export default Card7Testimonials;
