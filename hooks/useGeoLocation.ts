import { permissionState } from "./../atom/permissionState";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "../atom/locationState";
import { Linking, PermissionsAndroid, Platform } from "react-native";
import {
  PERMISSIONS,
  PermissionStatus,
  RESULTS,
  check,
  request,
} from "react-native-permissions";
import { AndroidPermissionMap } from "react-native-permissions/dist/typescript/permissions.android";
import { IOSPermissionMap } from "react-native-permissions/dist/typescript/permissions.ios";
import Geolocation from "react-native-geolocation-service";

const useGeoLocation = () => {
  const [location, setLocation] = useRecoilState(locationState);
  const [permissiont, setPermission] = useRecoilState(permissionState);

  const caseOfPermission = (
    result: PermissionStatus,
    permission: AndroidPermissionMap | IOSPermissionMap | any
  ) => {
    // console.log("gd", result);
    setPermission(result);

    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log("u");
        request(permission) //
          .then(getGeoLocation);
        break;
      case RESULTS.DENIED:
        console.log("d");
        request(permission) //
          .then((result) => {
            console.log(result, "here");
            if (result === RESULTS.DENIED) setPermission(RESULTS.BLOCKED);
            if (result === RESULTS.GRANTED) getGeoLocation();
            if (result === RESULTS.BLOCKED) {
              console.log(result, "here");
              // console.log(permissiont);
              setPermission(result);
            }
          })
          .catch((e) => console.log(e));
        break;
      case RESULTS.GRANTED:
        console.log("g");
        getGeoLocation();
        break;
      case RESULTS.LIMITED:
      case RESULTS.BLOCKED:
        // console.log("hi", result);
        setPermission(result);
        // alert("위치 정보 수집 권한이 필요합니다.");
        // navigateToSettings();
        break;
      default:
        break;
    }
  };

  async function checkPermission() {
    try {
      if (Platform.OS === "ios") {
        return await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE) //
          .then((result) =>
            caseOfPermission(result, PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
          );
      }
      // 안드로이드 위치 정보 수집 권한 요청
      if (Platform.OS === "android") {
        return await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION) //
          .then((result) => {
            // console.log(result, "here");
            caseOfPermission(result, PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
          });
      }
    } catch (e) {
      console.log(e);
    }
  }

  const getGeoLocation = () => {
    // console.log("request");
    try {
      Geolocation.getCurrentPosition(
        (position) => {
          console.log("position", position);
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

  return {
    location,
    invalidateLocation,
    requestPermissionFunc: checkPermission,
  };
};

export default useGeoLocation;

// const requestPermissionFunc = async () => {
//   checkPermission().then((result) => {
//     if (result === "never_ask_again") {
//       alert("위치 정보 수집 권한이 필요합니다.");
//       navigateToSettings();
//       return;
//     }

//     if (result === "granted") {
//       getGeoLocation();
//     }
//   });
// };
