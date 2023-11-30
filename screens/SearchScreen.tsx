import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useMemo } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../router/Router";
import { stationInfo } from "../repository/data/StationInfo";
import { useRecoilValue } from "recoil";
import { searchState } from "../atom/searchState";
import { LineName } from "../components/_common/LineBadge/LineBadge";
import { isAvailableLine } from "../repository/data/isAvailableLine";

const SearchScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, "Search">) => {
  const searchValue = useRecoilValue(searchState);

  const stationList = useMemo(() => {
    const hash = Object.entries(stationInfo).reduce((accr, [id, station]) => {
      const { station_nm, line_num } = station;
      // 이용 불가능한 노선은 제외
      if (!isAvailableLine(line_num)) return accr;

      accr[station_nm]
        ? accr[station_nm].push(line_num as LineName)
        : (accr[station_nm] = [line_num as LineName]);

      return accr;
    }, {} as { [station in string]: LineName[] });

    return Object.entries(hash).map(([station, lines]) => {
      lines.sort();
      return { station, lines };
    });
  }, []);

  const filterStationBySearchText = (searchValue: string) => {
    return stationList.filter(({ station }) => station.includes(searchValue));
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <FlatList
        style={{ marginHorizontal: 16, flex: 1 }}
        data={filterStationBySearchText(searchValue)}
        ListHeaderComponent={() => (
          <View style={{ height: 16, width: "100%" }} />
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Detail", {
                station: item.station,
                lines: item.lines,
              });
            }}
            style={{
              paddingHorizontal: 4,
              paddingVertical: 16,
              borderBottomWidth: 1,
              borderBottomColor: "#F2F2F2",
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text>{item.station}</Text>
            <Text>{item.lines.join(",")}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={({ station }) => station}
      />
    </View>
  );
};

export default SearchScreen;
