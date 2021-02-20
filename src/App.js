import "./App.css";
import Header from "./components/Header";
import { Wrapper } from "./components/styled-componets/general-styles";
import { HashRouter as Router, Route } from "react-router-dom";
import Preloader from "./components/Preloader";
import { RecipesContext } from "./RecipesContext";
import { lazy, Suspense, useContext } from "react";
import ComponentLoader from "./components/ComponentLoader";

// component's lazy loading while using React Routing
const Home = lazy(() => import("./components/Home"));
const Recipes = lazy(() => import("./components/Recipes"));

function App() {
  // destructured "state" to show or hide a preloader when a react app is loading/loaded
  const { preloaderState } = useContext(RecipesContext);
  const [preloader, setPreloader] = preloaderState;

  return (
    <Router>
      {preloader ? (
        <Preloader />
      ) : (
        <Wrapper>
          <Header />
          <Suspense fallback={<ComponentLoader />}>
            <Route exact path="/" render={() => <Home />} />
            <Route path="/recipes" component={Recipes} />
          </Suspense>
        </Wrapper>
      )}
    </Router>
  );
}

export default App;
