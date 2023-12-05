import { useFonts } from "expo-font";
import React, { PropsWithChildren, useEffect } from "react";
import useAppLoading from "../hooks/useAppLoading";
import SplashScreen from "react-native-splash-screen";

// SplashScreen.preventAutoHideAsync();

const AppLoadingContext = ({ children }: PropsWithChildren) => {
  // const [loaded] = useFonts({
  //   Pretendard: require("../assets/font/PretendardVariable.ttf"),
  // });

  const { loading } = useAppLoading();

  useEffect(() => {
    if (loading === false) {
      SplashScreen.hide();
    }
  }, [loading]);

  // if (loading) {
  //   return null;
  // }

  return <>{children}</>;
};

export default AppLoadingContext;
