import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Services />
    </>
  );
}

export default App;
