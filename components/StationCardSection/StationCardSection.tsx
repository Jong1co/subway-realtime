import React, { useEffect, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import StationGroup from "../StationGroup/StationGroup";
import { LineName } from "../_common/LineBadge/LineBadge";
import ReloadButton from "../_common/ReloadButton/ReloadButton";
import { useQueryClient } from "@tanstack/react-query";
import useAppLoading from "../../hooks/useAppLoading";
import useGeoLocation from "../../hooks/useGeoLocation";
import useStationList from "../../query/useStationList";

export type StationList = { station: string; line: LineName }[];

type Props = {
  stationList: StationList;
  LineHeaderComponent?: JSX.Element;
  flatlistRef?: React.RefObject<FlatList<any>>;
  refresh: boolean;
  onRefresh?: () => void;
  increaseDistance?: () => void;
  queryKey: string;
};

const StationCardSection = ({
  stationList,
  LineHeaderComponent,
  flatlistRef,
  refresh,
  onRefresh,
  increaseDistance,
  queryKey,
}: Props) => {
  console.log(stationList);
  const queryClient = useQueryClient();
  const [pause, setPause] = useState(false);

  const onRefreshByButton = () => {
    setPause(true);
    queryClient.invalidateQueries({ queryKey: ["subway", queryKey] });
  };

  const combinedStationListWithData = useStationList(stationList);

  useEffect(() => {
    if (pause && !combinedStationListWithData.pending) {
      setTimeout(() => {
        setPause(false);
      }, 0);
    }
  }, [combinedStationListWithData.pending, pause]);

  // 초기 로딩
  const { completePrepare, loading } = useAppLoading();

  const isPreload =
    loading === false &&
    (combinedStationListWithData.pending ||
      combinedStationListWithData?.data?.length === 0);

  useEffect(() => {
    if (isPreload) return;
    completePrepare();
  }, [combinedStationListWithData]);

  if (isPreload) {
    return null;
  }
  // 초기 로딩

  return (
    <>
      <FlatList
        data={combinedStationListWithData.data}
        ListHeaderComponent={LineHeaderComponent}
        ListFooterComponent={<View style={{ height: 60, width: "100%" }} />}
        refreshControl={
          <RefreshControl //
            refreshing={refresh || combinedStationListWithData.pending}
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
      <ReloadButton pause={pause || refresh} onPress={onRefreshByButton} />
    </>
  );
};

export default StationCardSection;
