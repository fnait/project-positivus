import imgArrow from "../img/card2/card2-arrow.svg";

function Card4CaseStud() {
  return (
    <div
      className="color-black"
      style={{
        padding: "70px 60px",
        display: "flex",
        flexFlow: "row",
        borderRadius: "45px",
        gap: "64px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
        }}
      >
        <p>
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and a 25% increase in
          sales.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{
              borderRadius: "100%",
              background: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h4 style={{ color: "#b9ff66", fontWeight: "400" }}>Learn more</h4>
            <img src={imgArrow} alt="arrow" />
          </button>
        </div>
      </div>
      <hr style={{ minHeight: "186px" }}></hr>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
        }}
      >
        <p>
          For a B2B software company, we developed an SEO strategy that resulted
          in a first page ranking for key keywords and a 200% increase in
          organic traffic.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{
              borderRadius: "100%",
              background: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h4 style={{ color: "#b9ff66", fontWeight: "400" }}>Learn more</h4>
            <img src={imgArrow} alt="arrow" />
          </button>
        </div>
      </div>
      <hr style={{ minHeight: "186px" }}></hr>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          justifyContent: "space-between",
        }}
      >
        <p>
          For a national retail chain, we created a social media marketing
          campaign that increased followers by 25% and generated a 20% increase
          in online sales.
        </p>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <button
            style={{
              borderRadius: "100%",
              background: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <h4 style={{ color: "#b9ff66", fontWeight: "400" }}>Learn more</h4>
            <img src={imgArrow} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card4CaseStud;
