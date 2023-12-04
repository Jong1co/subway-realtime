import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/Router";

import StationCardSection from "../components/StationCardSection/StationCardSection";
import BookmarkSection from "../components/BookmarkSection/BookmarkSection";
import Seperator from "../components/_common/Seperator";
import useAroundStationList from "../hooks/useAroundStationList";

import useGeoLocation from "../hooks/useGeoLocation";
import useHomeHeader from "../hooks/useHomeHeader";
import { useState } from "react";

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

  const { stationList } = useAroundStationList(2000);
  const { location, invalidateLocation } = useGeoLocation();
  const header = useHomeHeader();

  return (
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
        onRefresh={invalidateLocation}
        increaseDistance={increaseDistance}
        LineHeaderComponent={
          <>
            <BookmarkSection />
            <Seperator />
          </>
        }
      />
      <StatusBar style="auto" />
    </View>
  );
}
