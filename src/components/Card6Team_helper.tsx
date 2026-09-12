import linkedin from "../img/card4/card4-img0-linkedin.svg";

interface Card6Team_helperProps {
  name: string;
  position: string;
  text: string;
  person_photo: string;
}

function Card6Team_helper({
  name,
  position,
  text,
  person_photo,
}: Card6Team_helperProps) {
  return (
    // card
    <div
      style={{
        display: "flex",
        minHeight: "331px",
        minWidth: "387px",
        borderRadius: "45px",
        border: "1px #191A23 solid",
        boxShadow: "0px 5px 0px #191A23",
        boxSizing: "border-box",
        flexDirection: "column",
        padding: "40px 35px",
        gap: "28px",
      }}
    >
      {/* top-information */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* left */}
        <div style={{ display: "flex" }}>
          <img src={person_photo} alt="photo" />
        </div>
        {/* right */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", justifyContent: "end" }}>
            <button style={{ borderRadius: "100%", background: "none" }}>
              <img src={linkedin} alt="linkedin" />
            </button>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4>{name}</h4>
            <p>{position}</p>
          </div>
        </div>
      </div>
      <hr />
      {/* bottom-information */}
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Card6Team_helper;
