import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "../atom/locationState";
import Geolocation from "react-native-geolocation-service";
import { PermissionsAndroid, Platform } from "react-native";

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
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } catch (e) {
      console.log(e);
    }
  };

  const invalidateLocation = async () => {
    setLocation((prev) => ({ ...prev, stale: true }));
  };

  useEffect(() => {
    if (location.stale) {
      requestPermission().then((result) => {
        if (result === "granted") {
          getGeoLocation();
        }
      });
    }
  }, [location.stale]);

  return { location, invalidateLocation };
};

export default useGeoLocation;
