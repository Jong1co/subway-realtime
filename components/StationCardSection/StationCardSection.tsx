import React, { useCallback, useEffect, useRef, useState } from "react";
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
  setIsViewList?: (station: string) => void;
  // distance: number;
};

const StationCardSection = ({
  // distance,
  setIsViewList,
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
    console.log("success: ", success, isFetching);
    // if (isPreload) return;
    if (loading.home && success && isFetching) {
      completeHomeLoading();
    }
  }, [data, pending, success, isFetching]);
  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    try {
      setIsViewList && setIsViewList(viewableItems[0].item.line);
      console.log(viewableItems[0].item.line);
      //do anything
    } catch (error) {
      console.log(error);
    }
  }).current;

  const viewabilityConfig = {
    waitForInteraction: true,
    itemVisiblePercentThreshold: 100, //Check the price that best suits your needs.
  };
  if (isPreload) {
    return null;
  }

  return (
    <>
      <FlatList
        data={data}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewableItemsChanged}
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
          return setIsViewList
            ? item.station + item.line
            : item.station + item.line + Math.random();
          // return item.station + item.line;
        }}
        ref={flatlistRef}
      />
      <ReloadButton pause={pause || refresh} onPress={onRefreshByButton} />
    </>
  );
};

export default StationCardSection;
