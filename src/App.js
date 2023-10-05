import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Booking } from "./components/Booking";
import { AboutUs } from "./components/AboutUs";
import { Activities } from "./components/Activities";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Booking />
      <AboutUs />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;
