import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProfDetails from "./pages/ProfDetail";
import SearchPage from "./pages/SearchPage";
import "bootstrap/dist/css/bootstrap.min.css";
import Admin from './pages/Admin';
import PageNotFound from "./components/PageNotFound";
function App(props) {
  return (
    <Router>
      <div className="App">        
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:Profilid" component={ProfDetails} />
          <Route path="/search" exact component={SearchPage} />
          <Route path="/admin" exact component={Admin}/>
          <Route path={`/:${props.url}`}  component={SearchPage}/>
          <Route path="*" exact component={PageNotFound}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
