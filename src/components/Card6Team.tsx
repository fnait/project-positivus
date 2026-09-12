import { useState } from "react";
import photo1 from "../img/card4/card4-img1-selfie.svg";
import photo2 from "../img/card4/card4-img2-selfie.svg";
import photo3 from "../img/card4/card4-img3-selfie.svg";
import photo4 from "../img/card4/card4-img4-selfie.svg";
import photo5 from "../img/card4/card4-img5-selfie.svg";
import photo6 from "../img/card4/card4-img6-selfie.svg";

import Card6Team_helper from "./Card6Team_helper";

function Card6Team() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
          gap: "40px",
        }}
      >
        <Card6Team_helper
          name="John Smith"
          position="CEO and Founder"
          text="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          person_photo={photo1}
        />
        <Card6Team_helper
          name="Jane Doe"
          position="Director of Operations"
          text="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          person_photo={photo2}
        />
        <Card6Team_helper
          name="Michael Brown"
          position="Senior SEO Specialist"
          text="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          person_photo={photo3}
        />
        <Card6Team_helper
          name="Emily Johnson"
          position="PPC Manager"
          text="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
          person_photo={photo4}
        />
        <Card6Team_helper
          name="Brian Williams"
          position="Social Media Specialist"
          text="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
          person_photo={photo5}
        />
        <Card6Team_helper
          name="Sarah Kim"
          position="Content Creator"
          text="2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
          person_photo={photo6}
        />
      </div>

      <div
        style={
          isOpen
            ? {
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: "40px",
              }
            : { display: "none" }
        }
      >
        <Card6Team_helper
          name="Emily Johnson"
          position="PPC Manager"
          text="3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis"
          person_photo={photo4}
        />
        <Card6Team_helper
          name="Brian Williams"
          position="Social Media Specialist"
          text="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
          person_photo={photo5}
        />
        <Card6Team_helper
          name="Sarah Kim"
          position="Content Creator"
          text="2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries"
          person_photo={photo6}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "end",
        }}
      >
        <button
          onClick={() => setIsOpen((previous) => !previous)}
          className="color-black"
          style={{ padding: "20px 35px", width: "269px", borderRadius: "14px" }}
        >
          <h4>See all team</h4>
        </button>
      </div>
    </div>
  );
}

export default Card6Team;
