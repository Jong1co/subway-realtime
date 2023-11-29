import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { findStationByDistance } from "../utils/findStationByDistance";
import { Coordinate } from "../utils/calculateDistance";
import { StationInfo, stationInfo } from "../repository/data/StationInfo";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import StationCard from "../components/StationCard/StationCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/Router";
import { seoulApi } from "../api";
import { RealTimeArrival } from "../repository/data/dummy";
import Header from "../components/_common/Header/Header";
import { convertDistanceFormat } from "../utils/convertDistanceFormat";
import BookmarkSection from "../components/BookmarkSection/BookmarkSection";
import Seperator from "../components/_common/Seperator";
import BookmarkButton from "../components/BookmarkButton/BookmarkButton";
import { LineServiceImpl } from "../service/LineServiceImpl";
import StationCardSection from "../components/StationCardSection/StationCardSection";

export type RunningSubwayInfo = {
  currentPosition: string;
  arrivalPosition: string;
};

export default function HomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) {
  const [location, setLocation] = useState<Coordinate>({
    lat: 0,
    lng: 0,
  });

  const [distance, setDistance] = useState<number>(2000);

  const [stationList, setStationList] = useState<StationInfo[]>([]);

  const [runningSubwayList, setRunningSubwayList] = useState<RealTimeArrival[]>(
    []
  ); // ["1호선", "2호선"

  useEffect(() => {
    requestPermission();
    Location.getCurrentPositionAsync().then(({ coords }) => {
      setLocation({
        lat: coords.latitude,
        lng: coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    if (location.lat === 0 && location.lng === 0) return;
    const result = findStationByDistance(
      { lat: 37.506193, lng: 126.676203 },
      distance
    );

    setStationList(result);
  }, [location, distance]);

  const requestPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    console.log(permission);
  };

  const moveToDetailPage = () => {
    navigation.navigate("Detail");
  };

  const onReachedLastItem = async ({
    station_nm,
  }: Pick<StationInfo, "station_nm">) => {
    const { data } = await seoulApi.get(
      `/realtimeStationArrival/1/5/${station_nm}`
    );

    const realtimeArrivalList: RealTimeArrival[] = data.realtimeArrivalList;

    // const mappedArrivalList = realtimeArrivalList.map((subway) => {
    //   return {
    //     currentPosition: subway.arvlMsg3,
    //     arrivalPosition: subway.arvlMsg2,
    //   };
    // });

    setRunningSubwayList(realtimeArrivalList);
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <Header
            title="인천 중구 운서동"
            distance={`${convertDistanceFormat(distance)}`}
          />
        );
      },
    });
    // onReachedLastItem({ station_nm: "삼산체육관" });
  }, []);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        width: "100%",
        // paddingHorizontal: 16,
        // paddingVertical: 24,
      }}
    >
      {/* <BookmarkButton /> */}
      {/* <Button
        title="요청"
        onPress={() => onReachedLastItem({ station_nm: "삼산체육관" })}
      /> */}
      <StationCardSection />

      <StatusBar style="auto" />
    </View>
  );
}
