import "./App.css";
import Header from "./components/Header";
// import Footer from "./components/Footer";
import Card1Rupor from "./components/Card1Rupor";
import Card2Logos from "./components/Card2Logos";
import CardTopic from "./components/CardTopic";
import Card3Services from "./components/Card3Services";
import Card4CaseStud from "./components/Card4CaseStud";
import Card5WorkingProcess from "./components/Card5WorkingProcess";
import Card6Team from "./components/Card6Team";

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
        padd_top={140}
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
        padd_top={140}
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
        padd_top={140}
        padd_bot={80}
      />
      <Card5WorkingProcess />

      <CardTopic
        text1="Team"
        text2={
          <>
            Meet the skilled and experienced team behind our <br />
            successful digital marketing strategies
          </>
        }
        padd_top={140}
        padd_bot={80}
      />

      <Card6Team />

      <CardTopic
        text1="Testimonials"
        text2={
          <>
            Hear from Our Satisfied Clients: Read Our Testimonials <br />
            successful digital marketing strategies
          </>
        }
        padd_top={100}
        padd_bot={80}
      />

      <CardTopic
        text1="Contact Us"
        text2={
          <>
            Connect with Us: Let's Discuss Your <br />
            Digital Marketing Needs
          </>
        }
        padd_top={100}
        padd_bot={80}
      />
      {/* <Footer /> */}
    </>
  );
}

export default App;
