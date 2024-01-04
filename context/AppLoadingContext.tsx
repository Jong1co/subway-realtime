import { useFonts } from "expo-font";
import React, { PropsWithChildren, useEffect, useState } from "react";
import useAppLoading from "../hooks/useAppLoading";
import SplashScreen from "react-native-splash-screen";
import BottomSheet from "../components/_common/BottomSheet/BottomSheet";

// SplashScreen.show();
// SplashScreen.hide();

const AppLoadingContext = ({ children }: PropsWithChildren) => {
  // const [loaded] = useFonts({
  //   Pretendard: require("../assets/font/PretendardVariable.ttf"),
  // });
  const [load, setLoad] = useState(false);

  const { loading } = useAppLoading();

  // useEffect(() => {
  //   SplashScreen.show();
  // }, []);

  useEffect(() => {
    // console.log(loading);
    if (loading.bookmark === false && loading.home === false) {
      SplashScreen.hide();
      setLoad(true);
    }
  }, [loading]);

  return (
    <>
      {children}
      {load && <BottomSheet />}
    </>
  );
};

export default AppLoadingContext;
