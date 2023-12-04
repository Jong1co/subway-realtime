import { loaded } from "./../node_modules/expo-font/src/memory";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "../atom/locationState";
import Geolocation from "react-native-geolocation-service";

const useGeoLocation = () => {
  const [location, setLocation] = useRecoilState(locationState);

  const getGeoLocation = () => {
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
  };

  const invalidateLocation = async () => {
    setLocation((prev) => ({ ...prev, stale: true }));
  };

  useEffect(() => {
    if (location.stale) {
      getGeoLocation();
    }
  }, [location.stale]);

  return { location, invalidateLocation };
};

export default useGeoLocation;
