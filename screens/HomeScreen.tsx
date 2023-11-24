import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { findStationByDistance } from "../utils/findStationByDistance";
import { Coordinate } from "../utils/calculateDistance";
import { StationInfo, stationInfo } from "../data/StationInfo";
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
import { RealTimeArrival } from "../data/dummy";
import Header from "../components/_common/Header/Header";
import { convertDistanceFormat } from "../utils/convertDistanceFormat";
import BookmarkSection from "../components/BookmarkSection/BookmarkSection";
import Seperator from "../components/_common/Seperator";
import BookmarkButton from "../components/BookmarkButton/BookmarkButton";

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

  console.log(stationList);

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
      <BookmarkButton />
      {/* <Button
        title="요청"
        onPress={() => onReachedLastItem({ station_nm: "삼산체육관" })}
      /> */}
      <FlatList
        data={[stationInfo[757], stationInfo[758], stationInfo[759]]}
        ListHeaderComponent={
          <>
            <BookmarkSection />
            <Seperator />
          </>
        }
        // refreshing={true}
        ItemSeparatorComponent={() => (
          <View style={{ height: 16, width: "100%" }} />
        )}
        renderItem={({ item }) => (
          <>
            <StationCard
              onPress={moveToDetailPage}
              runningSubwayList={runningSubwayList}
              direction="left"
              {...item}
            />
            <View style={{ height: 16, width: "100%" }} />
            <StationCard
              onPress={moveToDetailPage}
              runningSubwayList={runningSubwayList}
              {...item}
            />
          </>
        )}
        keyExtractor={(item) => item.station_nm + item.line_num}
        // onEndReached={() => alert("hi")} // 끝에 도달하면 실행하는 함수 (무한스크롤?)
        // onStartReached={() => alert("h2")} // 시작에 도달하면 실행하는 함수 (무한스크롤?)
      />
      <StatusBar style="auto" />
    </View>
  );
}
