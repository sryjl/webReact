import React from "react";
import { Route, Switch } from "react-router-dom";
import routerList from "./route_list";

function IndexRoute() {
  return (
    <Switch>
      {routerList.map((item, index) => {
        return (
          <Route
            path={item.path}
            exact={item.exact}
            render={item.render}
            key={index}
          />
        );
      })}
    </Switch>
  );
}
export default IndexRoute;
