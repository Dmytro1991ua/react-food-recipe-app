import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Wrapper } from "./components/styled-componets/general-styles";
import { HashRouter as Router, Route } from "react-router-dom";
import Recipes from "./components/Recipes";

function App() {
  return (
    <Router>
      <Wrapper>
        <Header />
        <Route exact path="/" render={() => <Home />} />
        <Route path="/recipes" component={Recipes} />
      </Wrapper>
    </Router>
  );
}

export default App;
