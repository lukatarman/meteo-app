import { Switch, Route } from "react-router-dom";
import SearchPage from "../SearchPage/search.page.view.js";
import SettingsButton from "../../Components/SettingsButton/settings.button.view.js";
import FavoritesButton from "../../Components/FavoritesButton/favorites.button.view.js";

const App = () => {
  return (
    <Switch>
      <Route exact path="/">
        <FavoritesButton />
        <SettingsButton />
        <SearchPage />
      </Route>
    </Switch>
  );
};

export default App;
