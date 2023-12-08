import React, { useRef, useState } from "react";
import { Button, View } from "react-native";
import StationCardSection from "../components/StationCardSection/StationCardSection";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router/Router";
import { StatusBar } from "expo-status-bar";
import { useQueryClient } from "@tanstack/react-query";
import LineTOC from "../components/_common/LineTOC/LineTOC";

const DetailScreen = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "Detail">) => {
  const queryClient = useQueryClient();

  const [refresh, setRefresh] = useState(false);
  const { station, lines } = route.params;

  const stationList = lines.map((line) => ({ station, line }));

  const flatlistRef = useRef(null);

  const moveToLine = (line: string) => {
    const index = lines.findIndex((item) => item === line);
    (flatlistRef.current as any).scrollToIndex({ index, animated: true });
  };

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          paddingLeft: 16,
          paddingVertical: 12,
          borderBottomWidth: 1,
          borderBottomColor: "#e9ecef",
        }}
      >
        {lines.map((line) => (
          <View style={{ marginRight: 8 }} key={line}>
            <LineTOC
              line={line}
              isActive={true}
              onPress={() => moveToLine(line)}
            />
          </View>
        ))}
      </View>
      <StationCardSection
        queryKey={station}
        refresh={refresh}
        onRefresh={() => {
          setRefresh(true);
          queryClient.invalidateQueries({ queryKey: ["subway", station] });
          queryClient.invalidateQueries({ queryKey: ["bookmark"] });

          setTimeout(() => {
            setRefresh(false);
          }, 500);
        }}
        stationList={stationList}
        flatlistRef={flatlistRef}
        LineFooterComponent={<View style={{ height: 92 }} />}
      />
      <StatusBar style="auto" />
    </View>
  );
};

export default DetailScreen;
