import { useEffect, useRef, useState } from "react";
import { Coordinate } from "../utils/calculateDistance";
import { LineName } from "../components/_common/LineBadge/LineBadge";
import { findStationByDistance } from "../utils/findStationByDistance";
import { isAvailableLine } from "../repository/data/isAvailableLine";
import { StationInfo } from "../repository/data/StationInfo";
import { useNavigation } from "@react-navigation/native";
import { Linking } from "react-native";

import Geolocation from "react-native-geolocation-service";

export type StationLineInfo = { station: string; line: LineName };

const useFindAroundStation = () => {
  const navigation = useNavigation();
  const coordinate = useRef({ lat: 0, lng: 0 });
  const [location, setLocation] = useState<Coordinate>({
    lat: 0,
    lng: 0,
  });

  const [distance, setDistance] = useState<number>(500);
  const increaseDistance = () => {
    if (distance >= 2000) return;

    setDistance((prev) => prev * 2);
  };
  const [refresh, setRefresh] = useState(true);

  const [stationList, setStationList] = useState<StationLineInfo[]>([]);

  const refreshLocation = () => {
    setRefresh(true);
  };

  useEffect(() => {
    // Location.getLastKnownPositionAsync().then((a) => {
    //   console.log(a);
    // });
    // Location.reverseGeocodeAsync({
    //   latitude: 37.506411,
    //   longitude: 126.742153,
    // }).then((a) => {
    //   console.log(a);
    // });
    // Location.watchPositionAsync(
    //   {
    //     accuracy: Location.Accuracy.Balanced,
    //     timeInterval: 1000 * 10,
    //     distanceInterval: 1,
    //   },
    //   (a) => {
    //     coordinate.current = {
    //       lat: a.coords.latitude,
    //       lng: a.coords.longitude,
    //     };
    //     setLocation({
    //       lat: 37.506411,
    //       lng: 126.742153,
    //     });
    //   }
    // );
  }, []);

  const requestPermission = async () => {
    return Geolocation.requestAuthorization("always");
    // const permission = await Location.requestForegroundPermissionsAsync();
    // console.log(permission);
    // if (!permission.granted) {
    //   alert("위치 권한을 허용해주세요.");
    //   return;
    // }
    // // // setLocation(coordinate.current);
    // return Location.getCurrentPositionAsync({
    //   accuracy: Location.Accuracy.Lowest,
    // }).then(({ coords }) => {
    //   setLocation({
    //     lat: 37.506411,
    //     lng: 126.742153,
    //   });
    // });
  };

  const findLocation = () => {
    Geolocation.getCurrentPosition(
      (info) => {
        console.log(info);
        setLocation({
          lat: info.coords.latitude,
          lng: info.coords.longitude,
        });
      },
      (err) => {
        Linking.openSettings();
      },
      {
        timeout: 15000,
        maximumAge: 10000,
        // distanceFilter: 0,
        // forceRequestLocation: true,
        // showLocationDialog: true,
      }
    );
  };

  useEffect(() => {
    requestPermission().then((a) => {
      findLocation();
    });
  }, []);

  useEffect(() => {
    if (location.lat === 0 && location.lng === 0) return;
    if (!refresh) return;
    console.log("refresh");
    const lineList = findStationByDistance(location, distance);

    const result = lineList.reduce((accr, curr) => {
      isAvailableLine(curr.line_num) && accr.push(curr);
      return accr;
    }, [] as StationInfo[]);

    setRefresh(false);

    setStationList(
      result.map((v) => ({
        station: v.station_nm,
        line: v.line_num,
      })) as StationLineInfo[]
    );

    // setStationList([
    //   { line: "1호선", station: "구로" },
    //   { line: "1호선", station: "신도림" },
    //   { line: "1호선", station: "영등포" },
    // ]);
  }, [location, refresh]);

  return { refreshLocation, stationList, increaseDistance, refresh };
};

export default useFindAroundStation;
