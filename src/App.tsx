import "./App.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Card1Rupor from "./components/Card1Rupor";
import Card2Logos from "./components/Card2Logos";
import CardTopic from "./components/CardTopic";
import Card3Services from "./components/Card3Services";
import Card4CaseStud from "./components/Card4CaseStud";

function App() {
  return (
    <>
      <Header />
      <Card1Rupor />
      <Card2Logos />
      <CardTopic
        text1="Services"
        text2={
          <>
            At our digital marketing agency, we offer a range of services to
            <br />
            help businesses grow and succeed online. These services include:
          </>
        }
        padd_bot={70}
      />
      <Card3Services />

      <CardTopic
        text1="Case Studies"
        text2={
          <>
            Explore Real-Life Examples of Our Proven Digital Marketing
            <br />
            Success through Our Case Studies
          </>
        }
        padd_bot={80}
      />

      <Card4CaseStud />

      <CardTopic
        text1="Our Working Process"
        text2={
          <>
            Step-by-Step Guide to Achieving <br />
            Your Business Goals
          </>
        }
        padd_bot={80}
      />

      {/* <Footer /> */}
    </>
  );
}

export default App;
