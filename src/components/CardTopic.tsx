interface CardTopicProps {
  text1: string;
  text2: React.ReactNode;
  padd_bot: number;
}

function CardTopic({ text1, text2, padd_bot }: CardTopicProps) {
  return (
    <div
      style={{
        display: "flex",
        padding: `140px 0  ${padd_bot}px 0`,
        gap: "40px",
      }}
    >
      <h2
        className="color-green"
        style={{ padding: "0 7px", borderRadius: "7px" }}
      >
        {text1}
      </h2>
      <p>{text2}</p>
    </div>
  );
}

export default CardTopic;
