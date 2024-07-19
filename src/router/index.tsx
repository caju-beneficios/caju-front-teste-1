import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import { DashboardPage } from "~/pages/Dashboard";
import { NewUserPage } from "~/pages/NewUser";

import routes from "./routes";

const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path={routes.dashboard} component={DashboardPage} />
        <Route exact path={routes.newUser} component={NewUserPage} />

        <Route exact path="*">
          <Redirect to={routes.dashboard} />
        </Route>
      </Switch>
    </HashRouter>
  );
};

export default Router;
