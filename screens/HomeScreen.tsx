import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/Router";

import StationCardSection from "../components/StationCardSection/StationCardSection";
import BookmarkSection from "../components/BookmarkSection/BookmarkSection";
import Seperator from "../components/_common/Seperator";
import useFindAroundStation from "../hooks/useFindAroundStation";

export type RunningSubwayInfo = {
  currentPosition: string;
  arrivalPosition: string;
};

export default function HomeScreen({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Home">) {
  const { increaseDistance, stationList, refreshLocation, refresh } =
    useFindAroundStation();

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        width: "100%",
      }}
    >
      <StationCardSection
        stationList={stationList}
        refresh={refresh}
        refreshLocation={refreshLocation}
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
