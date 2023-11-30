import React, { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import StationCardSection from "../components/StationCardSection/StationCardSection";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/Router";
import { useNavigationState } from "@react-navigation/native";
import Header from "../components/_common/Header/Header";
import SearchBar from "../components/_common/SearchBar/SearchBar";
import { HeaderTitle } from "../components/_common/Header/HeaderTitle";

const DetailScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "Detail">) => {
  const { station, lines } = route.params;

  const stationList = lines.map((line) => ({ station, line }));

  useEffect(() => {
    navigation.setOptions({
      header: ({ navigation }) => {
        return (
          <Header
            left={
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  width: 24,
                  height: 24,
                  backgroundColor: "gray",
                }}
              />
            }
            title={<HeaderTitle>{station}</HeaderTitle>}
          />
        );
      },
    });
  }, []);

  return (
    <View style={{ backgroundColor: "white" }}>
      <StationCardSection stationList={stationList} />
    </View>
  );
};

export default DetailScreen;
