import { StatusBar } from "expo-status-bar";
import { Dimensions, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/Router";

import StationCardSection from "../components/StationCardSection/StationCardSection";
import BookmarkSection from "../components/BookmarkSection/BookmarkSection";
import Seperator from "../components/_common/Seperator";
import useAroundStationList from "../hooks/useAroundStationList";

import useGeoLocation from "../hooks/useGeoLocation";
import useHomeHeader from "../hooks/useHomeHeader";
import { useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import BottomSheet from "../components/_common/BottomSheet/BottomSheet";
import IncreaseDistanceButton from "../components/_common/IncreaseDistanceButton/IncreaseDistanceButton";
import { InfoRepository } from "../api/info";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useStationList from "../query/useStationList";

export type RunningSubwayInfo = {
  currentPosition: string;
  arrivalPosition: string;
};

export default function HomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) {
  const [distance, setDistance] = useState<number>(500);

  const increaseDistance = () => {
    if (distance >= 2000) return;

    setDistance((prev) => prev * 2);
  };

  const queryClient = useQueryClient();
  const { stationList, isLoading, setLoading } = useAroundStationList(
    distance,
    setDistance
  );
  const { location, invalidateLocation } = useGeoLocation();
  const header = useHomeHeader();
  const flatlistRef = useRef(null);

  const { data } = useStationList(stationList, "home");

  return (
    <>
      <BottomSheet />
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          width: "100%",
        }}
      >
        <StationCardSection
          queryKey={"home"}
          stationList={stationList}
          refresh={location.stale}
          onRefresh={() => {
            invalidateLocation();
            queryClient.invalidateQueries({ queryKey: ["bookmark"] });
          }}
          flatlistRef={flatlistRef}
          increaseDistance={increaseDistance}
          LineHeaderComponent={
            <>
              <BookmarkSection />
              <Seperator />
            </>
          }
          LineFooterComponent={
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 12,
                marginBottom: 80,
              }}
            >
              {(distance < 2000 || isLoading) && data.length !== 0 && (
                <IncreaseDistanceButton
                  isLoading={isLoading}
                  setLoading={() => setLoading(true)}
                  increaseDistance={increaseDistance}
                />
              )}
            </View>
          }
        />
        <StatusBar style="auto" />
      </View>
    </>
  );
}
