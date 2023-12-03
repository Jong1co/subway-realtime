import React, { useEffect, useState } from "react";
import { Animated, FlatList, RefreshControl, Text, View } from "react-native";
import StationGroup from "../StationGroup/StationGroup";
import { LineName } from "../_common/LineBadge/LineBadge";
import useReloadButton from "../../hooks/useReloadButton";
import ReloadButton from "../_common/ReloadButton/ReloadButton";
import { StationInfo } from "../../repository/data/StationInfo";
import { seoulApi } from "../../api";
import { useQueries, useQueryClient } from "@tanstack/react-query";
import { StationServiceImpl } from "../../service/StationServiceImpl";
import { RealTimeArrival } from "../../repository/data/dummy";
import useAppLoading from "../../hooks/useAppLoading";

type Props = {
  stationList: { station: string; line: LineName }[];
  LineHeaderComponent?: JSX.Element;
  flatlistRef?: React.RefObject<FlatList<any>>;
  refreshLocation?: () => void;
  refresh?: boolean;
  increaseDistance?: () => void;
};

const StationCardSection = ({
  stationList,
  LineHeaderComponent,
  flatlistRef,
  refreshLocation,
  refresh,
  increaseDistance,
}: Props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [loadMoreList, setLoadMoreList] = useState(false);
  const [isActive, onScroll] = useReloadButton();
  const { completePrepare } = useAppLoading();

  const queryClient = useQueryClient();

  const onRefresh = () => {
    setRefreshing(true);
    //gps로 역 찾는 함수
    refreshLocation && refreshLocation();
    queryClient.invalidateQueries({ queryKey: ["subway"] }).then(() => {
      setRefreshing(false);
    });
    //api 데이터 불러오는 함수
    // setTimeout(() => {
    // }, 5000);
  };

  const onRefreshByButton = () => {
    queryClient.invalidateQueries({ queryKey: ["subway"] }).then(() => {});
  };

  const getSubwayListByStation = async ({
    station_nm,
  }: Pick<StationInfo, "station_nm">) => {
    const { data } = await seoulApi.get(
      `/realtimeStationArrival/1/20/${station_nm}`
    );
    // console.log("hi-------------------------------", station_nm);

    return (data.realtimeArrivalList as RealTimeArrival[]).map(
      (realtimeArrival) => new StationServiceImpl(realtimeArrival)
    );
  };

  const combinedStationListWithData = useQueries({
    queries: stationList?.map(({ station }) => {
      const queryKey = ["subway", station];
      const queryFn = () => getSubwayListByStation({ station_nm: station });
      const staleTime = Infinity;

      return { queryKey, queryFn, staleTime };
    }),
    combine(result) {
      return {
        data: stationList.map((value, i) => ({
          ...value,
          subwayList: result[i].data,
        })),
        pending: result.some(({ isLoading }) => isLoading),
      };
    },
  });

  useEffect(() => {
    if (
      combinedStationListWithData.pending ||
      combinedStationListWithData.data.length == 0
    )
      return;

    completePrepare();
  }, [combinedStationListWithData.pending]);

  if (
    combinedStationListWithData.pending ||
    combinedStationListWithData.data.length == 0
  ) {
    return null;
  }

  return (
    <>
      <FlatList
        // onScroll={(e) => onScroll(e.nativeEvent.contentOffset.y)}
        // scrollEventThrottle={100}
        data={combinedStationListWithData.data}
        ListHeaderComponent={LineHeaderComponent}
        ListFooterComponent={<View style={{ height: 60, width: "100%" }} />}
        refreshControl={
          <RefreshControl //
            refreshing={refreshing || combinedStationListWithData.pending}
            onRefresh={onRefresh}
            colors={["#A8A8A8"]} // 안드로이드
            tintColor={"#A8A8A8"} // ios
          />
        }
        ItemSeparatorComponent={() => (
          <View style={{ height: 16, width: "100%" }} />
        )}
        renderItem={({ item }) => <StationGroup {...item} />}
        keyExtractor={(item) => item.station + item.line}
        onEndReached={increaseDistance} // 끝에 도달하면 실행하는 함수 (무한스크롤?)
        onEndReachedThreshold={0.1} // 끝에서 10%정도 도달하면 실행하는 함수 (무한스크롤?)
        ref={flatlistRef}
        // onStartReached={() => alert("h2")} // 시작에 도달하면 실행하는 함수 (무한스크롤?)
      />
      <ReloadButton refreshing={refreshing} onPress={onRefreshByButton} />
    </>
  );
};

export default StationCardSection;
