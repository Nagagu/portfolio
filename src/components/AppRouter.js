import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from "./NavBar";
import { PhotosScreen } from "./PhotosScreen";

export const AppRouter = (props) => {
  debugger;
  return (
    <Router>
      <div>
        <NavBar />
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
                filterFunction={(item) => item.color == true}
              ></PhotosScreen>
            )}
          ></Route>
          <Route
            path="/portfolio/bnw"
            render={(o) => (
              <PhotosScreen
                filterFunction={(item) => item.color == false}
              ></PhotosScreen>
            )}
          ></Route>
          <Route
            path="/portfolio/madrid"
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
