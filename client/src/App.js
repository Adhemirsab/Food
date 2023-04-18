import "./App.css";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Home from "./components/Home/Home";
import RecipeCreate from "./components/RecipeCreate/RecipeCreate";
import Detail from "./components/Detail/Detail";
import LoginForm from "./components/LoginForm/LoginForm";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <>
            <LandingPage />
            <LoginForm />
          </>
        </Route>
       
        <Route path="/home" component={Home} />
        <Route path="/recipes" component={RecipeCreate} />
        <Route path="/detail/:id" component={Detail} />
      </Switch>
    </div>
  );
}

export default App;
