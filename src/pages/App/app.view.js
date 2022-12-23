import { Switch, Route } from "react-router-dom";
import SearchPage from "../SearchPage/search.page.view.js";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <SearchPage />
      </Route>
    </Switch>
  );
};

export default App;
