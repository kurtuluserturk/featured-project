import { Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Modal from "./components/Modal"
import Home from "./pages/home"
import Contact from "./pages/contact"

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
      <Modal />
    </>
  );
}

export default App;
