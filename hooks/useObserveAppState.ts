import React, { useEffect, useRef, useState } from "react";
import { AppState, AppStateStatus, Platform } from "react-native";
import useGeoLocation from "./useGeoLocation";
import { useRecoilState } from "recoil";

const useObserveAppState = () => {
  const { requestPermissionFunc } = useGeoLocation();
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === "active" && Platform.OS === "ios") {
        requestPermissionFunc();
      }
      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );
    return () => {
      subscription.remove();
    };
  }, []);

  return {};
};

export default useObserveAppState;
