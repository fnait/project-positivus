import "./Card7Testimonials.css";
import arrowCanSlide from "../img/card8/card8-arrow-can-slide.svg";
import arrowCanNOTSlide from "../img/card8/card8-arrow-can-not-slide.svg";
import pointActive from "../img/card8/card8-point-active.svg";
import pointUnactive from "../img/card8/card8-point-unactive.svg";

function Card7Testimonials() {
  return (
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
      <div className="reviews-track">
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
    </div>
  );
}

export default Card7Testimonials;
