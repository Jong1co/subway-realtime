import { useFonts } from "expo-font";
import React, { PropsWithChildren, useEffect } from "react";
import useAppLoading from "../hooks/useAppLoading";
import * as SplashScreen from "expo-splash-screen";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

const AppLoadingContext = ({ children }: PropsWithChildren) => {
  // const [loaded] = useFonts({
  //   Pretendard: require("../assets/font/PretendardVariable.ttf"),
  // });

  const { loading } = useAppLoading();

  useEffect(() => {
    !loading && SplashScreen.hideAsync();
  }, [loading]);

  // if (loading) {
  //   return null;
  // }

  return <>{children}</>;
};

export default AppLoadingContext;
