import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Wrapper } from "./components/styled-componets/general-styles";

function App() {
  return (
    <Wrapper>
      <Header />
      <Home/>
    </Wrapper>
  );
}

export default App;