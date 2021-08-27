import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/MenuBar";
import Home from "./pages/Home";
import ProfDetails from "./pages/ProfDetail";
import SearchPage from "./pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cour" exact component={ProfDetails} />
          <Route path="/search" exact component={SearchPage} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
