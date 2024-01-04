import React, { useEffect, useState } from "react";
import { AppState, AppStateStatus } from "react-native";
import useGeoLocation from "./useGeoLocation";

const useObserveAppState = () => {
  const { requestPermissionFunc } = useGeoLocation();
  const [appState, setAppState] = useState(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (nextAppState === "active") {
        requestPermissionFunc();
      }
    };

    // AppState 변경 감지를 위한 이벤트 리스너 등록
    AppState.addEventListener("change", handleAppStateChange);
  }, []);

  return {};
};

export default useObserveAppState;
