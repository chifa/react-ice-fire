import React from "react";
import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import Header from "./header";
import HouseList from "./house-list";


function App() {
  return (

      <div>
        <h3>Main menu</h3>
        <div>
          <div>
            <NavLink to="/houses" activeStyle={{ color: "red" }}>
              articles
            </NavLink>
          </div>
          <div>
            <NavLink to="/characters" activeStyle={{ color: "red" }}>
              counter
            </NavLink>
          </div>
        </div>
        <Header />
        <Switch>
          <Redirect from="/" exact to="/houses" />
          <Route path="/houses" component={HouseList} />
          <Route path="/error" render={() => <h1>Error Page</h1>} />
          <Route render={() => <h1>Not Found</h1>} />
        </Switch>
      </div>
  );
}

App.propTypes = {};

export default App;
