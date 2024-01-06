import React, { PropsWithChildren, useEffect, useState } from "react";
import useAppLoading from "../hooks/useAppLoading";
import SplashScreen from "react-native-splash-screen";
import BottomSheet from "../components/_common/BottomSheet/BottomSheet";
import useObserveAppState from "../hooks/useObserveAppState";
import { useRecoilState } from "recoil";
import { permissionState } from "../atom/permissionState";
import { PERMISSIONS, RESULTS, check } from "react-native-permissions";
import PermissionModal from "../components/_common/PermissionModal/PermissionModal";
import { Linking, Platform } from "react-native";
import useGeoLocation from "../hooks/useGeoLocation";

const AppLoadingContext = ({ children }: PropsWithChildren) => {
  const [permission, setPermission] = useRecoilState(permissionState);
  const [load, setLoad] = useState(false);
  const {} = useObserveAppState();
  const { requestPermissionFunc } = useGeoLocation();

  const { loading } = useAppLoading();
  // console.log(permission);

  useEffect(() => {
    // console.log(loading);
    if (loading.bookmark === false && loading.home === false) {
      SplashScreen.hide();
      setLoad(true);
    }
  }, [loading]);

  const navigateToSettings = () => {
    if (Platform.OS === "android") {
      // Android의 경우 애플리케이션 설정 페이지로 이동
      check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION).then((result) => {
        if (result === RESULTS.GRANTED) {
          requestPermissionFunc();
        }
        if (
          result === RESULTS.BLOCKED ||
          result === RESULTS.DENIED ||
          result === RESULTS.LIMITED
        ) {
          // requestPermissionFunc();
          Linking.openSettings();
        }
      });
      // Linking.openSettings();
    } else {
      // iOS의 경우 애플리케이션 설정 페이지로 이동
      Linking.openURL("app-settings:");
    }
    // setPermission("");
  };
  // permission === RESULTS.DENIED &&

  // const permission =
  // if (
  //   permission === RESULTS.BLOCKED ||
  //   permission === RESULTS.LIMITED
  // ) {
  //   return (

  //   );
  // }

  return (
    <>
      {children}
      {load && <BottomSheet />}
      {(permission === RESULTS.BLOCKED || permission === RESULTS.LIMITED) && (
        <PermissionModal
          open={true}
          onClick={navigateToSettings}
          onClose={() => {
            // setPermission(RESULTS.UNAVAILABLE);
          }}
        />
      )}
    </>
  );
};

export default AppLoadingContext;
