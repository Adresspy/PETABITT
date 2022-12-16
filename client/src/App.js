import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import landingPage from "./Components/LandinPage/LandingPage";
import Home from "./Components/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
