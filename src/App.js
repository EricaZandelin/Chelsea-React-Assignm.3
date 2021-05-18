import React, { Component } from "react";
/*import Tweet from "./Tweet";
import Menu from "./Meny";*/
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } 
from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Games from "./pages/Games";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

/*import Hello from "./Hello";

function App(){

 
  return(
    <div>
      <h1>This is the app component</h1>
      <Hello />
    </div>
  );
}

export default App;*/


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/games" component={Games} />
        <Route path="/contact" component={Contact} /> {/*Förstår(tror jag haha) att denna inte är "grön-ish för ja använt function här och "class Home extends Component" på övriga.. 
        Håller på att läsa in mig kring detta. Vet ej om detta är ok att göra såhär egentligen hehe.*/}
      </Switch>
    </Router>
    <Footer />
    </>
  );
}



export default App;
