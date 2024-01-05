import React, { PropsWithChildren, useEffect, useState } from "react";
import useAppLoading from "../hooks/useAppLoading";
import SplashScreen from "react-native-splash-screen";
import BottomSheet from "../components/_common/BottomSheet/BottomSheet";
import useObserveAppState from "../hooks/useObserveAppState";

const AppLoadingContext = ({ children }: PropsWithChildren) => {
  const [load, setLoad] = useState(false);
  const {} = useObserveAppState();

  const { loading } = useAppLoading();

  useEffect(() => {
    console.log(loading);
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
