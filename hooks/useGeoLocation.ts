import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "../atom/locationState";
import Geolocation from "react-native-geolocation-service";
import { Linking, PermissionsAndroid, Platform } from "react-native";

const useGeoLocation = () => {
  const [location, setLocation] = useRecoilState(locationState);

  async function requestPermission() {
    try {
      if (Platform.OS === "ios") {
        return await Geolocation.requestAuthorization("always");
      }
      // 안드로이드 위치 정보 수집 권한 요청
      if (Platform.OS === "android") {
        return await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );
      }
    } catch (e) {
      console.log(e);
    }
  }

  const getGeoLocation = () => {
    try {
      Geolocation.getCurrentPosition(
        (position) => {
          // console.log("position", position);
          setLocation({
            loaded: true,
            stale: false,
            coordinates: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
          });
        },
        (error) => {
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: false, timeout: 15000, maximumAge: 10000 }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const invalidateLocation = async () => {
    setLocation((prev) => ({ ...prev, stale: true }));
  };

  const requestPermissionFunc = async () => {
    requestPermission().then((result) => {
      if (result === "never_ask_again") {
        alert("위치 정보 수집 권한이 필요합니다.");
        navigateToSettings();
        return;
      }

      if (result === "granted") {
        getGeoLocation();
      }
    });
  };

  useEffect(() => {
    if (location.stale) {
      requestPermissionFunc();
    }
  }, [location.stale]);

  const navigateToSettings = () => {
    if (Platform.OS === "android") {
      // Android의 경우 애플리케이션 설정 페이지로 이동
      Linking.openSettings();
    } else {
      // iOS의 경우 애플리케이션 설정 페이지로 이동
      Linking.openURL("app-settings:");
    }
  };

  return { location, invalidateLocation, requestPermissionFunc };
};

export default useGeoLocation;
