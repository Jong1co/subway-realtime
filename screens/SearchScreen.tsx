import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import { RootStackParamList } from "../router/Router";
import { StatusBar } from "expo-status-bar";
import useSearchText from "../hooks/useSearchState";

import * as Style from "../components/Search/styles";
import getAvailableStationList from "../utils/getAvailableStationList";
import LineBadge, { LineName } from "../components/_common/LineBadge/LineBadge";

const SearchScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Search">) => {
  const [searchText] = useSearchText();

  const stationList = useMemo(getAvailableStationList, []);

  const filterStationBySearchText = (searchText: string) => {
    return stationList.filter(({ station }) =>
      `${station}역`.includes(searchText)
    );
  };

  const moveToDetailPage = (stationInfo: {
    station: string;
    lines: LineName[];
  }) => {
    navigation.navigate("Detail", stationInfo);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingTop: 16 }}>
      <FlatList
        style={{ marginHorizontal: 16, flex: 1 }}
        data={filterStationBySearchText(searchText)}
        renderItem={({ item }) => (
          <Style.StationListItem onPress={() => moveToDetailPage(item)}>
            <Style.StationTitle>{item.station}역</Style.StationTitle>
            <Style.LineWrapper>
              {item.lines.map((line) => (
                <View key={line} style={{ marginLeft: 4 }}>
                  <LineBadge line={line} />
                </View>
              ))}
            </Style.LineWrapper>
          </Style.StationListItem>
        )}
        keyExtractor={({ station }) => station}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default SearchScreen;
