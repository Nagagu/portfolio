import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./NavBar";
import { PhotosScreen } from "./PhotosScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/all"
            render={(o) => (
              <PhotosScreen filterFunction={(item) => true}></PhotosScreen>
            )}
          ></Route>
          <Route
            exact
            path="/color"
            render={(o) => (
              <PhotosScreen
                filterFunction={(item) => item.color == true}
              ></PhotosScreen>
            )}
          ></Route>
          <Route
            exact
            path="/bnw"
            render={(o) => (
              <PhotosScreen
                filterFunction={(item) => item.color == false}
              ></PhotosScreen>
            )}
          ></Route>
          <Route
            exact
            path="/madrid"
            render={(o) => (
              <PhotosScreen
                filterFunction={(item) => item.place == "Madrid"}
              ></PhotosScreen>
            )}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
};
