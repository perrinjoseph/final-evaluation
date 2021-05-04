import About from "./Components/About/About";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Info from "./Components/Info/Info";
import Landing from "./Components/Landing/Landing";
import Nav from "./Components/Nav/Nav";
import Projects from "./Components/Projects/Projects";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Portfolio from "./Components/Portfolio/Portfolio";
import Contact from "./Components/Contact/Contact";
import ResponsiveNav from "./Components/Nav/ResponsiveNav/ResponsiveNav";
import { useEffect, useState } from "react";

function App() {
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

  const handleResize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <Router>
        <Nav getState={(state) => setOpen(state)} />
        {open ? (
          <ResponsiveNav change={open && size <=533? "open" : ""} />
        ) : (
          <ResponsiveNav />
        )}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
