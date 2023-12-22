import React, { useEffect, useState } from "react";
import {
  FlatList,
  RefreshControl,
  Text,
  TouchableWithoutFeedback,
  View,
  VirtualizedList,
} from "react-native";
import StationGroup from "../StationGroup/StationGroup";
import { LineName } from "../_common/LineBadge/LineBadge";
import ReloadButton from "../_common/ReloadButton/ReloadButton";
import { useQueryClient } from "@tanstack/react-query";
import useAppLoading from "../../hooks/useAppLoading";
import useGeoLocation from "../../hooks/useGeoLocation";
import useStationList from "../../query/useStationList";
import StationEmptyComponent from "./StationEmptyComponent";

export type StationList = { station: string; line: LineName }[];

type Props = {
  stationList: StationList;
  LineHeaderComponent?: JSX.Element;
  LineFooterComponent?: JSX.Element;
  flatlistRef?: React.RefObject<FlatList<any>>;
  refresh: boolean;
  onRefresh?: () => void;
  increaseDistance?: () => void;
  queryKey: string;
  // distance: number;
};

const StationCardSection = ({
  // distance,
  stationList,
  LineHeaderComponent,
  flatlistRef,
  refresh,
  onRefresh,
  LineFooterComponent,
  queryKey,
}: Props) => {
  const queryClient = useQueryClient();
  const [pause, setPause] = useState(false);

  const onRefreshByButton = () => {
    setPause(true);
    queryClient.invalidateQueries({ queryKey: ["subway", queryKey] });
    queryClient.invalidateQueries({ queryKey: ["bookmark"] });
  };

  const { pending, success, data, isFetching } = useStationList(
    stationList,
    queryKey
  );

  useEffect(() => {
    if (pause && !pending) {
      setTimeout(() => {
        setPause(false);
      }, 0);
    }
  }, [pending, pause]);

  // 초기 로딩
  const { completeHomeLoading, loading } = useAppLoading();

  const isPreload = loading.home && pending;

  useEffect(() => {
    console.log("pending: ", pending);
    if (isPreload) return;
    completeHomeLoading();
  }, [data, pending]);

  if (isPreload) {
    return null;
  }

  return (
    <>
      <FlatList
        data={data}
        // data={data}
        ListHeaderComponent={LineHeaderComponent}
        ListFooterComponent={LineFooterComponent}
        ListEmptyComponent={StationEmptyComponent}
        refreshControl={
          <RefreshControl //
            refreshing={refresh && isFetching}
            onRefresh={onRefresh}
            colors={["#A8A8A8"]} // 안드로이드
            tintColor={"#A8A8A8"} // ios
          />
        }
        ItemSeparatorComponent={() => (
          <View style={{ height: 16, width: "100%" }} />
        )}
        renderItem={({ item }) => <StationGroup {...item} />}
        keyExtractor={(item, index) => {
          return item.station + item.line + Math.random();
          // return item.station + item.line;
        }}
        ref={flatlistRef}
      />
      <ReloadButton pause={pause || refresh} onPress={onRefreshByButton} />
    </>
  );
};

export default StationCardSection;
