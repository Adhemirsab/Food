import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import RecipeCreate from "./components/RecipeCreate/RecipeCreate";
import Detail from "./components/Detail/Detail";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>

        <Route path="/home" component={Home} />
        <Route path="/recipes" component={RecipeCreate} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
    </div>
  );
}

export default App;
