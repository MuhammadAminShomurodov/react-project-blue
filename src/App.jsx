import "./Main.scss";
import Header from "./header/Header";
import About from "./main/About";
import Articles from "./main/Articles";
import Quality from "./main/Quality";
import Service from "./main/Service";
import Contact from "./main/Contact";
import Footer from "./footer/Footer";

function App() {
  return (
    <div>
      <Header />
      <Quality />
      <About />
      <Service />
      <Articles />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
