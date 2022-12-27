import { useRecoilState } from "recoil";
import { settingsState } from "../../contexts/AppContext/index.js";

const SettingsMenuBehavior = () => {
  const [settings, setSettings] = useRecoilState(settingsState);

  return [];
};

export default SettingsMenuBehavior;
