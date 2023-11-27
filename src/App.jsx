import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Nav, PrivateRoute } from "_components";
import { history } from "_helpers";
import { Home } from "home";
import { Login } from "login";
import { Diethelp } from "Components/DietHelp.jsx";
import { Excersise } from "Components/Exercise.jsx";
import { BMICalculator } from "Components/Fitness_tracker/BMICalculator";
import { BodyFat } from "Components/Fitness_tracker/BodyFat";
import { IdealbodyWeight } from "Components/Fitness_tracker/IdealbodyWeight";
import { MetabolicRate } from "Components/Fitness_tracker/MetabolicRate";

export { App };

function App() {
  return (
    <>
      <div className="app-container bg-secondary">
        <Router history={history}>
          <Nav />
          <div className="container  bg-info">
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/bmi" component={BMICalculator} />
              <PrivateRoute exact path="/bodyfat" component={BodyFat} />
              <PrivateRoute exact path="/diethelp" component={Diethelp} />
              <PrivateRoute
                exact
                path="/idealbody"
                component={IdealbodyWeight}
              />
              <PrivateRoute exact path="/metabolic" component={MetabolicRate} />
              <PrivateRoute exact path="/exe" component={Excersise} />
              <Route path="/login" component={Login} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </Router>
      </div>
    </>
  );
}
