import { useRecoilState } from "recoil";
import { appLoadingState } from "../atom/appLoadingState";
import * as SplashScreen from "expo-splash-screen";

const useAppLoading = () => {
  const [loading, setLoading] = useRecoilState(appLoadingState);

  const completePrepare = () => {
    setLoading(false);
  };

  return { loading, completePrepare };
};

export default useAppLoading;
