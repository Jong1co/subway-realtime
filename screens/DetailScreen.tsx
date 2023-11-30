import React from "react";
import { Text, View } from "react-native";
import StationCardSection from "../components/StationCardSection/StationCardSection";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/Router";

const DetailScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "Detail">) => {
  const { station, lines } = route.params;

  const stationList = lines.map((line) => ({ station, line }));

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <Text>gdgd</Text>
      <StationCardSection stationList={stationList} />
    </View>
  );
};

export default DetailScreen;
