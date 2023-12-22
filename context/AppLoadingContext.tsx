import { useFonts } from "expo-font";
import React, { PropsWithChildren, useEffect } from "react";
import useAppLoading from "../hooks/useAppLoading";
import SplashScreen from "react-native-splash-screen";

// SplashScreen.show();
// SplashScreen.hide();

const AppLoadingContext = ({ children }: PropsWithChildren) => {
  // const [loaded] = useFonts({
  //   Pretendard: require("../assets/font/PretendardVariable.ttf"),
  // });

  const { loading } = useAppLoading();

  // useEffect(() => {
  //   SplashScreen.show();
  // }, []);

  useEffect(() => {
    if (loading.bookmark === false && loading.home === false) {
      SplashScreen.hide();
    }
  }, [loading]);

  return <>{children}</>;
};

export default AppLoadingContext;
