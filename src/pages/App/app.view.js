import { Switch, Route } from "react-router-dom";
import SearchPage from "../SearchPage/search.page.view.js";
import CityDetails from "../CityDetails/city.details.view.js";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SearchPage />
      </Route>
      <Route exact path="/city=:city&latitude=:latitude&longitude=:longitude">
        <CityDetails />
      </Route>
    </Switch>
  );
};

export default App;
