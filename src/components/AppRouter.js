import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { NavBar } from "./NavBar";
import { PhotosScreen } from "./PhotosScreen";
import { Menu } from "./Menu";
import { useState } from "react";

export const AppRouter = (props) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div>
      <Router>
        <div>
          <NavBar setMenuIsOpen={setMenuIsOpen} menuIsOpen={menuIsOpen} />
          <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
          <Switch>
            <Route
              path="/portfolio/all"
              render={(o) => (
                <PhotosScreen filterFunction={(item) => true}></PhotosScreen>
              )}
            ></Route>
            <Route
              path="/portfolio/color"
              render={(o) => (
                <PhotosScreen
                  filterFunction={(item) => item.color === true}
                ></PhotosScreen>
              )}
            ></Route>
            <Route
              path="/portfolio/bnw"
              render={(o) => (
                <PhotosScreen
                  filterFunction={(item) => item.color === false}
                ></PhotosScreen>
              )}
            ></Route>
            <Route
              path="/portfolio/madrid"
              render={(o) => (
                <PhotosScreen
                  filterFunction={(item) => item.place === "Madrid"}
                ></PhotosScreen>
              )}
            ></Route>
            <Route
              path="/"
              render={(o) => <Redirect to="/portfolio/all" />}
            ></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};
